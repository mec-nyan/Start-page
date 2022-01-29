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
import Typescript from "./img/ts.jpeg";
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

const cambridge = new Link(
  Cambridge,
  "Cambridge",
  null,
  "Cambridge dictionary"
);
const codewars = new Link(Codewars, "Codewars", null, "Codewars");
const cpp = new Link(Cpp, "Cpp", null, "Cpp");
const debian = new Link(Debian, "Debian", null, "Debian");
const duolingo = new Link(Duolingo, "Duolingo", null, "Duolingo");
const calendar = new Link(Calendar, "Google", null, "Calendar");
const javascript = new Link(Javascript, "Javascript", null, "Javascript");
const lua = new Link(Lua, "Lua", null, "Lua");
const macmillan = new Link(Macmillan, "Macmillan", null, "Macmillan");
const mail = new Link(Mail, "Mail", null, "Gmail");
const mui = new Link(Mui, "Mui", null, "Mui");
const github = new Link(Github, "Octocat", null, "Github");
const python = new Link(Python, "Python", null, "Python");
const react = new Link(React, "React", null, "React");
const rpi = new Link(RPi, "RPi", null, "RPi");
const ts = new Link(Typescript, "Typescript", null, "Typescript");
const w3schools = new Link(W3schools, "W3schools", null, "W3schools");
const youtube = new Link(Youtube, "Youtube", null, "Youtube");

export {
  cambridge,
  macmillan,
  codewars,
  cpp,
  debian,
  duolingo,
  calendar,
  lua,
  mail,
  mui,
  github,
  python,
  react,
  rpi,
  ts,
  javascript,
  w3schools,
  youtube,
};
