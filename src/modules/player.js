"use strict";

class Player {
  //erweitert mit enemyGameboard
  constructor(name, enemyGameboard) {
    this.name = name;
    //tausch neues leeres Board mit param Board
    this.enemyGameboard = enemyGameboard;
  }

  attackEnemy(x, y) {
    const result = this.enemyGameboard.attackShip(x, y);
    //rausgenommen da | passiert bereits in gameboard.attackShip
    /* 
    if (result === "Treffer") {
      console.log("Treffer!");
    } else if (result === "X") {
      console.log("Bereits an dieser Stelle geschossen!");
    } else if (result === "Versenkt") {
      console.log("Versenkt!");
    } else {
      console.log("Verfehlt!");
    } */
  }
}
export { Player };
