const billAmount = document.querySelector("#bill");
const numberPeople = document.querySelector("#people");
const tipAmount = document.querySelector(".tip-amount");
const tipTotal = document.querySelector(".tip-total");
const resetButton = document.querySelector(".reset");
const percentage = document.querySelectorAll(".percentage");
const custom = document.querySelector("#custom");
const inputPeople = document.querySelector(".people-input");
const body = document.querySelector("body");

let input = document.querySelectorAll("input");
let enter = document.querySelector("body");

percentEventListener();
clearAll();
inputClear();
resetButtonClear();

//listening event for ENTER key
body.addEventListener("keypress", function (e) {
  resetButtonClear();
  let error = document.querySelector(".error-message");
  if (e.key === "Enter") {
    if (numberPeople.value <= 0 || NaN) {
      inputPeople.classList.add("error");
      error.style.display = "block";
      e.preventDefault();
    } else {
      inputPeople.classList.remove("error");
      error.style.display = "none";
      findPercentage();
      e.preventDefault();
    }
  }
});

//Custom % eventlistener
custom.addEventListener("keypress", function () {
  for (let i = 0; i < percentage.length; i++) {
    percentage[i].style.backgroundColor = "var(--cyan-700)";
    percentage[i].style.color = "var(--white)";
  }
});

//reset button
resetButton.addEventListener("click", function () {
  clearAll();
});

//Select %
function percentEventListener() {
  percentage.forEach((e) => {
    e.addEventListener("click", function (info) {
      custom.value = "";

      for (let i = 0; i < percentage.length; i++) {
        percentage[i].classList.remove("active");
        percentage[i].style.backgroundColor = "var(--cyan-700)";
        percentage[i].style.color = "var(--white)";
      }
      info.target.classList.add("active");
      info.target.style.backgroundColor = "var(--cyan-600)";
      info.target.style.color = "var(--cyan-700)";
    });
  });

  //   for (let i = 0; i < percentage.length; i++) {
  //     percentage[i].addEventListener("click", function (e) {
  //       calculate(e.target.value);
  //     });
  //   }
  //   for (let i = 0; i < percentage.length; i++) {
  //     percentage[i].classList.remove("active");
  //     percentage[i].backgroundColor = "hsl(183,100%,15%)";
  //   }
}

//calculate total
function calculate(x) {
  let amount = Number(billAmount.value);
  let people = Number(numberPeople.value);
  let percent = Number(x);
  let tipSplit = Number(amount * percent) / 100;
  let split;
  let total;

  tipSplit = Number(tipSplit / people);
  split = (amount * percent) / 100;
  total = (amount + split) / people;

  tipAmount.textContent = Math.floor(tipSplit * 100) / 100;
  tipTotal.textContent = Math.round(total * 100) / 100;
}

//find percentage
function findPercentage() {
  let customValue = Number(custom.value);
  if (custom.value === "") {
    for (let i = 0; i < percentage.length; i++) {
      if (percentage[i].classList.contains("active")) {
        let percent = percentage[i].value;

        calculate(percent);
      }
    }
  } else {
    calculate(customValue);
  }
}
// clear all inputs
function inputClear() {
  for (let i = 1; i < input.length; i++) {
    input[i].value = "";
  }
}
// CLEAR ALL
function clearAll() {
  input.forEach((e) => {
    e.value = "";
  });

  percentage.forEach((e) => {
    e.classList.remove("active");
  });

  tipAmount.textContent = "0.00";
  tipTotal.textContent = "0.00";
}

//RESET disable button
function resetButtonClear() {
  if (input[0].value === "" && input[1].value === "") {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
}
