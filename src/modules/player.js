"use strict";

import { Gameboard } from "./gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.enemyGameboard = new Gameboard();
  }

  attackEnemy(x, y) {
    const result = this.enemyGameboard.attackShip(x, y);
    if (result === "Treffer") {
      console.log("Treffer!");
    } else if (result === "X") {
      console.log("Bereits an dieser Stelle geschossen!");
    } else if (result === "Versenkt") {
      console.log("Versenkt!");
    } else {
      console.log("Verfehlt!");
    }
  }
}

export { Player };
