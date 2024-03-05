// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";
import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";
import { GameboardView } from "./view/gameboardview.js";
import { ShipSelectorUi } from "./view/shipsSelectorUi.js";
import { ShipSelector } from "./modules/shipSelector.js";
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

// Backend init
//let declarations schreibgeschützt gesetzt(const)
const gameboardPlayer = new Gameboard();
const gameboardKI = new Gameboard();
const shipSelector = new ShipSelector();
const player = new Player("Marko", gameboardKI);

//UI init
const gameBoardViewPlayer = new GameboardView("boardPlayer");
const gameBoardViewKi = new GameboardView("boardKi");
const shipsSelectorUi = new ShipSelectorUi();
shipsSelectorUi.createShipFrame(1);

//GameHandler init
const game = new Game(
  gameboardPlayer,
  gameboardKI,
  shipSelector,
  gameBoardViewPlayer,
  gameBoardViewKi,
  shipsSelectorUi
);

//zum testen geadded <<<<<<<<<<<<===================================
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
  const targetCell = e.target.id;
  if (targetCell < 10) {
    player.attackEnemy(0, targetCell);
  } else {
    player.attackEnemy(targetCell[0], targetCell[1]);
  }
  gameBoardViewKi.updateViewBoard(gameboardKI.getGameBoard());

  //CPU Shots
  gameboardPlayer.attackShip(
    gameboardPlayer.getRandCoordinate(),
    gameboardPlayer.getRandCoordinate()
  );
  gameBoardViewPlayer.updateViewBoard(gameboardPlayer.getGameBoard());

  if (gameboardKI.checkWin()) console.log("Spieler hat alle Schiffe versenkt");
  if (gameboardPlayer.checkWin()) console.log("CPU hat alle Schiffe versenkt");
});
