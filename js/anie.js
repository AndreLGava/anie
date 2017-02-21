/*
  Anie 1.2
  https://github.com/gmasson/anie
  License MIT
*/

function block(id){ document.getElementById(id).style.display="block"; }
function none(id){ document.getElementById(id).style.display="none"; }
function print() { window.print() }
function back() { window.history.go(-1) }
function next() { window.history.go(1) }
function reload() { window.history.go(0) }

/* Add texts to inputs */
function addtext(idElement, text) {
  var area = document.getElementById(idElement);
  var cursorPosition = area.selectionStart;
  cursorposition(area, cursorPosition, text);
  updatecursorposition(cursorPosition, text, area);
}

function cursorposition(area, cursorPosition, text) {
  var front = (area.value).substring(0, cursorPosition);
  var back = (area.value).substring(cursorPosition, area.value.length);
  area.value = front + text + back;
}

function updatecursorposition(cursorPosition, text, area) {
  cursorPosition = cursorPosition + text.length;
  area.selectionStart = cursorPosition;
  area.selectionEnd = cursorPosition;
  area.focus();    
}

/* Save input texts */
function savetext(idElement, nameElement) {
  var textscreen = document.getElementById(idElement).value;
  window.localStorage.setItem(nameElement, textscreen);
}

/* Recover text and inject input */
function recovertext(idElement, nameElement) {
  var text = window.localStorage.getItem(nameElement);
  if (text == null) { var text = ''; }
  addtext(idElement, text);
  text.download = "teste.html";
}
