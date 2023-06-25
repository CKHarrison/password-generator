const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;
let firstPassword = "";
let secondPassword = "";
let firstPasswordEl = document.getElementById("password-one");
let secondPasswordEl = document.getElementById("password-two");

function generatePassword() {
  if (firstPassword.length > 0 || secondPassword.length > 0) {
    resetPasswords();
  }
  for (let i = 0; i < passwordLength; i++) {
    firstPassword += pickRandomCharacter();
  }

  for (let j = 0; j < passwordLength; j++) {
    secondPassword += pickRandomCharacter();
  }

  firstPasswordEl.value = firstPassword;
  secondPasswordEl.value = secondPassword;
}

function resetPasswords() {
  firstPassword = "";
  secondPassword = "";

  firstPasswordEl.textContent = firstPassword;
  secondPasswordEl.textContent = secondPassword;
}

function pickRandomCharacter() {
  let index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

function copyText(element) {
  let text = element;
  text.select();
  document.execCommand("copy");
}

function copyPasswordOne() {
  copyText(firstPasswordEl);
}

function copyPasswordTwo() {
  copyText(secondPasswordEl);
}
