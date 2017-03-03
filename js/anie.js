/*
  Anie 1.2.1
  https://github.com/gmasson/anie
  License MIT
*/

/* Display control */
function block(id){ document.getElementById(id).style.display="block"; }
function none(id){ document.getElementById(id).style.display="none"; }

/* Print page */
function print() { window.print(); }

/* Back page */
function back() { window.history.go(-1); }

/* Next page */
function next() { window.history.go(1); }

/* Reload page*/
function reload() { window.history.go(0); }

/* Add class */
function addClass(idElement, addClass) {
  document.getElementById(idElement).classList.add(addClass);
}

/* Remove class */
function removeClass(idElement, rmClass) {
  document.getElementById(idElement).classList.remove(rmClass);
}

/* Add or remove class according to scroll */
function classScroll(idElement) {
  var element = document.getElementById(idElement);
  var insertClass = element.getAttribute("data-addclass");
  var numPx = element.getAttribute("data-scrollpx");
  var top = window.pageYOffset || document.documentElement.scrollTop;
  if( top > numPx ) {
    addClass(idElement, insertClass);
  } else {
    removeClass(idElement, insertClass);
  }
}

/* Add texts to inputs */
function addText(idElement, text) {
  var area = document.getElementById(idElement);
  var cursorPosition = area.selectionStart;
  // cursor position
  var front = (area.value).substring(0, cursorPosition);
  var back = (area.value).substring(cursorPosition, area.value.length);
  area.value = front + text + back;
  // update cursor position
  updatecursorposition(cursorPosition, text, area);
  cursorPosition = cursorPosition + text.length;
  area.selectionStart = cursorPosition;
  area.selectionEnd = cursorPosition;
  area.focus(); 
}

/* Save input texts */
function saveText(nameElement, idElement) {
  var textscreen = document.getElementById(idElement).value;
  window.localStorage.setItem(nameElement, textscreen);
}

/* Recover text and inject input */
function recoverText(nameElement, idElement) {
  var text = window.localStorage.getItem(nameElement);
  if (text == null) { var text = ''; }
  addtext(idElement, text);
}

/* Notifications */
function notify(title, icon, text, url) {
  Notification.requestPermission(function() {
    var notification = new Notification(title, {
      icon: icon_,
      body: text
    });
    notification.onclick = function() { window.open(url); }
  });
}