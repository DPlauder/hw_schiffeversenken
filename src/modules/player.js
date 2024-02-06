"use strict";

import { Gameboard } from "./gameboard.js";

class Player {
  constructor(name) {
    this.name = name;
    this.enemyGameboard = new Gameboard();
  }

  attackEnemy(x, y) {
    console.log(this.enemyGameboard);
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
