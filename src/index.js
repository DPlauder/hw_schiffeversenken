// Komplette restructure mit eigenem Game(Handler)
// .js Endungen dazu wegen Webpack + use strict
"use strict";
import "./styles.scss";

import { Game } from "./Game.js";
import { EndScreen } from "./view/endScreen.js";
import { StartScreen } from "./view/startScreen.js";

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
const startScreen = new StartScreen();
const endScreen = new EndScreen();
endScreen.closeEndScreen();

document.getElementById("startGameBtn").addEventListener("click", () => {
  startScreen.hideStartScreen();
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
    /* if (!game.getPhaseOne()) {
      document
        .getElementById("selectorBtnContainer")
        .removeEventListener("click", handleClickBtns);
    } */
  }

  // Game Phase 2
  // shots fired

  let playerTurn = true;
  document.getElementById("boardKi").addEventListener("click", (e) => {
    if (!game.getPhaseOne()) {
      //player shots
      if (playerTurn) {
        if (game.playerShoot(e) !== false) {
          game.playerShoot(e);
          playerTurn = false;
        }
      }
      //CPU shots
      if (playerTurn === false) {
        game.cpuShoot();
        playerTurn = true;
      }
      if (!game.getGameRuns()) {
        console.log("game end");
        endScreen.openEndScreen();
        document.getElementById("newGameBtn").addEventListener("click", () => {
          game.resetGame();
          endScreen.closeEndScreen();
          document
            .getElementById("selectorBtnContainer")
            .addEventListener("click", handleClickBtns);
        });
      }
    }
  });
});

//TODO Spiel beenden bei Sieg( Abfrage wer gewonnen) mit Screen neues Game
//TODO Kapitäne!!!
//TODO Ablauf Erklärung Schiffe platzieren
//TODO READM ME erstellen
//Bonus
//TODO Gesetzte Schiffe im Sidebar anzeigen lassen
//TODO Versenkte Schiffe/Übrige Anzeigen
