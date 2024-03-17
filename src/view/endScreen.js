class EndScreen {
  constructor() {
    this.createEndScreen();
  }

  createEndScreen() {
    const app = document.getElementById("app");
    const container = document.createElement("div");
    container.id = "endScreen";

    const endMessage = document.createElement("div");
    endMessage.id = "endMessage";
    container.appendChild(endMessage);
    const newGameBtn = document.createElement("button");
    newGameBtn.innerText = "Neues Spiel";
    newGameBtn.id = "newGameBtn";
    container.appendChild(newGameBtn);
    app.appendChild(container);
  }
  openEndScreen(text) {
    document.getElementById("endScreen").style.display = "flex";
    document.getElementById("endMessage").innerText = `${text} hat gewonnen`;
  }
  closeEndScreen() {
    document.getElementById("endScreen").style.display = "none";
  }
}

export { EndScreen };
