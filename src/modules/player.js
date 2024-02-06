"use strict";

import { Gameboard } from "./gameboard.js";

class Player {
  //erweitert mit enemyGameboard
  constructor(name, enemyGameboard) {
    this.name = name;
    this.enemyGameboard = enemyGameboard;
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
