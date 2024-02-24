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
    //temporäres Array für Erstellung + return
    const board = [];
    let innerArray = [];
    for (let i = 0; i < 10; i++) {
      innerArray = [];
      for (let j = 0; j < 10; j++) {
        innerArray.push(0);
      }
      board.push(innerArray);
    }
    return board;
  }
  // wird nicht benutzt
  placeShip(ship, x, y) {
    const id = this.ships.length + 1;
    const shipClone = new Ship(ship.name, ship.length, id, ship.direction);
    if (shipClone.direction === "h") {
      for (let i = 0; i < shipClone.getShipLength(); i++) {
        this.gameboard[x][y + i] = shipClone.id;
      }
    }
    if (shipClone.direction === "v") {
      for (let i = 0; i < shipClone.getShipLength(); i++) {
        this.gameboard[x + i][y] = shipClone.id;
      }
    }
    // rausgenommen
    /* 
    let z = 1;
    if (this.gameboard[x][y] !== 0) {
      console.log("Hallo, hier ist ein Schiff! Platziere es bitte wo anders");
    } else {
      for (let i = 0; i < ship.shipLength(); i++) {
        if ([x + i] > 9) {
          this.gameboard[x - z][y] = ship.id;
          z++;
        } else {
          this.gameboard[x + i][y] = ship.id;
        }
      }
       */
    this.ships.push(shipClone);
  }
  // angepasst damit CPU immer die selben Schiffe erstellt wie Player
  createShipsCPU(ships) {
    //counter hinzugefügt für ids
    let idCounter = 1;
    ships.forEach((ship) => {
      this.ships.push(
        new Ship(
          ship.name,
          ship.length,
          idCounter,
          Math.random() >= 0.5 ? "h" : "v"
        )
      );
      idCounter++;
    });
    // rausgenommen weil unnötig / doppelt
    /* 
    const carrier = new Ship("carrier", 5, 5, this.ships);
    const battleship = new Ship("battleship", 4, 4, this.ships);
    const cruiser = new Ship("cruiser", 3, 3, this.ships);
    const submarine = new Ship("submarine", 3, 2, this.ships);
    const destroyer = new Ship("Destroyer", 2, 1, this.ships);
     */
    //this.ships.push(carrier, battleship, cruiser, submarine, destroyer);
    //console.log(this.ships);
  }
  // Funktion ausgelagert von placeShips & geändert damit schiffe horizontal oder vertikal
  setShipPosition(x, y, ship) {
    const shiplength = ship.getShipLength();
    for (let i = 0; i < shiplength; i++) {
      if (ship.direction == "h") this.gameboard[x][y + i] = ship.id;
      if (ship.direction == "v") this.gameboard[x + i][y] = ship.id;
    }
  }

  placeShipsCPU() {
    for (const ship of this.ships) {
      let x = 0;
      let y = 0;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!this.isPlacementValid(x, y, ship));
      this.setShipPosition(x, y, ship);
      /* 
      for (let i = 0; i < ship.shipLength(); i++) {
        if (x + i > 9) {
          this.gameboard[x - z][y] = ship.id;
          z++;
        } else {
          this.gameboard[x + i][y] = ship.id;
        }
      }
       */
    }
  }
  // Regeln für Horizontale Schiffplatzierung dazu
  // verallgemeinert damit Abfrage auch für Spielerplatzierung funktioniert
  isPlacementValid(x, y, ship) {
    const shipLength = ship.getShipLength();
    x = parseInt(x);
    y = parseInt(y);
    for (let i = 0; i < shipLength; i++) {
      if (ship.direction === "v") {
        if (x + i > 9) return false;
        if (this.gameboard[x + i][y] !== 0) return false;
      }
      if (ship.direction === "h") {
        if (y + i > 9) return false;
        if (this.gameboard[x][y + i] !== 0) return false;
      }
    }
    return true;
  }

  attackShip(x, y) {
    const currentItem = this.gameboard[x][y];
    const ship = this.ships.find((ship) => ship.id === currentItem);
    //Abfrage Feld Doppelschuss
    if (this.gameboard[x][y] === "T" || this.gameboard[x][y] === "X") {
      console.log("Auf das Feld wurde schon geschossen");
      return false;
    }
    if (ship) {
      ship.timesHit++;
      //setter Methode als Ersatz
      //this.gameboard[x][y] = "Treffer";
      this.setGameBoard(x, y, "T");

      if (ship.timesHit === ship.getShipLength()) {
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
  checkWin() {
    return this.ships.every((ship) => ship.isSunk === true);
  }
}

export { Gameboard };
