// Komplette restructure mit eigenem Game(Handler)
// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";

import { Game } from "./Game.js";
import { EndScreen } from "./view/endScreen.js";

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
let game = new Game();

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
  if (!game.getGameEnd()) {
    console.log("game end");
    const endScreen = new EndScreen();
    document.getElementById("newGameBtn").addEventListener("click", () => {
      const newGame = new Game();
      game = newGame;
      endScreen.closeEndScreen();
    });
  }
});

//TODO Spiel beenden bei Sieg( Abfrage wer gewonnen) mit Screen neues Game
//TODO Shipselector ausblenden wenn Phase 2
//TODO Feedback bei Schiffplatzieren Position
//TODO Kapitäne
//TODO Abfangen CPU doppelt auf Feld schießen
//
