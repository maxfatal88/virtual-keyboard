// import './assets/styles/style.css'
import {keys} from './assets/scripts/keyboardData.js'

const BODY = document.body
let conteiner = null
let title = null
let textArea = null
let keyboard = null
let key = null

function createElement(tag , _class, textContent){
  let element
  element = document.createElement(tag)
  element.classList.add(_class)
  if(textContent) {
    element.innerText = textContent
  }
  return element
}

conteiner = createElement('div', 'conteiner')
title = createElement('p', 'title', 'Виртуальная клавиатура')
textArea = createElement('textarea', 'textarea')
keyboard = createElement('div', 'keyboard')



BODY.append(conteiner)
conteiner.append(title)
conteiner.append(textArea)
conteiner.append(keyboard)


function createKeyboard (){
  for (key in keys) {
    let buttom = createElement('div', 'key', keys[key])
    buttom.classList.add(key)
    keyboard.append(buttom)
  }
}

createKeyboard()
