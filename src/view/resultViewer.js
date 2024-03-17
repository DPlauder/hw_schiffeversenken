class ResultViewer {
  constructor() {}
  createResultContainer() {
    const parent = document.getElementById("sideBar");
    const container = document.createElement("div");
    container.id = "resultContainer";
    container.classList.add = "resultContainer";

    const resultText = document.createElement("div");
    resultText.id = "resultText";

    container.appendChild(resultText);
    parent.appendChild(container);
  }
  showResult(text) {
    console.log(text);
    document.getElementById("resultText").innerHTML = `${text}`;
  }
}

export { ResultViewer };
