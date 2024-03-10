class EndScreen {
  constructor() {
    this.createEndScreen();
  }

  createEndScreen() {
    const parent = document.getElementById("app");
    const container = document.createElement("div");
    container.id = "endScreen";

    const endMessage = document.createElement("div");
    endMessage.textContent = "Game End";
    endMessage.id = "endMessage";
    container.appendChild(endMessage);
    const newGameBtn = document.createElement("button");
    newGameBtn.innerText = "New Game";
    newGameBtn.id = "newGameBtn";
    container.appendChild(newGameBtn);
    parent.appendChild(container);
  }
  closeEndScreen() {
    document.getElementById("endScreen").style.display = "none";
  }
}

export { EndScreen };
