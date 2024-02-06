import "./styles.scss";
import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";
import { Ship } from "./modules/ship.js";

//let declarations schreibgeschützt
const gameboardPlayer = new Gameboard();
const gameboardKI = new Gameboard();

const player = new Player("Marko", gameboardKI);

gameboardKI.createShipsCPU();

const carrier = new Ship("carrier", 5, 5);
const battleship = new Ship("battleship", 4, 4);
const cruiser = new Ship("cruiser", 3, 3);
const submarine = new Ship("submarine", 3, 2);
const destroyer = new Ship("Destroyer", 2, 1);

gameboardKI.placeShipsCPU();
gameboardPlayer.createShipsCPU();
gameboardPlayer.placeShipsCPU();

console.log(gameboardPlayer.gameboard);
console.log("helloKi", gameboardKI);

player.attackEnemy(3, 4);
