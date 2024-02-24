import { Ship } from "./ship";

class ShipSelector {
  constructor() {
    this.ships = [
      { name: "ship1", length: 2 },
      { name: "ship2", length: 3 },
      { name: "ship3", length: 4 },
      { name: "ship4", length: 5 },
      { name: "ship5", length: 7 },
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
