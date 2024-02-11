"use strict";

import { Ship } from "./ship.js";

class Gameboard {
  constructor() {
    //gameboard init mit Gameboard
    this.gameboard = this.createGameboard();
    this.ships = [];
    this.counter = 0;
  }

  createGameboard() {
    //temporäre Variable für Erstellung + return
    const board = [];
    for (let i = 0; i < 10; i++) {
      const innerArray = [];
      for (let j = 0; j < 10; j++) {
        innerArray.push(0);
      }
      board.push(innerArray);
    }
    return board;
  }

  placeShip(ship, x, y) {
    let z = 1;
    if (this.gameboard[x][y] !== 0) {
      console.log("Hallo, hier ist ein Schiff! Platziere es bitte wo anders");
    } else {
      for (let i = 0; i < ship.shipLength(); i++) {
        if ([x + i] > 9) {
          this.gameboard[x - z][y] = ship.shipNumber;
          z++;
        } else {
          this.gameboard[x + i][y] = ship.shipNumber;
        }
      }
      this.ships.push(ship);
    }
  }
  // angepasst damit CPU immer die selben Schiffe erstellt wie Player
  createShipsCPU(ships) {
    ships.forEach((ship) => {
      this.ships.push(new Ship(ship.name, ship.length, ship.id));
    });
    /* 
    const carrier = new Ship("carrier", 5, 5, this.ships);
    const battleship = new Ship("battleship", 4, 4, this.ships);
    const cruiser = new Ship("cruiser", 3, 3, this.ships);
    const submarine = new Ship("submarine", 3, 2, this.ships);
    const destroyer = new Ship("Destroyer", 2, 1, this.ships);
     */
    //this.ships.push(carrier, battleship, cruiser, submarine, destroyer);
  }

  placeShipsCPU() {
    for (const ship of this.ships) {
      let x, y, z;

      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        z = 1;
      } while (!this.isPlacementValid(x, y, ship));

      for (let i = 0; i < ship.shipLength(); i++) {
        if (x + i > 9) {
          this.gameboard[x - z][y] = ship.shipNumber;
          z++;
        } else {
          this.gameboard[x + i][y] = ship.shipNumber;
        }
      }
    }
  }

  isPlacementValid(x, y, ship) {
    for (let i = 0; i < ship.shipLength(); i++) {
      if (x + i > 9 || this.gameboard[x + i][y] !== 0) {
        return false;
      }
    }
    return true;
  }

  attackShip(x, y) {
    const currentItem = this.gameboard[x][y];
    const ship = this.ships.find((ship) => ship.shipNumber === currentItem);
    if (ship) {
      ship.timesHit++;
      //setter Methode als Ersatz
      //this.gameboard[x][y] = "Treffer";
      this.setGameBoard(x, y, "Treffer");

      if (ship.timesHit === ship.shipLength()) {
        ship.isSunk = true;
        console.log(`Du hast ${ship.name} versenkt!`);
        return "Versenkt";
      } else {
        console.log("Treffer!");
        return "Treffer";
      }
    } else {
      console.log("Verfehlt!");
      //setter Ersatz
      //this.gameboard[x][y] = "X";
      this.setGameBoard(x, y, "X");

      return "Verfehlt";
    }
  }
  // setter + getter für Gameboardänderungen
  setGameBoard(x, y, marker) {
    this.gameboard[x][y] = marker;
  }
  getGameBoard() {
    return this.gameboard;
  }
}

export { Gameboard };
