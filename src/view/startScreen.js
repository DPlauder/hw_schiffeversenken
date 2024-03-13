class StartScreen {
  constructor() {
    this.createStartScreen();
  }
  createStartScreen() {
    const app = document.getElementById("app");
    const container = document.createElement("div");
    container.id = "startScreen";

    const startMessageUe = document.createElement("div");
    startMessageUe.innerText = "Versenke alle Schiffe des Feindes";
    container.appendChild(startMessageUe);

    const anleitungMessage = document.createElement("div");
    anleitungMessage.innerText =
      "Wähle zu Beginn deine Schiffe und ordne diese in dem du auf deine gewünschte Position im Feld klickst und dann mit place bestätigst";
    container.appendChild(anleitungMessage);

    const startMessage = document.createElement("div");
    startMessage.innerText = "Starte das Spiel mit dem Start Button";

    const startGameButton = document.createElement("button");
    startGameButton.innerText = "Starte Spiel";
    startGameButton.id = "startGameBtn";
    container.appendChild(startGameButton);
    app.appendChild(container);
  }
  hideStartScreen() {
    const startScreen = document.getElementById("startScreen");
    startScreen.style.display = "none";
  }
}

export { StartScreen };
