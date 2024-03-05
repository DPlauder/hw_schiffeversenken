// Komplette restructure mit eigenem Game(Handler)
// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";

import { Game } from "./Game.js";

/* rausgenommen da nichtmehr gebraucht
//Testschiffe;
const ships = [];
const carrier = new Ship("carrier", 5);
const battleship = new Ship("battleship", 4);
const cruiser = new Ship("cruiser", 3);
const submarine = new Ship("submarine", 3);
const destroyer = new Ship("Destroyer", 2);
//ships.push(carrier, battleship, cruiser, submarine, destroyer);
ships.push(carrier);
//Schiffe generieren und platzieren
gameboardPlayer.createShipsCPU(ships);
gameboardPlayer.placeShipsCPU();
gameboardKI.createShipsCPU(ships);
gameboardKI.placeShipsCPU();
*/

//GameHandler init
const game = new Game();

//Schiff Auswahl Phase 1
document
  .getElementById("boardPlayer")
  .addEventListener("click", handleClickCoords);

function handleClickCoords(e) {
  game.handleShipCoordClick(e);
  if (!game.getPhaseOne()) {
    document
      .getElementById("boardPlayer")
      .removeEventListener("click", handleClickCoords);
  }
}
document
  .getElementById("selectorBtnContainer")
  .addEventListener("click", handleClickBtns);

function handleClickBtns(e) {
  game.handleBtnsClick(e);
  if (!game.getPhaseOne()) {
    document
      .getElementById("selectorBtnContainer")
      .removeEventListener("click", handleClickBtns);
  }
}

// Game Phase 2
//shoot on CPU Board

document.getElementById("boardKi").addEventListener("click", (e) => {
  //player shots
  game.playerShoot(e);
  //CPU shots
  game.cpuShoot();
});
