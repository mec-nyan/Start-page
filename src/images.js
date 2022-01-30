import CRA from "./img/create-react-app.svg";
import Calendar from "./img/google-calendar-logo.png";
import Cambridge from "./img/cambridge.png";
import Codewars from "./img/codewars.png";
import Cpp from "./img/cpp.png";
import Debian from "./img/debian.png";
import Duolingo from "./img/duolingo_logo.png";
import Github from "./img/Octocat.png";
import Javascript from "./img/javascript-logo.png";
import Lua from "./img/lua_logo.png";
import MDN from "./img/mdn-logo-png-transparent.png";
import Macmillan from "./img/macmillan.png";
import Mail from "./img/mail.png";
import Mui from "./img/mui.png";
import Python from "./img/python.svg";
import RPi from "./img/RPi-Logo-small.png";
import React from "./img/react.svg";
import Router from "./img/react-router-logo.png";
import Sheets from "./img/google-sheets.png";
import Typescript from "./img/ts.png";
import W3schools from "./img/w3schools.svg";
import Webpack from "./img/webpack.svg";
import Youtube from "./img/youtube.png";

import { NEWSLETTER } from "./.env";
console.log("NEWSLETTER: ", NEWSLETTER);

class Link {
  constructor(src, alt = "", url = [], text = "") {
    this.src = src;
    this.alt = alt;
    this.url = url;
    this.text = text;
  }
}

const ROWS = 8;
const COLS = 5;

class Grid {
  constructor(rows, cols) {
    this.grid = [];
    this.init(rows, cols);
  }

  init(rows, cols) {
    for (let i = 0; i < rows; ++i) {
      const newRow = [];
      for (let j = 0; j < cols; ++j) {
        newRow.push(new Link(Debian));
      }
      this.grid.push(newRow);
    }
  }

  insert(row, col, obj) {
    this.grid[row][col] = obj;
  }

  insertColumn(col, list) {
    for (let i = 0; i < list.length; ++i) {
      this.grid[i][col] = list[i];
    }
  }
  get(row, col) {
    return this.grid[row][col];
  }
}

const grid = new Grid(ROWS, COLS);
console.log(grid.grid);

// Languages
const cpp = new Link(
  Cpp,
  "Cpp",
  ["http://en.cppreference.com/w/"],
  "Cpp reference"
);
const javascript = new Link(
  Javascript,
  "Javascript",
  ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  "Javascript"
);
const ts = new Link(
  Typescript,
  "Typescript",
  ["https://www.typescriptlang.org/"],
  "Typescript"
);
const python = new Link(
  Python,
  "Python",
  ["https://www.python.org/"],
  "Python"
);
const lua = new Link(Lua, "Lua", ["https://www.lua.org/"], "Lua");

// React libraries
const react = new Link(React, "React", ["https://reactjs.org/"], "React");
const mui = new Link(Mui, "Mui", ["https://mui.com/"], "Mui");
const cra = new Link(
  CRA,
  "create react app",
  ["https://create-react-app.dev/"],
  "Create react app"
);
const router = new Link(
  Router,
  "React router",
  ["https://reactrouterdotcom.fly.dev/docs/en/v6"],
  "React router"
);
const webpack = new Link(
  Webpack,
  "Webpack",
  ["https://reactrouterdotcom.fly.dev/docs/en/v6"],
  "Webpack"
);
const w3schools = new Link(
  W3schools,
  "W3schools",
  ["https://www.w3schools.com/"],
  "W3schools"
);
const mdn = new Link(
  MDN,
  "MDN",
  ["https://developer.mozilla.org/en-US/"],
  "MDM Web docs"
);

// Services
const github = new Link(
  Github,
  "Github",
  [
    "https://github.com/mec-nyan",
    "https://github.com/marianoRpi",
    "https://github.com/Henry-Devs/talent",
  ],
  "Github"
);
const mail = new Link(Mail, "Mail", [], "Gmail");
const calendar = new Link(Calendar, "Google", [], "Calendar");
const youtube = new Link(
  Youtube,
  "Youtube",
  ["https://www.youtube.com/"],
  "Youtube"
);
const duolingo = new Link(
  Duolingo,
  "Duolingo",
  ["https://www.duolingo.com/"],
  "Duolingo"
);
const codewars = new Link(
  Codewars,
  "Codewars",
  ["https://www.codewars.com/"],
  "Codewars"
);

// Dictionaries
const cambridge = new Link(
  Cambridge,
  "Cambridge",
  "https://dictionary.cambridge.org/",
  "Cambridge dictionary"
);
const macmillan = new Link(
  Macmillan,
  "Macmillan",
  "https://www.macmillandictionary.com/",
  "Macmillan"
);

// Misc
const debian = new Link(
  Debian,
  "Debian, the universal OS",
  "https://www.debian.org/",
  "Debian"
);
const rpi = new Link(
  RPi,
  "RPi",
  "https://www.raspberrypi.org/",
  "Raspberry Pi"
);
const newsletter = new Link(Sheets, "Newsletter", [,], "Newsletter");

const languages = [cpp, javascript, ts, python, lua, mdn, w3schools];
const libraries = [react, mui, cra, router, webpack];
const services = [github, mail, calendar, youtube, duolingo, codewars];
const dictionaries = [cambridge, macmillan];
const misc = [debian, rpi, newsletter];

grid.insertColumn(0, languages);
grid.insertColumn(1, libraries);
grid.insertColumn(2, services);
grid.insertColumn(3, dictionaries);
grid.insertColumn(4, misc);

export default grid;
