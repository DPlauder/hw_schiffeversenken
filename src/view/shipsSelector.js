class ShipSelector {
  constructor() {
    this.createShipselectorUi();
    this.ships = [
      { name: "Carrier", length: 5 },
      { name: "Battleship", length: 4 },
      { name: "Cruiser", length: 3 },
      { name: "Submarine", length: 3 },
      { name: "Destroyer", length: 2 },
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
    shipFrame.appendChild(shipDisplay);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    selector.appendChild(btnContainer);

    const sliderBtnUp = document.createElement("button");
    sliderBtnUp.classList.add("btnUp");
    btnContainer.appendChild(sliderBtnUp);
    sliderBtnUp.innerHTML = "<";

    const sliderBtnOk = document.createElement("button");
    sliderBtnOk.classList.add("sliderBtnOk");
    btnContainer.appendChild(sliderBtnOk);
    sliderBtnOk.innerHTML = "O";

    const sliderBtnDown = document.createElement("button");
    sliderBtnDown.classList.add("btnDown");
    btnContainer.appendChild(sliderBtnDown);
    sliderBtnDown.innerHTML = ">";
  }
  getChosenShips() {
    return this.chosenShips;
  }
}

export { ShipSelector };

//TODO ID's müssen mit +1 da 0 Platzhalter ist
