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

  getchosenShip(x, y, shipsSelector) {
    const ship = this.shipsObjects[shipsSelector - 1];

    console.log(ship);
    return ship;
  }
  getChosenShips() {
    return this.chosenShips;
  }
  //TODO Coordinaten müssen zugefügt werden für erstellung
  addChosenShips(shipsSelector) {
    //ship.x = x;
    //ship.y = y;
    this.chosenShips.push(this.ships[shipsSelector - 1]);
  }
}
export { ShipSelector };