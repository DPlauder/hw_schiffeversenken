// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";
import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";
import { Ship } from "./modules/ship.js";
import { GameboardView } from "./view/gameboardview.js";

//let declarations schreibgeschützt
const gameboardPlayer = new Gameboard();
const gameboardKI = new Gameboard();

const player = new Player("Marko", gameboardKI);

// Testschiffe
const ships = [];
const carrier = new Ship("carrier", 5, 5, "h");
const battleship = new Ship("battleship", 4, 4, "h");
const cruiser = new Ship("cruiser", 3, 3, "h");
const submarine = new Ship("submarine", 3, 2, "h");
const destroyer = new Ship("Destroyer", 2, 1, "h");

ships.push(carrier, battleship, cruiser, submarine, destroyer);

gameboardPlayer.createShipsCPU(ships);
gameboardPlayer.placeShipsCPU();
gameboardKI.createShipsCPU(ships);
gameboardKI.placeShipsCPU();

console.log("helloKi", gameboardKI);

const newGameBoardView = new GameboardView();
newGameBoardView.showShips(gameboardKI.getGameBoard());

//zum testen geadded
let shot = 0;
while (shot < 100) {
  shot = prompt("gib nummer von 00 bis 99 ein oder beende mit 100");
  let x = shot[0];
  let y = shot[1];
  player.attackEnemy(x, y);
  newGameBoardView.updateViewBoard(gameboardKI.getGameBoard());
}
