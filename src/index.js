// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";
import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";
import { Ship } from "./modules/ship.js";
import { GameboardView } from "./view/gameboardview.js";
import { ShipSelectorUi } from "./view/shipsSelectorUi.js";
import { ShipSelector } from "./modules/shipSelector.js";

//let declarations schreibgeschützt
const gameboardPlayer = new Gameboard();
const gameboardKI = new Gameboard();

const player = new Player("Marko", gameboardKI);

//Testschiffe;
const ships = [];
const carrier = new Ship("carrier", 5);
/* 
const battleship = new Ship("battleship", 4);
const cruiser = new Ship("cruiser", 3);
const submarine = new Ship("submarine", 3);
const destroyer = new Ship("Destroyer", 2);

//ships.push(carrier, battleship, cruiser, submarine, destroyer);
ships.push(carrier);
//Schiffe generieren und platzieren

gameboardPlayer.createShipsCPU(ships);
gameboardPlayer.placeShipsCPU();
 */
//gameboardKI.createShipsCPU(ships);
//gameboardKI.placeShipsCPU();

//UI
const gameBoardViewPlayer = new GameboardView("boardPlayer");
const gameBoardViewKi = new GameboardView("boardKi");
const shipSelector = new ShipSelector();
const shipsSelectorUi = new ShipSelectorUi();

gameBoardViewPlayer.showShips(gameboardPlayer.getGameBoard());

//zum testen geadded <<<<<<<<<<<<===================================

let x = 11;
let y = 11;
const setShipPosition = document
  .getElementById("boardPlayer")
  .addEventListener("click", (e) => {
    const key = e.target.id;
    if (key < 10) {
      (x = 0), (y = key);
    } else {
      (x = key[0]), (y = key[1]);
    }
  });

let shipNumb = 1;
shipsSelectorUi.createShipFrame(shipNumb);
const select = document
  .getElementById("selectorBtnContainer")
  .addEventListener("click", (e) => {
    const key = e.target.textContent;
    if (key === ">" && shipNumb < 5) {
      shipNumb++;
    }
    if (key === "<" && shipNumb > 1) {
      shipNumb--;
    }
    shipsSelectorUi.createShipFrame(shipNumb);
    if (key === "O") {
      if (
        gameboardPlayer.isPlacementValid(
          x,
          y,
          shipSelector.getchosenShip(shipNumb)
        )
      ) {
        shipSelector.addChosenShips(x, y, shipNumb);
      } else {
        console.log("cant place ship there");
      }
    }
    if (key === "Start") console.log(shipSelector.getChosenShips());
  });

const shootBoard = document
  .getElementById("boardKi")
  .addEventListener("click", (e) => {
    const targetCell = e.target.id;
    if (targetCell < 10) {
      player.attackEnemy(0, targetCell);
    } else {
      player.attackEnemy(targetCell[0], targetCell[1]);
    }
    gameBoardViewKi.updateViewBoard(gameboardKI.getGameBoard());
    if (gameboardKI.checkWin()) console.log("Alle Schiffe versenkt");
  });
