// import './assets/styles/style.css'
import { objectKeys } from "./assets/scripts/keyboardData.js";

const BODY = document.body;
let conteiner = null;
let title = null;
let textArea = null;
let keyboard = null;
let key = null;
let description = null;
let lang = null;

conteiner = createElement("div", "conteiner");
title = createElement("p", "title", "Виртуальная клавиатура");
textArea = createElement("textarea", "textarea");
keyboard = createElement("div", "keyboard");
description = createElement("p","description",'Клавиатура создана в операционной системе Windows')
lang = createElement("p","description",'Для переключения языка комбинация: левыe ctrl + shift')

BODY.append(conteiner);
conteiner.append(title);
conteiner.append(textArea);
conteiner.append(keyboard);
conteiner.append(description)
conteiner.append(lang)

function createElement(tag, _class, textContent) {
  let element;
  element = document.createElement(tag);
  element.classList.add(_class);
  if (textContent) {
    element.innerText = textContent;
  }
  return element;
}

function createKeyboard() {
  for (key in objectKeys) {
    const innerText = objectKeys[key];
    let buttom = createElement("div", "key", innerText);
    buttom.classList.add(key);
    keyboard.append(buttom);
  }
}

createKeyboard();

function ligthButtonOn(event) {
  let buttons = document.querySelectorAll(".key");
  buttons.forEach((btn) => {
    if (btn.classList.contains(event.code)&& !event.repeat) {
      btn.classList.add('ligthBtn')
    }
  })
}

function ligthButtonOff(event) {
  let buttons = document.querySelectorAll(".key");
  buttons.forEach((btn) => {
    if (btn.classList.contains(event.code)) {
      btn.classList.remove('ligthBtn')
    }
  })
}

document.addEventListener("keydown", ligthButtonOn);
document.addEventListener("keyup", ligthButtonOff);


