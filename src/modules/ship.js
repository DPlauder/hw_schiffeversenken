"use strict";

class Ship {
  constructor(name, length, id, direction, alignment, height) {
    this.name = name;
    this.length = length;
    this.id = id;
    // zugefügt um schiffe nicht nur vertikal spawnen zu lassen
    this.direction = direction;
    this.isSunk = false;
    this.timesHit = 0;
    this.alignment = alignment;
    this.shipHeight = height;
    //keine Ahnung was damit geplant war
    //this.ships = this.ships;
  }

  getShipLength() {
    return this.length;
  }

  hit() {
    return this.timesHit;
  }
  // zugefügt für Formen
  setShipAlignment(alignment) {
    this.alignment = alignment;
  }
  getShipAlignment() {
    return this.alignment;
  }
  getShipHeight() {
    return this.shipHeight;
  }

  // wird nicht benutzt
  // funktioniert nur für gerade schiffe
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
