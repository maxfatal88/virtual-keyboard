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

const createElement = (tag, _class, textContent) => {
  let element;
  element = document.createElement(tag);
  element.classList.add(_class);
  if (textContent) {
    element.innerText = textContent;
  }
  return element;
}

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

const changeLangData = ()=> {
  if (lang === "en") {
    objectKeys = objectKeysEn;
  } else {
    objectKeys = objectKeysRu;
  }
}
changeLangData();

const createKeyboard = ()=> {
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

const blockFunctionalButton = (event)=>{
  event.preventDefault()
}

const ligthButtonOn = (event)=> {
  buttons.forEach((btn) => {
    if (btn.id === event.code && !event.repeat) {
      btn.classList.add("ligthBtn");
    }
  });
}

const ligthButtonOff = (event)=> {
  buttons.forEach((btn) => {
    if (btn.classList.contains(event.code)) {
      btn.classList.remove("ligthBtn");
    }
  });
}

const pressShift = (event)=> {
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

const unPressShift = (event)=> {
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

const capsLockPress = (event)=> {
  const btnCapsLock = document.querySelector('.CapsLock')
  if ((event.code === "CapsLock" || event.target.id  === "CapsLock") && !capsLock) {
    buttons.forEach((btn) => {
      if (btn.getAttribute("type") === "letter") {
        btn.innerHTML = btn.innerHTML.toUpperCase();
      }
    });
    btnCapsLock.classList.add("ligthBtnCaps");
    capsLock = true;
  } else if ((event.code === "CapsLock" || event.target.id  === "CapsLock") && capsLock) {
    console.log('ELSE');
    buttons.forEach((btn) => {
      if (btn.getAttribute("type") === "letter") {
        btn.innerHTML = btn.innerHTML.toLowerCase();
      }
    });
    btnCapsLock.classList.remove("ligthBtnCaps");
    capsLock = false;
  }
}
let pressed = new Set();

const pressChangeLang = (event)=> {
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

const removeKey = (event)=> {
  pressed.delete(event.code);
}

const changeLang = ()=> {
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

const printTextKeyboard = (event) => {
  let btns = document.querySelectorAll('[type="letter"], [type="number"]')
  btns.forEach((btn) => {
    if (btn.id === event.code||btn.id === event.target.id) {
      textArea.setRangeText(btn.innerHTML, textArea.selectionStart, textArea.selectionEnd, "end");
    }
  })
}

let functionalBtn = (event) => {
  const cursorPos = textArea.selectionStart
    if(event.code ==='Enter'|| event.target.id ==='Enter')  {
      console.log('enter');
      textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, "end");
    }
    if(event.code ==='Tab'|| event.target.id === 'Tab')  {
      textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, "end");
    }
    if(event.code ==='Backspace'|| event.target.id === 'Backspace')  {
      textArea.value = textArea.value.slice(0,textArea.selectionStart-1) + textArea.value.slice(textArea.selectionStart,textArea.length)
      textArea.selectionStart = textArea.selectionEnd = cursorPos - 1
    }
    if(event.code ==='Delete'|| event.target.id === 'Delete')  {
      textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionStart + 1)
      textArea.selectionStart = textArea.selectionEnd = cursorPos
    }
}

document.addEventListener("keydown", blockFunctionalButton);
document.addEventListener("keydown", ligthButtonOn);
document.addEventListener("click", ligthButtonOn);
document.addEventListener("keyup", ligthButtonOff);
document.addEventListener("keydown", pressShift);
document.addEventListener("keyup", unPressShift);
document.addEventListener("keydown", capsLockPress);
document.addEventListener("click", capsLockPress);
document.addEventListener("keydown", pressChangeLang);
document.addEventListener("keyup", removeKey);
document.addEventListener("keydown", printTextKeyboard);
document.addEventListener('click', printTextKeyboard )
document.addEventListener("keydown", functionalBtn);
document.addEventListener("click", functionalBtn);
