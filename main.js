// import './assets/styles/style.css'
import { objectKeysEn, objectKeysRu } from "./assets/scripts/keyboardData.js";

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
let objectKeys = null;
let lang = localStorage.getItem("lang") || "en";

function changeLangData() {
  if (lang === "en") {
    objectKeys = objectKeysEn;
  } else {
    objectKeys = objectKeysRu;
  }
}
changeLangData();

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

textArea.setAttribute("autofocus", "");

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

function createKeyboard() {
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
function blockFunctionalButton(event){
  event.preventDefault()
}

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
        btn.innerText = btn.innerHTML.toLowerCase();
      } else if (!capsLock && btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerHTML.toUpperCase();
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
        btn.innerText = btn.innerHTML.toUpperCase();
      } else if (!capsLock && btn.getAttribute("type") === "letter") {
        btn.innerText = btn.innerHTML.toLowerCase();
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
        btn.innerHTML = btn.innerHTML.toUpperCase();
      }
    });
    capsLock = true;
  } else if (event.code === "CapsLock" && capsLock) {
    buttons.forEach((btn) => {
      if (btn.getAttribute("type") === "letter") {
        btn.innerHTML = btn.innerHTML.toLowerCase();
      }
    });
    capsLock = false;
  }
}
let pressed = new Set();

function pressChangeLang(event) {
  let codes = ["ShiftLeft", "ControlLeft"];
  pressed.add(event.code);
  for (let code of codes) {
    if (!pressed.has(code)) {
      return;
    }
  }
  pressed.clear();
  changeLang();
}

function removeKey(event) {
  pressed.delete(event.code);
}

function changeLang() {
  if (lang === "en") {
    lang = "ru";
  } else {
    lang = "en";
  }
  localStorage.setItem("lang", lang);
  changeLangData();
  buttons.forEach((btn) => {
    btn.innerHTML = objectKeys[btn.getAttribute("id")].symbol;
  });
}

let printTextKeyboard = (event) => {
  const textBeforeCursor = textArea.selectionStart
  const textAfterCursor = textArea.selectionEnd
  console.log(textBeforeCursor);
  console.log(textAfterCursor);
  let btns = document.querySelectorAll('[type="letter"], [type="number"]')
  btns.forEach((btn) => {
    if (btn.id === event.code) {
      textArea.setRangeText(btn.innerHTML, textArea.selectionStart, textArea.selectionEnd, "end");
    }
  })
}

let functionalBtn = (event) => {
    if(event.code ==='Backspace')  {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1)
    }
    if(event.code ==='Enter')  {
      textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, "end");
    }
    if(event.code ==='Tab')  {
      textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, "end");
    }
    if(event.code ==='Delete')  {
      textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionStart + 1)
    }

}

textArea.onblur = () => textArea.focus();

document.addEventListener("keydown", blockFunctionalButton);
document.addEventListener("keydown", ligthButtonOn);
document.addEventListener("keyup", ligthButtonOff);
document.addEventListener("keydown", pressShift);
document.addEventListener("keyup", unPressShift);
document.addEventListener("keydown", capsLockPress);
document.addEventListener("keydown", pressChangeLang);
document.addEventListener("keyup", removeKey);
document.addEventListener("keydown", printTextKeyboard);
document.addEventListener("keydown", functionalBtn);
