import Cambridge from "./img/cambridge.png";
import Codewars from "./img/codewars.png";
import Cpp from "./img/cpp.png";
import Debian from "./img/debian.png";
import Duolingo from "./img/duolingo_logo.png";
import Calendar from "./img/google-calendar-logo.png";
import Javascript from "./img/javascript-logo.png";
import Lua from "./img/lua_logo.png";
import Macmillan from "./img/macmillan.png";
import Mail from "./img/mail.png";
import Mui from "./img/mui.png";
import Github from "./img/Octocat.png";
import Python from "./img/python.svg";
import React from "./img/react.svg";
import RPi from "./img/RPi-Logo-small.png";
import Typescript from "./img/ts.png";
import W3schools from "./img/w3schools.svg";
import Youtube from "./img/youtube.png";

class Link {
  constructor(src, alt, url = "https://", text = "Sample text") {
    this.src = src;
    this.alt = alt;
    this.text = text;
    this.url = url;
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
        newRow.push(new Link(Debian, "empty", null, null));
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
const cpp = new Link(Cpp, "Cpp", null, "Cpp");
const javascript = new Link(Javascript, "Javascript", null, "Javascript");
const ts = new Link(Typescript, "Typescript", null, "Typescript");
const python = new Link(Python, "Python", null, "Python");
const lua = new Link(Lua, "Lua", null, "Lua");

// React libraries
const react = new Link(React, "React", null, "React");
const mui = new Link(Mui, "Mui", null, "Mui");
const w3schools = new Link(W3schools, "W3schools", null, "W3schools");

// Services
const github = new Link(Github, "Octocat", null, "Github");
const mail = new Link(Mail, "Mail", null, "Gmail");
const calendar = new Link(Calendar, "Google", null, "Calendar");
const youtube = new Link(Youtube, "Youtube", null, "Youtube");
const duolingo = new Link(Duolingo, "Duolingo", null, "Duolingo");
const codewars = new Link(Codewars, "Codewars", null, "Codewars");

// Dictionaries
const cambridge = new Link(
  Cambridge,
  "Cambridge",
  null,
  "Cambridge dictionary"
);
const macmillan = new Link(Macmillan, "Macmillan", null, "Macmillan");

// Misc
const debian = new Link(Debian, "Debian", null, "Debian");
const rpi = new Link(RPi, "RPi", null, "RPi");

const languages = [cpp, javascript, ts, python, lua];
const libraries = [react, mui, w3schools];
const services = [github, mail, calendar, youtube, duolingo, codewars];
const dictionaries = [cambridge, macmillan];
const misc = [debian, rpi];

grid.insertColumn(0, languages);
grid.insertColumn(1, libraries);
grid.insertColumn(2, services);
grid.insertColumn(3, dictionaries);
grid.insertColumn(4, misc);

export default grid;
