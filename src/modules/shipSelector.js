import { Ship } from "./ship";

class ShipSelector {
  constructor() {
    this.ships = [
      { name: "ship1", length: 2, direction: "h" },
      { name: "ship2", length: 3, direction: "h" },
      { name: "ship3", length: 4, direction: "h" },
      { name: "ship4", length: 5, direction: "h" },
      { name: "ship5", length: 7, direction: "h" },
    ];
    this.shipsObjects = [];
    this.chosenShips = [];
    this.initiateShips();
  }
  initiateShips() {
    this.ships.forEach((ship) => {
      const newShip = new Ship(ship.name, ship.length, null, ship.direction);
      this.shipsObjects.push(newShip);
    });
  }
  getPossibleShips(shipSelector) {
    console.log("getpos", this.ships[shipSelector - 1]);
    return this.ships[shipSelector - 1];
  }

  getchosenShip(shipsSelector) {
    const ship = this.shipsObjects[shipsSelector - 1];
    return ship;
  }
  getChosenShips() {
    return this.chosenShips;
  }
  //TODO Coordinaten müssen zugefügt werden für erstellung
  addChosenShips(shipsSelector) {
    this.chosenShips.push(this.ships[shipsSelector - 1]);
  }
}
export { ShipSelector };
