class ShipSelectorUi {
  constructor() {
    this.createShipselectorUi();
  }

  createShipselectorUi() {
    const container = document.getElementById("sideBar");

    const selector = document.createElement("div");
    selector.classList.add("shipSelector");
    container.appendChild(selector);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    btnContainer.id = "selectorBtnContainer";
    selector.appendChild(btnContainer);

    const shipFrame = document.createElement("div");
    shipFrame.classList.add("shipFrame");
    selector.appendChild(shipFrame);

    const shipDisplay = document.createElement("div");
    shipDisplay.classList.add("shipDisplay");
    shipDisplay.id = "shipDisplay";
    shipFrame.appendChild(shipDisplay);

    const sliderBtnLeft = document.createElement("button");
    sliderBtnLeft.classList.add("sliderBtnLeft");
    btnContainer.appendChild(sliderBtnLeft);
    sliderBtnLeft.innerHTML = "<";

    const sliderBtnOk = document.createElement("button");
    sliderBtnOk.classList.add("sliderBtnOk");
    btnContainer.appendChild(sliderBtnOk);
    sliderBtnOk.innerHTML = "O";

    const sliderBtnRight = document.createElement("button");
    sliderBtnRight.classList.add("sliderBtnRight");
    btnContainer.appendChild(sliderBtnRight);
    sliderBtnRight.innerHTML = ">";

    const startButton = document.createElement("button");
    startButton.classList.add("startBtn");
    startButton.id = "startBtn";
    btnContainer.appendChild(startButton);
    startButton.innerHTML = "Start";

    const variantButton = document.createElement("button");
    variantButton.classList.add("variantBtn");
    variantButton.id = "variantButton";
    btnContainer.appendChild(variantButton);
    variantButton.innerText = "h";
  }

  createShipFrame(shipNumber) {
    const container = document.getElementById("shipDisplay");
    container.innerHTML = "";
    container.className = `ship${shipNumber}`;
    const template = document.getElementById(`ship${shipNumber}`);
    const shipClone = template.content.cloneNode(true);
    container.appendChild(shipClone);
  }
  changeVariantBtn(direction) {
    const varButton = document.getElementById("variantButton");
    varButton.innerText = direction;
  }
  changeVariantDisplay(direction, shipNum) {
    const varDisplay = document.getElementById("shipDisplay");
    //straight 1 height
    if ((direction === "h" || direction === "v") && shipNum < 6) {
      varDisplay.style.display = "flex";
      switch (direction) {
        case "h":
          varDisplay.style.flexDirection = "row";
          break;
        case "v":
          varDisplay.style.flexDirection = "column";
          break;
        default:
          console.log("error changeVariantDisplay");
      }
    }
    //rectangle
    if (shipNum === 6) {
      varDisplay.style.display = "grid";
      varDisplay.style.gridTemplateColumns = "38px 38px ";
      varDisplay.style.gridTemplateRows = "38px 38px";
    }
    if (shipNum === 7) {
      varDisplay.style.display = "grid";
      if (direction === "h") {
        varDisplay.style.gridTemplateColumns = "38px 38px 38px";
        varDisplay.style.gridTemplateRows = "38px 38px";
      }
      if (direction === "v") {
        varDisplay.style.gridTemplateColumns = "38px 38px";
        varDisplay.style.gridTemplateRows = "38px 38px 38px";
      }
    }

    // corner ships
    if (
      direction === "se" ||
      direction === "sw" ||
      direction === "nw" ||
      direction === "ne"
    ) {
      const varShip = document.getElementsByClassName(`ship${shipNum}`);
      varDisplay.style.display = "grid";
      if (varDisplay.childElementCount === 4) {
        varDisplay.style.gridTemplateColumns = "38px 38px ";
        varDisplay.style.gridTemplateRows = "38px 38px";
        switch (direction) {
          case "se":
            varDisplay.childNodes[1].classList.add("shipPart");
            varDisplay.childNodes[3].classList.add("shipPart");
            varDisplay.childNodes[5].classList.add("shipPart");
            break;
          case "sw":
            varDisplay.childNodes[1].classList.add("shipPart");
            varDisplay.childNodes[3].classList.add("shipPart");
            varDisplay.childNodes[7].classList.add("shipPart");
            break;
          case "nw":
            varDisplay.childNodes[3].classList.add("shipPart");
            varDisplay.childNodes[5].classList.add("shipPart");
            varDisplay.childNodes[7].classList.add("shipPart");
            break;
          case "ne":
            varDisplay.childNodes[1].classList.add("shipPart");
            varDisplay.childNodes[5].classList.add("shipPart");
            varDisplay.childNodes[7].classList.add("shipPart");
            break;
          default:
            console.log("error varShip");
        }
      }
      if (varDisplay.childElementCount === 9) {
        varDisplay.style.gridTemplateColumns = "38px 38px 38px";
        varDisplay.style.gridTemplateRows = "38px 38px 38p";
        switch (direction) {
          case "se":
            varDisplay.childNodes[1].classList.add("shipPart");
            varDisplay.childNodes[3].classList.add("shipPart");
            varDisplay.childNodes[5].classList.add("shipPart");
            varDisplay.childNodes[7].classList.add("shipPart");
            varDisplay.childNodes[13].classList.add("shipPart");
            break;
          case "sw":
            varDisplay.childNodes[1].classList.add("shipPart");
            varDisplay.childNodes[3].classList.add("shipPart");
            varDisplay.childNodes[5].classList.add("shipPart");
            varDisplay.childNodes[11].classList.add("shipPart");
            varDisplay.childNodes[17].classList.add("shipPart");
            break;
          case "nw":
            varDisplay.childNodes[5].classList.add("shipPart");
            varDisplay.childNodes[11].classList.add("shipPart");
            varDisplay.childNodes[13].classList.add("shipPart");
            varDisplay.childNodes[15].classList.add("shipPart");
            varDisplay.childNodes[17].classList.add("shipPart");
            break;
          case "ne":
            varDisplay.childNodes[1].classList.add("shipPart");
            varDisplay.childNodes[7].classList.add("shipPart");
            varDisplay.childNodes[13].classList.add("shipPart");
            varDisplay.childNodes[15].classList.add("shipPart");
            varDisplay.childNodes[17].classList.add("shipPart");
            break;
          default:
            console.log("error varShip");
        }
      }
    }
  }
}

export { ShipSelectorUi };

//TODO ID's müssen mit +1 da 0 Platzhalter ist
