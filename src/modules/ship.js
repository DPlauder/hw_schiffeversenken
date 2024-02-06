"use strict";

import { Gameboard } from "./gameboard.js";

class Ship {
  constructor(name, length, number) {
    this.name = name;
    this.length = length;
    this.shipNumber = number;
    this.isSunk = false;
    this.timesHit = 0;
    this.ships = this.ships;
  }

  shipLength() {
    return this.length;
  }

  hit() {
    return this.timesHit;
  }

  checkShipSunk() {
    this.ships.forEach((ship) => {
      if (ship.timesHit === ship.shipLength()) {
        ship.isSunk = true;
      }
      if (ship.isSunk) {
        console.log("Du hast " + ship.name + " zum sinken gebracht");
      }
    });
  }
}

export { Ship };
