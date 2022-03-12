for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.style = "width: 6.25%; height: 6.25%;";
  document.querySelector(".container").appendChild(square);
}

const squares =  document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseover", () => {
  square.setAttribute("class", "square filled");
}));

const button = document.querySelector(".clear");
button.addEventListener("click", () => {
  let numberOfNewSquares = Number(prompt("How many squares for each side this time?"));

  if (numberOfNewSquares > 100) numberOfNewSquares = 100;

  const scale = 100 / numberOfNewSquares;
  const squareWidth = `${scale}%`;

  document.querySelector(".container").innerHTML = "";

  for (let i = 0; i < numberOfNewSquares * numberOfNewSquares; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = squareWidth;
    square.style.height = squareWidth;
    document.querySelector(".container").appendChild(square);
  }

  const squares =  document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", () => {
    square.setAttribute("class", "square filled");
  }));
});