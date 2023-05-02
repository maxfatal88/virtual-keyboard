const objectKeysEn = {
  Backquote: { symbol: '`', shift: '~', type: 'number' },
  Digit1: { symbol: '1', shift: '!', type: 'number' },
  Digit2: { symbol: '2', shift: '@', type: 'number' },
  Digit3: { symbol: '3', shift: '#', type: 'number' },
  Digit4: { symbol: '4', shift: '$', type: 'number' },
  Digit5: { symbol: '5', shift: '%', type: 'number' },
  Digit6: { symbol: '6', shift: '^', type: 'number' },
  Digit7: { symbol: '7', shift: '&', type: 'number' },
  Digit8: { symbol: '8', shift: '*', type: 'number' },
  Digit9: { symbol: '9', shift: '(', type: 'number' },
  Digit0: { symbol: '0', shift: ')', type: 'number' },
  Minus: { symbol: '-', shift: '_', type: 'number' },
  Equal: { symbol: '=', shift: '+', type: 'number' },
  Backspace: { symbol: 'Backspace', shift: 'Backspace', type: 'functional' },
  Tab: { symbol: 'Tab', shift: 'Tab', type: 'functional' },
  KeyQ: { symbol: 'q', shift: 'Q', type: 'letter' },
  KeyW: { symbol: 'w', shift: 'W', type: 'letter' },
  KeyE: { symbol: 'e', shift: 'E', type: 'letter' },
  KeyR: { symbol: 'r', shift: 'R', type: 'letter' },
  KeyT: { symbol: 't', shift: 'T', type: 'letter' },
  KeyY: { symbol: 'y', shift: 'Y', type: 'letter' },
  KeyU: { symbol: 'u', shift: 'U', type: 'letter' },
  KeyI: { symbol: 'i', shift: 'I', type: 'letter' },
  KeyO: { symbol: 'o', shift: 'O', type: 'letter' },
  KeyP: { symbol: 'p', shift: 'P', type: 'letter' },
  BracketLeft: { symbol: '[', shift: '{', type: 'number' },
  BracketRight: { symbol: ']', shift: '}', type: 'number' },
  Backslash: { symbol: '\\', shift: '|', type: 'number' },
  Delete: { symbol: 'Del', shift: 'Del', type: 'functional' },
  CapsLock: { symbol: 'CapsLock', shift: 'CapsLock', type: 'functional' },
  KeyA: { symbol: 'a', shift: 'A', type: 'letter' },
  KeyS: { symbol: 's', shift: 'S', type: 'letter' },
  KeyD: { symbol: 'd', shift: 'D', type: 'letter' },
  KeyF: { symbol: 'f', shift: 'F', type: 'letter' },
  KeyG: { symbol: 'g', shift: 'G', type: 'letter' },
  KeyH: { symbol: 'h', shift: 'H', type: 'letter' },
  KeyJ: { symbol: 'j', shift: 'J', type: 'letter' },
  KeyK: { symbol: 'k', shift: 'K', type: 'letter' },
  KeyL: { symbol: 'l', shift: 'L', type: 'letter' },
  Semicolon: { symbol: ';', shift: ':', type: 'number' },
  Quote: { symbol: '\'', shift: '\'', type: 'number' },
  Enter: { symbol: 'Enter', shift: 'Enter', type: 'functional' },
  ShiftLeft: { symbol: 'Shift', shift: 'Shift', type: 'functional' },
  KeyZ: { symbol: 'z', shift: 'Z', type: 'letter' },
  KeyX: { symbol: 'x', shift: 'X', type: 'letter' },
  KeyC: { symbol: 'c', shift: 'C', type: 'letter' },
  KeyV: { symbol: 'v', shift: 'V', type: 'letter' },
  KeyB: { symbol: 'b', shift: 'B', type: 'letter' },
  KeyN: { symbol: 'n', shift: 'N', type: 'letter' },
  KeyM: { symbol: 'm', shift: 'M', type: 'letter' },
  Comma: { symbol: ',', shift: '<', type: 'number' },
  Period: { symbol: '.', shift: '>', type: 'number' },
  Slash: { symbol: '/', shift: '?', type: 'number' },
  ArrowUp: { symbol: '↑', shift: '↑', type: 'letter' },
  ShiftRight: { symbol: 'Shift', shift: 'Shift', type: 'functional' },
  ControlLeft: { symbol: 'Ctrl', shift: 'Ctrl', type: 'functional' },
  MetaLeft: { symbol: 'Start', shift: 'Start', type: 'functional' },
  AltLeft: { symbol: 'Alt', shift: 'Alt', type: 'functional' },
  Space: { symbol: ' ', shift: ' ', type: 'letter' },
  AltRight: { symbol: 'Alt', shift: 'Alt', type: 'functional' },
  ArrowLeft: { symbol: '←', shift: '←', type: 'letter' },
  ArrowDown: { symbol: '↓', shift: '↓', type: 'letter' },
  ArrowRight: { symbol: '→', shift: '→', type: 'letter' },
  ControlRight: { symbol: 'Ctrl', shift: 'Ctrl', type: 'functional' },
};

const objectKeysRu = {
  Backquote: { symbol: '`', shift: 'Ё', type: 'number' },
  Digit1: { symbol: '1', shift: '!', type: 'number' },
  Digit2: { symbol: '2', shift: '"', type: 'number' },
  Digit3: { symbol: '3', shift: '№', type: 'number' },
  Digit4: { symbol: '4', shift: ';', type: 'number' },
  Digit5: { symbol: '5', shift: '%', type: 'number' },
  Digit6: { symbol: '6', shift: ':', type: 'number' },
  Digit7: { symbol: '7', shift: '?', type: 'number' },
  Digit8: { symbol: '8', shift: '*', type: 'number' },
  Digit9: { symbol: '9', shift: '(', type: 'number' },
  Digit0: { symbol: '0', shift: ')', type: 'number' },
  Minus: { symbol: '-', shift: '_', type: 'number' },
  Equal: { symbol: '=', shift: '+', type: 'number' },
  Backspace: { symbol: 'Backspace', shift: 'Backspace', type: 'functional' },
  Tab: { symbol: 'Tab', shift: 'Tab', type: 'functional' },
  KeyQ: { symbol: 'й', shift: 'Й', type: 'letter' },
  KeyW: { symbol: 'ц', shift: 'Ц', type: 'letter' },
  KeyE: { symbol: 'у', shift: 'У', type: 'letter' },
  KeyR: { symbol: 'к', shift: 'К', type: 'letter' },
  KeyT: { symbol: 'е', shift: 'Е', type: 'letter' },
  KeyY: { symbol: 'н', shift: 'Н', type: 'letter' },
  KeyU: { symbol: 'г', shift: 'Г', type: 'letter' },
  KeyI: { symbol: 'ш', shift: 'Ш', type: 'letter' },
  KeyO: { symbol: 'щ', shift: 'Щ', type: 'letter' },
  KeyP: { symbol: 'з', shift: 'З', type: 'letter' },
  BracketLeft: { symbol: 'х', shift: 'Х', type: 'number' },
  BracketRight: { symbol: 'ъ', shift: 'Ъ', type: 'number' },
  Backslash: { symbol: '\\', shift: '/', type: 'number' },
  Delete: { symbol: 'Del', shift: 'Del', type: 'functional' },
  CapsLock: { symbol: 'CapsLock', shift: 'CapsLock', type: 'functional' },
  KeyA: { symbol: 'ф', shift: 'Ф', type: 'letter' },
  KeyS: { symbol: 'ы', shift: 'Ы', type: 'letter' },
  KeyD: { symbol: 'в', shift: 'В', type: 'letter' },
  KeyF: { symbol: 'а', shift: 'А', type: 'letter' },
  KeyG: { symbol: 'п', shift: 'П', type: 'letter' },
  KeyH: { symbol: 'р', shift: 'Р', type: 'letter' },
  KeyJ: { symbol: 'о', shift: 'О', type: 'letter' },
  KeyK: { symbol: 'л', shift: 'Л', type: 'letter' },
  KeyL: { symbol: 'д', shift: 'Д', type: 'letter' },
  Semicolon: { symbol: 'ж', shift: 'Ж', type: 'number' },
  Quote: { symbol: 'э', shift: 'Э', type: 'number' },
  Enter: { symbol: 'Enter', shift: 'Enter', type: 'functional' },
  ShiftLeft: { symbol: 'Shift', shift: 'Shift', type: 'functional' },
  KeyZ: { symbol: 'я', shift: 'Я', type: 'letter' },
  KeyX: { symbol: 'ч', shift: 'Ч', type: 'letter' },
  KeyC: { symbol: 'с', shift: 'С', type: 'letter' },
  KeyV: { symbol: 'м', shift: 'М', type: 'letter' },
  KeyB: { symbol: 'и', shift: 'И', type: 'letter' },
  KeyN: { symbol: 'т', shift: 'Т', type: 'letter' },
  KeyM: { symbol: 'ь', shift: 'Ь', type: 'letter' },
  Comma: { symbol: 'б', shift: 'Б', type: 'number' },
  Period: { symbol: 'ю', shift: 'Ю', type: 'number' },
  Slash: { symbol: '.', shift: ',', type: 'number' },
  ArrowUp: { symbol: '↑', shift: '↑', type: 'letter' },
  ShiftRight: { symbol: 'Shift', shift: 'Shift', type: 'functional' },
  ControlLeft: { symbol: 'Ctrl', shift: 'Ctrl', type: 'functional' },
  MetaLeft: { symbol: 'Start', shift: 'Start', type: 'functional' },
  AltLeft: { symbol: 'Alt', shift: 'Alt', type: 'functional' },
  Space: { symbol: ' ', shift: ' ', type: 'letter' },
  AltRight: { symbol: 'Alt', shift: 'Alt', type: 'functional' },
  ArrowLeft: { symbol: '←', shift: '←', type: 'letter' },
  ArrowDown: { symbol: '↓', shift: '↓', type: 'letter' },
  ArrowRight: { symbol: '→', shift: '→', type: 'letter' },
  ControlRight: { symbol: 'Ctrl', shift: 'Ctrl', type: 'functional' },
};
export { objectKeysEn, objectKeysRu };
