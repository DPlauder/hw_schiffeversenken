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
  //dazugefügt
  setShipHits() {
    this.timesHit++;
    this.checkShipSunk();
  }
  getShipHits() {
    return this.setShipHits;
  }
  // wird nicht benutzt
  // funktioniert nur für gerade schiffe
  checkShipSunk() {
    //komplett rausgenommen, hat er sowieso nicht benutzt
    //genau das gleiche schon in der gameboard attackship abgefragt
    //keine ahnung wofür er die forEach gebraucht hat,
    //this.ships hat keine Schiffe erhalten und macht auch null Sinn
    // this.ships.forEach((ship) => {
    //   console.log(this.height, this.length, this.alignment);
    //   if (ship.timesHit === ship.shipLength()) {
    //     ship.isSunk = true;
    //   }
    //   if (ship.isSunk) {
    //     console.log("Du hast " + ship.name + " zum sinken gebracht");
    //   }
    // });
    if (this.alignment === "straight") {
      if (this.timesHit >= this.length) this.isSunk = true;
    }
    if (this.alignment === "rectangle")
      if (this.timesHit === this.length * 2) this.isSunk = true;
    if (this.alignment === "corner")
      if (this.timesHit === this.length + this.shipHeight) this.isSunk = true;
  }
  //dazugefügt für bessere Kontrolle
  getShipSunk() {
    return this.isSunk;
  }
}

export { Ship };
