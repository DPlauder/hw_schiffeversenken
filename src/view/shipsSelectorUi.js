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
  changeVariant(direction) {
    const varButton = document.getElementById("variantButton");
    const display = document.getElementById("shipDisplay");
    if (direction === "h") {
      varButton.innerText = "v";
      display.style.flexDirection = "column";
    }
    if (direction === "v") {
      varButton.innerText = "h";
      display.style.flexDirection = "row";
    }
  }
}

export { ShipSelectorUi };

//TODO ID's müssen mit +1 da 0 Platzhalter ist
