class Game {
  constructor(
    gameboardPlayer,
    gameboardKI,
    shipSelector,
    gameBoardViewPlayer,
    gameBoardViewKi,
    shipsSelectorUi
  ) {
    this.gameboardPlayer = gameboardPlayer;
    this.gameboardKI = gameboardKI;
    this.shipSelector = shipSelector;
    this.gameBoardViewPlayer = gameBoardViewPlayer;
    this.gameBoardViewKi = gameBoardViewKi;
    this.shipsSelectorUi = shipsSelectorUi;
    this.x = 11;
    this.y = 11;
    this.shipNumb = 1;
    this.direction = "h";
  }
  handleShipCordClick(e) {
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
    if (key === "O") {
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
    this.gameBoardViewKi.showShips(this.gameboardKI.getGameBoard());
  }

  playerShoot() {}
  cpuShoot() {}
  playGame() {}
}

export { Game };
