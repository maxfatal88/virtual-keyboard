// import './assets/styles/style.css'
import {keys} from './assets/scripts/keyboardData.js'

const BODY = document.body
let conteiner = null
let title = null
let textArea = null
let keyboard = null

function createElement(tag , _class){
  let element
  element = document.createElement(tag)
  element.classList.add(_class)
  return element
}

conteiner = createElement('div', 'conteiner')
BODY.append(conteiner)

title = document.createElement('p')
title.classList.add('title')
title.innerText = 'Виртуальная клавиатура'
conteiner.append(title)

textArea = document.createElement('textarea')
textArea.classList.add('textarea')
conteiner.append(textArea)

keyboard = document.createElement('div')
keyboard.classList.add('keyboard')
conteiner.append(keyboard)
