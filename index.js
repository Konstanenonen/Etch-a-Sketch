createGrid(16);
addListenerToClearButton();

function createGrid(squaresPerSide) {
  if (squaresPerSide > 100) squaresPerSide = 100;
  document.querySelector(".container").innerHTML = "";
  addSquares(squaresPerSide);
  addListenersToSquares();
}

function addSquares(squaresPerSide) {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    const squareSideLength= `${100 / squaresPerSide}%`;
    square.style.width = squareSideLength;
    square.style.height = squareSideLength;
    document.querySelector(".container").appendChild(square);
  }
}

function addListenersToSquares() {
  const squares =  document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => {
    square.setAttribute("class", "square filled");
  }));
}

function addListenerToClearButton() {
  const button = document.querySelector(".clear");
    button.addEventListener("click", () => {
    let squaresPerSide = Number(prompt("How many squares for each side this time?"));
    createGrid(squaresPerSide);
  });
}
