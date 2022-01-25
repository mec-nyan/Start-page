const root = document.querySelector("#root");

const big = document.createElement("div");
big.setAttribute("id", "big");

root.appendChild(big);

const rects = [[], [], [], [], [], [], [], []];

for (let i = 0; i < 8; ++i) {
  for (let j = 0; j < 4; ++j) {
    const rect = document.createElement("div");
    rect.setAttribute("class", "rect");
    rects[i].push(rect);
    big.appendChild(rect);
  }
}

let row = 0;
let col = 0;
rects[row][col].classList.add("selected");
const select = (key) => {
  switch (key) {
    case "j":
      row < 7 && ++row;
      break;
    case "k":
      row > 0 && --row;
      break;
    case "h":
      col > 0 && --col;
      break;
    case "l":
      col < 3 && ++col;
      break;
    default:
      break;
  }
  for (let c = 0; c < 4; ++c) {
    for (let r = 0; r < 8; ++r) {
      if (c === col && r === row) {
        rects[r][c].classList.add("selected");
      } else {
        rects[r][c].classList.remove("selected");
      }
    }
  }
};

document.body.onkeydown = (e) => select(e.key);
