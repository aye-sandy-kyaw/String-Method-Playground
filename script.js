var showChar = document.getElementById("showchar");
var inputBox = document.getElementById("inputBox");
var message = document.getElementById("message");
var letters = document.getElementsByClassName("letter");
var numbers = document.getElementsByClassName("Num");
var capsLock = document.getElementById("capslock");
capsLock = false;

function calculate(method) {
  var value = showChar.innerText;
  var index = inputBox.value;

  if (
    method === "charAt" ||
    method === "charCodeAt" ||
    method === "includes" ||
    method === "indexOf" ||
    method === "lastIndexOf" ||
    method === "startsWith" ||
    method === "endsWith"
  ) {
    if (index === "") {
      message.style.display = "block";
      return;
    } else {
      message.style.display = "none";
    }
  }

  switch (method) {
    case "charAt":
      window.alert(`${value.charAt(index)}`);
      break;
    case "charCodeAt":
      window.alert(`${value.charCodeAt(index)}`);
      break;
    case "toUpperCase":
      window.alert(` ${value.toUpperCase()}`);
      break;
    case "toLowerCase":
      window.alert(`${value.toLowerCase()}`);
      break;
    case "trim":
      window.alert(`${value.trim()}`);
      break;
    case "includes":
      window.alert(`${value.includes(index)}`);
      break;
    case "indexOf":
      window.alert(`${value.indexOf(index)}`);
      break;
    case "lastIndexOf":
      window.alert(`${value.lastIndexOf(index)}`);
      break;
    case "startsWith":
      window.alert(`${value.startsWith(index)}`);
      break;
    case "endsWith":
      window.alert(`${value.endsWith(index)}`);
      break;
  }
}

/**
 * This method is used for capslock
 */
function capsLockBtn() {
  capsLock = !capsLock;
  for (var i = 0; i < letters.length; i++) {
    changeLetters(letters[i]);
  }
}

function changeLetters(obj) {
  obj.innerText = capsLock
    ? obj.innerText.toUpperCase()
    : obj.innerText.toLowerCase();
}

function clickLetter(obj) {
  var char = obj.innerText;
  showChar.innerText += char;
}

function clickNumber(obj) {
  var num = obj.innerText;
  showChar.innerText += num;
}

/**
 * This method is used for backspace
 */
function backspaceBtn() {
  showChar.innerText = showChar.innerText.slice(0, -1);
}

/**
 * This method is used for space
 */
function spaceBtn() {
  var space = document.getElementById("space").innerText;
  showChar.innerText += space;
}

/**
 * This method is used for clear text
 */
function clearBtn() {
  showChar.innerText = "";
  inputBox.value = "";
}

/**
 * This method is used for when focus in the inputBox
 */
function hidemessage() {
  message.style.display = "none";
}
