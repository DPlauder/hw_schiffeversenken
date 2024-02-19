// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";
import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";
import { Ship } from "./modules/ship.js";
import { GameboardView } from "./view/gameboardview.js";
import { ShipSelector } from "./view/shipsSelector.js";

//let declarations schreibgeschützt
const gameboardPlayer = new Gameboard();
const gameboardKI = new Gameboard();

const player = new Player("Marko", gameboardKI);

//Testschiffe;
const ships = [];
const carrier = new Ship("carrier", 5, 5, "h");
const battleship = new Ship("battleship", 4, 4, "h");
const cruiser = new Ship("cruiser", 3, 3, "h");
const submarine = new Ship("submarine", 3, 2, "h");
const destroyer = new Ship("Destroyer", 2, 1, "h");

ships.push(carrier, battleship, cruiser, submarine, destroyer);

//Schiffe generieren und platzieren
/* 
gameboardPlayer.createShipsCPU(ships);
gameboardPlayer.placeShipsCPU();
 */
gameboardKI.createShipsCPU(ships);
gameboardKI.placeShipsCPU();

//UI
const gameBoardViewPlayer = new GameboardView("boardPlayer");
const gameBoardViewKi = new GameboardView("boardKi");
const shipsSelector = new ShipSelector();

gameBoardViewPlayer.showShips(gameboardPlayer.getGameBoard());

//zum testen geadded <<<<<<<<<<<<===================================

let shipSelector = 0;
const select = document
  .getElementById("selectorBtnContainer")
  .addEventListener("click", (e) => {
    const key = e.target.textContent;
    if (key === ">") {
      shipSelector++;
      shipsSelector.createShipFrame(shipSelector);
    }
    if (key === "<" && shipSelector > 0) {
      shipSelector--;
      shipsSelector.createShipFrame(shipSelector);
    }
  });

const shootBoard = document
  .getElementById("boardKi")
  .addEventListener("click", (e) => {
    const targetCell = e.target.id;
    if (targetCell < 10) {
      "00" + targetCell;
      player.attackEnemy(0, targetCell);
    } else {
      player.attackEnemy(targetCell[0], targetCell[1]);
    }
    gameBoardViewKi.updateViewBoard(gameboardKI.getGameBoard());
    if (gameboardKI.checkWin()) console.log("Alle Schiffe versenkt");
  });
