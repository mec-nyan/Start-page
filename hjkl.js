const root = document.querySelector("#root");

const big = document.createElement("div");
big.setAttribute("id", "big");

root.appendChild(big);

const rects = [[], [], [], [], [], [], [], []];

for (let i = 0; i < 8; ++i) {
  for (let j = 0; j < 5; ++j) {
    const rect = document.createElement("div");
    rect.setAttribute("class", "rect");
    const img = document.createElement("img");
    img.src = "./img/debian.png";
    img.alt = "";
    rect.appendChild(img);
    rects[i].push(rect);
    big.appendChild(rect);
  }
}

const selector = document.createElement("div");
selector.setAttribute("id", "selector");
big.appendChild(selector);

let row = 0;
let col = 0;
rects[row][col].classList.add("selected");

let prefix = 1;
let command = "";

const select = (key) => {
  switch (key) {
    case "j":
      row = row + prefix <= 7 ? row + prefix : 7;
      prefix = 1;
      break;
    case "k":
      row = row - prefix >= 0 ? row - prefix : 0;
      prefix = 1;
      break;
    case "h":
      col = col - prefix >= 0 ? col - prefix : 0;
      prefix = 1;
      break;
    case "l":
      col = col + prefix <= 4 ? col + prefix : 4;
      prefix = 1;
      break;
    case "0":
      col = 0;
      break;
    case "$":
      col = 4;
      break;
    case "g":
      if (command.length === 0) command = "g";
      else if (command === "g") {
        row = 0;
        command = "";
      }
      break;
    case "G":
      row = 7;
      break;
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      prefix = parseInt(key);
      break;
    default:
      break;
  }
  for (let c = 0; c < 5; ++c) {
    for (let r = 0; r < 8; ++r) {
      if (c === col && r === row) {
        rects[r][c].classList.add("selected");
      } else {
        rects[r][c].classList.remove("selected");
      }
    }
  }
  selector.style.top = `${row * 12.5}%`;
  selector.style.left = `${col * 20}%`;
};

document.body.onkeydown = (e) => select(e.key);
