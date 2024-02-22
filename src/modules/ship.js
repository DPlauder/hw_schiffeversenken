"use strict";

class Ship {
  constructor(name, length, id, direction) {
    this.name = name;
    this.length = length;
    this.id = id;
    // zugefügt um schiffe nicht nur vertikal spawnen zu lassen
    this.direction = direction;
    this.isSunk = false;
    this.timesHit = 0;
    //keine Ahnung was damit geplant war
    //this.ships = this.ships;
  }

  getShipLength() {
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
