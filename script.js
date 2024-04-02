const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outPut = document.getElementById("output");

const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let inputNumber;
let romanNumeral = "";

convertBtn.addEventListener("click", function () {
  romanNumeral = "";
  outPut.textContent = "";

  inputNumber = parseInt(number.value);

  if (number.value === "") {
    alert("Please enter a valid number");
  } else if (inputNumber === -1) {
    outPut.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputNumber >= 4000) {
    outPut.textContent = "Please enter a number less than or equal to 3999";
  } else {
    for (let key in romanObject) {
      while (inputNumber >= romanObject[key]) {
        romanNumeral += key;
        inputNumber -= romanObject[key];
      }
    }
    outPut.textContent = romanNumeral;
  }
});
