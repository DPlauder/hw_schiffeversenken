// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";
import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";
import { GameboardView } from "./view/gameboardview.js";
import { ShipSelectorUi } from "./view/shipsSelectorUi.js";
import { ShipSelector } from "./modules/shipSelector.js";

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

//zum testen geadded <<<<<<<<<<<<===================================
let x = 11;
let y = 11;
const setShipPosition = document
  .getElementById("boardPlayer")
  .addEventListener("click", (e) => {
    const key = e.target.id;
    if (key < 10) {
      (x = 0), (y = parseInt(key));
    } else {
      (x = parseInt(key[0])), (y = parseInt(key[1]));
    }
  });

let shipNumb = 1;
let direction = "h";
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
    if (key === "h" || key == "v") {
      console.log(key);
      if (key === "h") direction = "v";
      if (key === "v") direction = "h";
      shipsSelectorUi.changeVariant(key);
    }
    shipsSelectorUi.createShipFrame(shipNumb);
    if (key === "O") {
      if (
        gameboardPlayer.isPlacementValid(
          x,
          y,
          shipSelector.getchosenShip(shipNumb, direction)
        )
      ) {
        shipSelector.addChosenShips(shipNumb);
        gameboardPlayer.placeShip(
          shipSelector.getchosenShip(shipNumb, direction),
          x,
          y
        );
        gameBoardViewPlayer.showShips(gameboardPlayer.getGameBoard());
      } else {
        console.log("cant place ship there");
      }
    }
    if (key === "Start") {
      gameboardKI.createShipsCPU(shipSelector.getChosenShips());
      gameboardKI.placeShipsCPU();
      console.log("shipObjects", shipSelector.shipsObjects);
      console.log(shipSelector.chosenShips);
    }
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
