"use strict";

import { Ship } from "./ship.js";

class Gameboard {
  constructor() {
    //gameboard init mit Gameboard
    this.gameboard = this.createGameboard();
    this.ships = [];
    //zugefügt für max shiffe
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
  //dazu abfrage max schiffe
  checkMaxShips(ship) {
    if (ship.alignment === "straight")
      if (this.counter + ship.getShipLength() > 30) return true;
    if (ship.alignment === "rectangle")
      if (this.counter + ship.getShipLength() * 2 > 30) return true;
    if (ship.alignment === "corner")
      if (this.counter + (ship.getShipLength() + ship.getShipHeight()) > 30)
        return true;
    return false;
  }
  addShipCounter(ship) {
    if (ship.alignment === "straight") this.counter += ship.getShipLength();
    if (ship.alignment === "rectangle")
      this.counter += ship.getShipLength() * 2;
    if (ship.alignment === "corner")
      this.counter += ship.getShipLength() + ship.getShipHeight();
  }
  // wurde nicht benutzt
  // komplett umgebaut um alle Schiffsarten zu platzieren + counter
  placeShipPlayer(ship, x, y) {
    const id = this.ships.length + 1;
    const shipClone = new Ship(
      ship.name,
      ship.length,
      id,
      ship.direction,
      ship.alignment,
      ship.getShipHeight()
    );
    this.shipPlacement(shipClone, x, y);
    this.addShipCounter(shipClone);

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
  }
  shipPlacement(ship, x, y) {
    console.log("hello placement", ship);
    if (ship.direction === "h" && ship.alignment === "straight") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x][y + i] = ship.id;
      }
    }
    if (ship.direction === "v" && ship.alignment === "straight") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x + i][y] = ship.id;
      }
    }
    if (ship.direction === "v" && ship.alignment === "rectangle") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x + i][y] = ship.id;
        this.gameboard[x + i][y + 1] = ship.id;
      }
    }
    if (ship.direction === "h" && ship.alignment === "rectangle") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x][y + i] = ship.id;
        this.gameboard[x + 1][y + i] = ship.id;
      }
    }
    if (ship.direction === "se" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x + i][y] = ship.id;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        this.gameboard[x][y + j] = ship.id;
      }
    }
    if (ship.direction === "sw" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x + i][y] = ship.id;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        this.gameboard[x][y - j] = ship.id;
      }
    }
    if (ship.direction === "nw" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x - i][y] = ship.id;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        this.gameboard[x][y - j] = ship.id;
      }
    }
    if (ship.direction === "ne" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        this.gameboard[x - i][y] = ship.id;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        this.gameboard[x][y + j] = ship.id;
      }
    }
  }
  //dazufefügt für CPU random direction
  setCpuDirection(alignment) {
    if (alignment === "straight" || alignment === "rectangle")
      return Math.random() >= 0.5 ? "h" : "v";
    if (alignment === "corner") {
      const randomInt = Math.floor(Math.random() * 4);
      switch (randomInt) {
        case 0:
          return "nw";
        case 1:
          return "sw";
        case 2:
          return "se";
        case 3:
          return "ne";
        default:
          console.log("fehler switch");
      }
    }
  }
  // angepasst damit CPU immer die selben Schiffe erstellt wie Player
  createShipsCPU(ships) {
    //counter hinzugefügt für ids
    let idCounter = 1;
    ships.forEach((ship) => {
      const shipDirection = this.setCpuDirection(ship.alignment);
      this.ships.push(
        new Ship(
          ship.name,
          ship.length,
          idCounter,
          shipDirection,
          ship.alignment,
          ship.height
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
  // rausgenommen und wird jetzt für Spieler und CPU in einem erstellt
  // setShipPositionCpu(x, y, ship) {
  //   const shiplength = ship.getShipLength();
  //   for (let i = 0; i < shiplength; i++) {
  //     if (ship.direction == "h") this.gameboard[x][y + i] = ship.id;
  //     if (ship.direction == "v") this.gameboard[x + i][y] = ship.id;
  //   }
  // }

  placeShipsCPU() {
    for (const ship of this.ships) {
      do {
        x = this.getRandCoordinate();
        y = this.getRandCoordinate();
        console.log(x, y);
      } while (!this.isPlacementValid(x, y, ship));
      this.shipPlacement(ship, x, y);
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
  // Regeln für alle schiffsarten dazu
  // verallgemeinert damit Abfrage auch für Spielerplatzierung funktioniert
  isPlacementValid(x, y, ship) {
    x = parseInt(x);
    y = parseInt(y);
    if (ship.getShipAlignment() === "straight") {
      if (this.checkShipsStraight(x, y, ship)) return true;
      else false;
    }
    if (ship.getShipAlignment() === "rectangle") {
      if (this.checkShipsRectangle(x, y, ship)) return true;
      else false;
    }
    if (ship.getShipAlignment() === "corner") {
      if (this.checkShipsCorner(x, y, ship)) return true;
      else false;
    }
  }
  //alle Checks für unterschiedliche Schiffsarten
  // so gestalltet dass alle schiffe größen anpassbar sind
  checkShipsStraight(x, y, ship) {
    for (let i = 0; i < ship.getShipLength(); i++) {
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
  checkShipsRectangle(x, y, ship) {
    for (let i = 0; i < ship.getShipLength(); i++) {
      if (ship.direction === "v") {
        if (x + i > 9 || y + 1 > 9) return false;
        if (
          this.gameboard[x + i][y] !== 0 ||
          this.gameboard[x + i][y + ship.getShipHeight()] !== 0
        )
          return false;
      }

      if (ship.direction === "h") {
        if (y + i > 9 || x + 1 > 9) return false;
        if (
          this.gameboard[x][y + i] !== 0 ||
          this.gameboard[x + ship.getShipHeight()][y + i] !== 0
        )
          return false;
      }
    }
    return true;
  }

  checkShipsCorner(x, y, ship) {
    if (ship.direction === "se" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        if (x + i > 9) return false;
        if (this.gameboard[x + i][y] !== 0) return false;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        if (y + j > 9) return false;
        if (this.gameboard[x][y + j] !== 0) return false;
      }
    }
    if (ship.direction === "sw" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        if (x + i > 9) return false;
        if (this.gameboard[x + i][y] !== 0) return false;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        if (y - j < 0) return false;
        if (this.gameboard[x][y - j] !== 0) return false;
      }
    }
    if (ship.direction === "nw" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        if (x - i < 0) return false;
        if (this.gameboard[x - i][y] !== 0) return false;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        if (y - j < 0) return false;
        if (this.gameboard[x][y - j] !== 0) return false;
      }
    }
    if (ship.direction === "ne" && ship.alignment === "corner") {
      for (let i = 0; i < ship.getShipLength(); i++) {
        if (x - i < 0) return false;
        if (this.gameboard[x - i][y] !== 0) return false;
      }
      for (let j = 0; j < ship.getShipHeight() + 1; j++) {
        if (y + j > 9) return false;
        if (this.gameboard[x][y + j] !== 0) return false;
      }
    }
    return true;
  }
  // dazu für random Cords
  getRandCoordinate() {
    return Math.floor(Math.random() * 10);
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
      //geändert mit setter und direkten Zugriff verhindert
      ship.setShipHits();
      //setter Methode als Ersatz
      //this.gameboard[x][y] = "Treffer";
      this.setGameBoard(x, y, "T");
      //geändert mit getter und true or false anstelle von Abfrage Länge
      if (ship.getShipSunk()) {
        //rausgenommen und vereinfacht in der if mit getter
        //ship.isSunk = true;
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
