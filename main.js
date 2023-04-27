// import './assets/styles/style.css'
import { objectKeysEn } from "./assets/scripts/keyboardData.js";
import { objectKeysRu } from "./assets/scripts/keyboardData.js";

const BODY = document.body;
let conteiner = null;
let title = null;
let textArea = null;
let keyboard = null;
let key = null;
let description = null;
let language = null;
let buttons = null;
let capsLock = false;
let objectKeys = null
let lang = 'en'

if(lang === 'en'){
  console.log('en');
  objectKeys = objectKeysEn
} else {objectKeys = objectKeysRu}

conteiner = createElement("div", "conteiner");
title = createElement("p", "title", "Виртуальная клавиатура");
textArea = createElement("textarea", "textarea");
keyboard = createElement("div", "keyboard");
description = createElement(
  "p",
  "description",
  "Клавиатура создана в операционной системе Windows"
);
language = createElement(
  "p",
  "description",
  "Для переключения языка комбинация: левыe ctrl + shift"
);

BODY.append(conteiner);
conteiner.append(title);
conteiner.append(textArea);
conteiner.append(keyboard);
conteiner.append(description);
conteiner.append(language);

function createElement(tag, _class, textContent) {
  let element;
  element = document.createElement(tag);
  element.classList.add(_class);
  if (textContent) {
    element.innerText = textContent;
  }
  return element;
}

function createKeyboard(lang) {
  for (key in objectKeys) {
    const innerText = objectKeys[key].symbol;
    let buttom = createElement("div", "key", innerText);
    buttom.classList.add(key);
    buttom.setAttribute("id", key);
    buttom.setAttribute("type", objectKeys[key].type);
    keyboard.append(buttom);
  }
}

createKeyboard();
buttons = document.querySelectorAll(".key");

function ligthButtonOn(event) {
  buttons.forEach((btn) => {
    if (btn.classList.contains(event.code) && !event.repeat) {
      btn.classList.add("ligthBtn");
    }
  });
}

function ligthButtonOff(event) {
  let buttons = document.querySelectorAll(".key");
  buttons.forEach((btn) => {
    if (btn.classList.contains(event.code)) {
      btn.classList.remove("ligthBtn");
    }
  });
}

function pressShift(event) {
  if (event.code === "ShiftLeft") {
    buttons.forEach((btn) => {
      if (capsLock && btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerText.toLowerCase();
      } else if (!capsLock && btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerText.toUpperCase();
      } else {
        btn.innerText = objectKeys[btn.getAttribute("id")].shift;
      }
    });
  }
}

function unPressShift(event) {
  if (event.code === "ShiftLeft") {
    buttons.forEach((btn) => {
      if (capsLock && btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerText.toUpperCase();
      } else if (!capsLock && btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerText.toLowerCase();
      } else {
        btn.innerText = objectKeys[btn.getAttribute("id")].symbol;
      }
    });
  }
}

function capsLockPress(event) {
  if (event.code === "CapsLock" && !capsLock) {
    console.log(capsLock);
    buttons.forEach((btn) => {
      if (btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerText.toUpperCase();
      }
    });
    capsLock = true;
  } else if (event.code === "CapsLock" && capsLock) {
    buttons.forEach((btn) => {
      if (btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerText.toLowerCase();
      }
    });
    capsLock = false;
  }
}

document.addEventListener("keydown", ligthButtonOn);
document.addEventListener("keyup", ligthButtonOff);

document.addEventListener("keydown", pressShift);
document.addEventListener("keyup", unPressShift);

document.addEventListener("keydown", capsLockPress);
