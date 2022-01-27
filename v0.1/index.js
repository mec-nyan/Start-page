const buttons = [
  {
    to: "https://github.com/mec-nyan",
    text: "Github/mec-nyan",
    img: "./img/Octocat.png",
  },
  {
    to: "https://mail.google.com/mail/u/0/#inbox",
    text: "Gmail/raspberry",
    img: "./img/mail.png",
  },
  {
    to: "https://mail.google.com/mail/u/1/#inbox",
    text: "Gmail/henry",
    img: "./img/mail.png",
  },
  {
    to: "https://app.ora.pm/p/805f25347ace4661a5e01a4bf7aca636?v=46735&s=22835&t=k",
    text: "Ora",
    img: "./img/debian.png",
  },
  {
    to: "http://localhost:3000",
    text: "localhost:3000",
    img: "./img/debian.png",
  },
  {
    to: "http://localhost:3001",
    text: "localhost:3001",
    img: "./img/debian.png",
  },
  {
    to: "https://reactjs.org/docs/getting-started.html",
    text: "React docs",
    img: "./img/react.svg",
  },
  {
    to: "https://mui.com/getting-started/installation/",
    text: "MUI docs",
    img: "./img/mui.png",
  },
  {
    to: "https://github.com/tpope/vim-fugitive",
    text: "Github/vim-fugitive",
    img: "./img/Octocat.png",
  },
  {
    to: "https://reactrouterdotcom.fly.dev/docs/en/v6",
    text: "React router docs",
    img: "./img/debian.png",
  },
  {
    to: "https://calendar.google.com/calendar/u/1/r",
    text: "Calendario",
    img: "./img/google-calendar-logo.png",
  },
];

const root = document.getElementById("root");

const outerContainer = document.createElement("div");
outerContainer.setAttribute("class", "outer-container");

root.appendChild(outerContainer);

const links = [];

for (let b of buttons) {
  const newLink = document.createElement("a");
  newLink.target = "_blank";
  newLink.href = b.to;
  const newButton = document.createElement("div");
  newButton.setAttribute("class", "link-container");
  const newImg = document.createElement("img");
  newImg.src = b.img;
  newImg.alt = "";
  newImg.setAttribute("class", "icon");
  const newText = document.createElement("span");
  newText.innerText = b.text;
  newText.setAttribute("class", "text");
  newButton.appendChild(newImg);
  newButton.appendChild(newText);
  newLink.appendChild(newButton);
  outerContainer.appendChild(newLink);
  links.push(newLink);
}

document.body.onkeydown = (event) => highlight(event);

let n = -1;

const highlight = (e) => {
  if (e.key === "j" && n < links.length) {
    ++n;
  } else if (e.key === "k" && n > -1) {
    --n;
  }
  for (let i = 0; i < links.length; ++i) {
    if (i === n) links[i].setAttribute("class", "highlight");
    else links[i].setAttribute("class", "normal");
  }
};
