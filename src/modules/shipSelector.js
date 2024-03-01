import { Ship } from "./ship";

class ShipSelector {
  constructor() {
    this.ships = [
      { name: "ship1", length: 2, alignment: "straight", height: 0 },
      { name: "ship2", length: 3, alignment: "straight", height: 0 },
      { name: "ship3", length: 4, alignment: "straight", height: 0 },
      { name: "ship4", length: 5, alignment: "straight", height: 0 },
      { name: "ship5", length: 7, alignment: "straight", height: 0 },
      { name: "ship6", length: 2, alignment: "rectangle", height: 1 },
      { name: "ship7", length: 3, alignment: "rectangle", height: 1 },
      { name: "ship8", length: 2, alignment: "corner", height: 1 },
      { name: "ship9", length: 3, alignment: "corner", height: 2 },
    ];
    this.shipsObjects = [];
    this.chosenShips = [];
    this.initiateShips();
  }
  initiateShips() {
    this.ships.forEach((ship) => {
      //console.log(ship);
      const newShip = new Ship(
        ship.name,
        ship.length,
        null,
        null,
        ship.alignment,
        ship.height
      );
      this.shipsObjects.push(newShip);
    });
  }
  // original Object wird überschrieben
  //FIXME Schiffe direkt in getchosenShips initieren, erspart die initateShips
  getchosenShip(shipsSelector, direction) {
    const ship = this.shipsObjects[shipsSelector - 1];
    //FIXME Fehler Ship copy
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
