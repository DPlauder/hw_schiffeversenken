class ShipSelector {
  constructor() {
    this.createShipselectorUi();
    this.ships = [
      { name: "Carrier", length: 5, direction: "h" },
      { name: "Battleship", length: 4, direction: "h" },
      { name: "Cruiser", length: 3, direction: "h" },
      { name: "Submarine", length: 3, direction: "h" },
      { name: "Destroyer", length: 2, direction: "h" },
    ];
    this.chosenShips = [];
  }

  createShipselectorUi() {
    const container = document.getElementById("sideBar");

    const selector = document.createElement("div");
    selector.classList.add("shipSelector");
    container.appendChild(selector);

    const shipFrame = document.createElement("div");
    shipFrame.classList.add("shipFrame");
    selector.appendChild(shipFrame);

    const shipDisplay = document.createElement("div");
    shipDisplay.classList.add("shipDisplay");
    shipDisplay.id = "shipDisplay";
    shipFrame.appendChild(shipDisplay);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    btnContainer.id = "selectorBtnContainer";
    selector.appendChild(btnContainer);

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
  }

  createShipFrame(shipNumber) {
    const container = document.getElementById("shipDisplay");
    container.innerHTML = "";
    container.className = `ship${shipNumber}`;
    const template = document.getElementById(`ship${shipNumber}`);
    const shipClone = template.content.cloneNode(true);

    container.appendChild(shipClone);
  }

  getChosenShips() {
    return this.chosenShips;
  }
}

export { ShipSelector };

//TODO ID's müssen mit +1 da 0 Platzhalter ist
