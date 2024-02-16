class GameboardView {
  constructor() {
    this.createGameboardView();
    this.createSidebar();
  }

  createSidebar = () => {
    const sideBar = document.getElementById("sideBar");
    sideBar.classList.add("sideBar");
  };
  createGameboardView = () => {
    const container = document.getElementById("board");
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `${i}`;
      cell.classList.add("cell");
      container.appendChild(cell);
    }
  };
  updateShips = (gameboard) => {
    console.log(gameboard);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (gameboard[i][j] != 0) {
          let combined = parseInt(i.toString() + j.toString());
          const cell = document.getElementById(`${combined}`);
          cell.classList.add("ship");
        }
      }
    }
  };
}
export { GameboardView };
