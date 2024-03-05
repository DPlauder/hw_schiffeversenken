import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";
import { GameboardView } from "./view/gameboardview.js";
import { ShipSelectorUi } from "./view/shipsSelectorUi.js";
import { ShipSelector } from "./modules/shipSelector.js";

class Game {
  constructor() {
    // backend init
    this.gameboardPlayer = new Gameboard();
    this.gameboardKI = new Gameboard();
    this.shipSelector = new ShipSelector();
    this.player = new Player("Marko", this.gameboardKI);
    this.gameBoardViewPlayer = new GameboardView("boardPlayer");
    //frontend init
    this.gameBoardViewKi = new GameboardView("boardKi");
    this.shipsSelectorUi = new ShipSelectorUi();
    this.shipsSelectorUi.createShipFrame(1);

    this.x = 11;
    this.y = 11;
    this.shipNumb = 1;
    this.direction = "h";
    this.phaseOne = true;
  }
  handleShipCoordClick(e) {
    const key = e.target.id;
    if (key < 10) {
      (this.x = 0), (this.y = parseInt(key));
    } else {
      (this.x = parseInt(key[0])), (this.y = parseInt(key[1]));
    }
  }

  handleBtnsClick(e) {
    const key = e.target.textContent;

    if (key === ">" && this.shipNumb < 9) {
      this.shipNumb += 1;
    }
    if (key === "<" && this.shipNumb > 1) {
      this.shipNumb -= 1;
    }
    //alignment "straight"
    if (
      this.shipNumb <= 7 &&
      this.direction !== "h" &&
      this.direction !== "v"
    ) {
      this.direction = "h";
    }

    if ((key === "h" || key == "v") && this.shipNumb <= 7) {
      if (key === "h") this.direction = "v";
      if (key === "v") this.direction = "h";
    }
    if (
      this.shipNumb > 7 &&
      this.shipNumb <= 9 &&
      this.direction !== "se" &&
      this.direction !== "sw" &&
      this.direction !== "nw" &&
      this.direction !== "ne"
    ) {
      this.direction = "se";
    }
    if (
      (key === "se" || key === "sw" || key === "nw" || key === "ne") &&
      this.shipNumb > 7 &&
      this.shipNumb <= 9
    ) {
      if (key === "se") {
        this.direction = "sw";
      } else if (key === "sw") {
        this.direction = "nw";
      } else if (key === "nw") {
        this.direction = "ne";
      } else if (key === "ne") {
        this.direction = "se";
      }
    }
    this.shipsSelectorUi.createShipFrame(this.shipNumb);
    this.shipsSelectorUi.changeVariantBtn(this.direction);
    this.shipsSelectorUi.changeVariantDisplay(this.direction, this.shipNumb);
    if (key === "Place") {
      if (
        !this.gameboardPlayer.checkMaxShips(
          this.shipSelector.getchosenShip(this.shipNumb)
        )
      ) {
        if (
          this.gameboardPlayer.isPlacementValid(
            this.x,
            this.y,
            this.shipSelector.getchosenShip(this.shipNumb, this.direction)
          )
        ) {
          this.shipSelector.addChosenShips(this.shipNumb);
          this.gameboardPlayer.placeShipPlayer(
            this.shipSelector.getchosenShip(this.shipNumb, this.direction),
            this.x,
            this.y
          );
          this.gameBoardViewPlayer.showShips(
            this.gameboardPlayer.getGameBoard()
          );
        } else {
          console.log("cant place ship there");
        }
      } else {
        console.log("too many ships");
      }
    }
    if (key === "Start") {
      this.handleStart();
    }
  }
  handleStart() {
    this.gameboardKI.createShipsCPU(this.shipSelector.getChosenShips());
    this.gameboardKI.placeShipsCPU();
    //zum testen
    //this.gameBoardViewKi.showShips(this.gameboardKI.getGameBoard());
    this.phaseOne = false;
  }
  getPhaseOne() {
    return this.phaseOne;
  }

  playerShoot(e) {
    const targetCell = e.target.id;
    if (targetCell < 10) {
      this.player.attackEnemy(0, targetCell);
    } else {
      this.player.attackEnemy(targetCell[0], targetCell[1]);
    }
    this.gameBoardViewKi.updateViewBoard(this.gameboardKI.getGameBoard());
  }
  cpuShoot() {
    this.gameboardPlayer.attackShip(
      this.gameboardPlayer.getRandCoordinate(),
      this.gameboardPlayer.getRandCoordinate()
    );
    this.gameBoardViewPlayer.updateViewBoard(
      this.gameboardPlayer.getGameBoard()
    );
  }
  playGame() {}
}

export { Game };
