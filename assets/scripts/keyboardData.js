let objectKeysEn = {
Backquote :{symbol: '`',shift: '~', type:'number'},
Digit1 :{symbol: '1',shift: '!', type:'number'},
Digit2 :{symbol: '2',shift: '@', type:'number'},
Digit3 :{symbol: '3',shift: '#', type:'number'},
Digit4 :{symbol: '4',shift: '$', type:'number'},
Digit5 :{symbol: '5',shift: '%', type:'number'},
Digit6 :{symbol: '6',shift: '^', type:'number'},
Digit7 :{symbol: '7',shift: '&', type:'number'},
Digit8 :{symbol: '8',shift: '*', type:'number'},
Digit9 :{symbol: '9',shift: '(', type:'number'},
Digit0 :{symbol: '0',shift: ')', type:'number'},
Minus :{symbol: '-',shift: '_', type:'number'},
Equal :{symbol: '=',shift: '+', type:'number'},
Backspace :{symbol: 'Backspace',shift: 'Backspace', type:'functional'},
Tab :{symbol: 'Tab',shift: 'Tab', type:'functional'},
KeyQ :{symbol: 'q',shift: 'Q', type:'letter'},
KeyW :{symbol: 'w',shift: 'W', type:'letter'},
KeyE :{symbol: 'e',shift: 'E', type:'letter'},
KeyR :{symbol: 'r',shift: 'R', type:'letter'},
KeyT :{symbol: 't',shift: 'T', type:'letter'},
KeyY :{symbol: 'y',shift: 'Y', type:'letter'},
KeyU :{symbol: 'u',shift: 'U', type:'letter'},
KeyI :{symbol: 'i',shift: 'I', type:'letter'},
KeyO :{symbol: 'o',shift: 'O', type:'letter'},
KeyP :{symbol: 'p',shift: 'P', type:'letter'},
BracketLeft :{symbol: '[',shift: '{', type:'number'},
BracketRight :{symbol: ']',shift: '}', type:'number'},
Backslash :{symbol: '\\',shift: '|', type:'number'},
Delete :{symbol: 'Del',shift: 'Del', type:'functional'},
CapsLock :{symbol: 'CapsLock',shift: 'CapsLock', type:'functional'},
KeyA :{symbol: 'a',shift: 'A', type:'letter'},
KeyS :{symbol: 's',shift: 'S', type:'letter'},
KeyD :{symbol: 'd',shift: 'D', type:'letter'},
KeyF :{symbol: 'f',shift: 'F', type:'letter'},
KeyG :{symbol: 'g',shift: 'G', type:'letter'},
KeyH :{symbol: 'h',shift: 'H', type:'letter'},
KeyJ :{symbol: 'j',shift: 'J', type:'letter'},
KeyK :{symbol: 'k',shift: 'K', type:'letter'},
KeyL :{symbol: 'l',shift: 'L', type:'letter'},
Semicolon :{symbol: ';',shift: ':', type:'number'},
Quote :{symbol: '\'',shift: '\"', type:'number'},
Enter :{symbol: 'Enter',shift: 'Enter', type:'functional'},
ShiftLeft :{symbol: 'Shift',shift: 'Shift', type:'functional'},
KeyZ :{symbol: 'z',shift: 'Z', type:'letter'},
KeyX :{symbol: 'x',shift: 'X', type:'letter'},
KeyC :{symbol: 'c',shift: 'C', type:'letter'},
KeyV :{symbol: 'v',shift: 'V', type:'letter'},
KeyB :{symbol: 'b',shift: 'B', type:'letter'},
KeyN :{symbol: 'n',shift: 'N', type:'letter'},
KeyM :{symbol: 'm',shift: 'M', type:'letter'},
Comma :{symbol: ',',shift: '<', type:'number'},
Period :{symbol: '.',shift: '>', type:'number'},
Slash :{symbol: '/',shift: '?', type:'number'},
ArrowUp :{symbol: '↑',shift: '↑', type:'functional'},
ShiftRight :{symbol: 'Shift',shift: 'Shift', type:'functional'},
ControlLeft :{symbol: 'Ctrl',shift: 'Ctrl', type:'functional'},
MetaLeft :{symbol: 'Start',shift: 'Start', type:'functional'},
AltLeft :{symbol: 'Alt',shift: 'Alt', type:'functional'},
Space :{symbol: ' ',shift: ' ', type:'letter'},
AltRight :{symbol: 'Alt',shift: 'Alt', type:'functional'},
ArrowLeft :{symbol: '←',shift: '←', type:'functional'},
ArrowDown :{symbol: '↓',shift: '↓', type:'functional'},
ArrowRight :{symbol: '→',shift: '→', type:'functional'},
ControlRight :{symbol: 'Ctrl',shift: 'Ctrl', type:'functional'},
}

let objectKeysRu = {
  Backquote :{symbol: '`',shift: 'Ё', type:'number'},
  Digit1 :{symbol: '1',shift: '!', type:'number'},
  Digit2 :{symbol: '2',shift: '"', type:'number'},
  Digit3 :{symbol: '3',shift: '№', type:'number'},
  Digit4 :{symbol: '4',shift: ';', type:'number'},
  Digit5 :{symbol: '5',shift: '%', type:'number'},
  Digit6 :{symbol: '6',shift: ':', type:'number'},
  Digit7 :{symbol: '7',shift: '?', type:'number'},
  Digit8 :{symbol: '8',shift: '*', type:'number'},
  Digit9 :{symbol: '9',shift: '(', type:'number'},
  Digit0 :{symbol: '0',shift: ')', type:'number'},
  Minus :{symbol: '-',shift: '_', type:'number'},
  Equal :{symbol: '=',shift: '+', type:'number'},
  Backspace :{symbol: 'Backspace',shift: 'Backspace', type:'functional'},
  Tab :{symbol: 'Tab',shift: 'Tab', type:'functional'},
  KeyQ :{symbol: 'й',shift: 'Й', type:'letter'},
  KeyW :{symbol: 'ц',shift: 'Ц', type:'letter'},
  KeyE :{symbol: 'у',shift: 'У', type:'letter'},
  KeyR :{symbol: 'к',shift: 'К', type:'letter'},
  KeyT :{symbol: 'е',shift: 'Е', type:'letter'},
  KeyY :{symbol: 'y',shift: 'Y', type:'letter'},
  KeyU :{symbol: 'u',shift: 'U', type:'letter'},
  KeyI :{symbol: 'i',shift: 'I', type:'letter'},
  KeyO :{symbol: 'o',shift: 'O', type:'letter'},
  KeyP :{symbol: 'p',shift: 'P', type:'letter'},
  BracketLeft :{symbol: '[',shift: '{', type:'number'},
  BracketRight :{symbol: ']',shift: '}', type:'number'},
  Backslash :{symbol: '\\',shift: '|', type:'number'},
  Delete :{symbol: 'Del',shift: 'Del', type:'functional'},
  CapsLock :{symbol: 'CapsLock',shift: 'CapsLock', type:'functional'},
  KeyA :{symbol: 'a',shift: 'A', type:'letter'},
  KeyS :{symbol: 's',shift: 'S', type:'letter'},
  KeyD :{symbol: 'd',shift: 'D', type:'letter'},
  KeyF :{symbol: 'f',shift: 'F', type:'letter'},
  KeyG :{symbol: 'g',shift: 'G', type:'letter'},
  KeyH :{symbol: 'h',shift: 'H', type:'letter'},
  KeyJ :{symbol: 'j',shift: 'J', type:'letter'},
  KeyK :{symbol: 'k',shift: 'K', type:'letter'},
  KeyL :{symbol: 'l',shift: 'L', type:'letter'},
  Semicolon :{symbol: ';',shift: ':', type:'number'},
  Quote :{symbol: '\'',shift: '\"', type:'number'},
  Enter :{symbol: 'Enter',shift: 'Enter', type:'functional'},
  ShiftLeft :{symbol: 'Shift',shift: 'Shift', type:'functional'},
  KeyZ :{symbol: 'z',shift: 'Z', type:'letter'},
  KeyX :{symbol: 'x',shift: 'X', type:'letter'},
  KeyC :{symbol: 'c',shift: 'C', type:'letter'},
  KeyV :{symbol: 'v',shift: 'V', type:'letter'},
  KeyB :{symbol: 'b',shift: 'B', type:'letter'},
  KeyN :{symbol: 'n',shift: 'N', type:'letter'},
  KeyM :{symbol: 'm',shift: 'M', type:'letter'},
  Comma :{symbol: ',',shift: '<', type:'number'},
  Period :{symbol: '.',shift: '>', type:'number'},
  Slash :{symbol: '/',shift: '?', type:'number'},
  ArrowUp :{symbol: '↑',shift: '↑', type:'functional'},
  ShiftRight :{symbol: 'Shift',shift: 'Shift', type:'functional'},
  ControlLeft :{symbol: 'Ctrl',shift: 'Ctrl', type:'functional'},
  MetaLeft :{symbol: 'Start',shift: 'Start', type:'functional'},
  AltLeft :{symbol: 'Alt',shift: 'Alt', type:'functional'},
  Space :{symbol: ' ',shift: ' ', type:'letter'},
  AltRight :{symbol: 'Alt',shift: 'Alt', type:'functional'},
  ArrowLeft :{symbol: '←',shift: '←', type:'functional'},
  ArrowDown :{symbol: '↓',shift: '↓', type:'functional'},
  ArrowRight :{symbol: '→',shift: '→', type:'functional'},
  ControlRight :{symbol: 'Ctrl',shift: 'Ctrl', type:'functional'},
}
export { objectKeysEn };
export { objectKeysRu };

// console.log(objectKeys2.Digit1.symbol);

// let objectKeys = {
//   Backquote :'`',
//   Digit1 :'1',
//   Digit2 :'2',
//   Digit3 :'3',
//   Digit4 :'4',
//   Digit5 :'5',
//   Digit6 :'6',
//   Digit7 :'7',
//   Digit8 :'8',
//   Digit9 :'9',
//   Digit0 :'0',
//   Minus :'-',
//   Equal :'=',
//   Backspace :'Backspace',
//   Tab :'Tab',
//   KeyQ :'q',
//   KeyW :'w',
//   KeyE :'e',
//   KeyR :'r',
//   KeyT :'t',
//   KeyY :'y',
//   KeyU :'u',
//   KeyI :'i',
//   KeyO :'o',
//   KeyP :'p',
//   BracketLeft :'[',
//   BracketRight :']',
//   Backslash :'\\',
//   Delete :'Del',
//   CapsLock :'CapsLock',
//   KeyA :'a',
//   KeyS :'s',
//   KeyD :'d',
//   KeyF :'f',
//   KeyG :'g',
//   KeyH :'h',
//   KeyJ :'j',
//   KeyK :'k',
//   KeyL :'l',
//   Semicolon :';',
//   Quote :'\'',
//   Enter :'Enter',
//   ShiftLeft :'Shift',
//   KeyZ :'z',
//   KeyX :'x',
//   KeyC :'c',
//   KeyV :'v',
//   KeyB :'b',
//   KeyN :'n',
//   KeyM :'m',
//   Comma :',',
//   Period :'.',
//   Slash :'/',
//   ArrowUp :'↑',
//   ShiftRight :'Shift',
//   ControlLeft :'Ctrl',
//   MetaLeft :'Start',
//   AltLeft :'Alt',
//   Space :' ',
//   AltRight :'Alt',
//   ArrowLeft :'←',
//   ArrowDown :'↓',
//   ArrowRight :'→',
//   ControlRight :'Ctrl',
//   }