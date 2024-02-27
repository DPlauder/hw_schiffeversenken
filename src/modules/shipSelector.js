import { Ship } from "./ship";

class ShipSelector {
  constructor() {
    this.ships = [
      { name: "ship1", length: 2, alignment: "straight" },
      { name: "ship2", length: 3, alignment: "straight" },
      { name: "ship3", length: 4, alignment: "straight" },
      { name: "ship4", length: 5, alignment: "straight" },
      { name: "ship5", length: 7, alignment: "straight" },
      { name: "ship6", length: 2, alignment: "corner" },
      { name: "ship7", length: 3, alignment: "corner" },
      { name: "ship8", length: 2, alignment: "rectangle" },
      { name: "ship9", length: 3, alignment: "rectangle" },
      { name: "ship10", length: 2, alignment: "cube" },
    ];
    this.shipsObjects = [];
    this.chosenShips = [];
    this.initiateShips();
  }
  initiateShips() {
    this.ships.forEach((ship) => {
      const newShip = new Ship(ship.name, ship.length, null, null);
      this.shipsObjects.push(newShip);
    });
  }
  // original Object wird überschrieben
  getchosenShip(shipsSelector, direction) {
    const ship = this.shipsObjects[shipsSelector - 1];
    //TODO Fehler Ship copy
    // original Object wird überschrieben ||
    // versuch unten hat nicht funktiont da validPos nicht funktioniert
    //const cloneShip = Object.assign({}, ship);
    ship.direction = direction;
    return ship;
  }

  //für CPU Erstellung
  getChosenShips() {
    return this.chosenShips;
  }
  addChosenShips(shipsSelector) {
    this.chosenShips.push(this.ships[shipsSelector - 1]);
  }
}
export { ShipSelector };
