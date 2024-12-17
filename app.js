const billAmount = document.querySelector("#bill");
const numberPeople = document.querySelector("#people");
const tipAmount = document.querySelector(".tip-amount");
const tipTotal = document.querySelector(".tip-total");
const resetButton = document.querySelector(".reset");
const percentage = document.querySelectorAll(".percentage");
const custom = document.querySelector("#custom");
const inputPeople = document.querySelector(".people-input");
const form = document.querySelector("form");

let input = document.querySelectorAll("input");
let enter = document.querySelector("body");

clearAll();
inputClear();
resetButtonClear();

input.forEach((e) => {
  e.addEventListener("keyup", function () {
    let error = document.querySelectorAll(".error-message");

    if (input[0].value < 0) {
      error[0].style.display = "block";
    } else {
      error[0].style.display = "none";
      findPercentage();
    }

    if (input[1].value > 0) {
      findPercentage();
    }

    if (numberPeople.value <= 0) {
      input[2].classList.add("error");
      error[1].style.display = "block";
    } else {
      input[2].classList.remove("error");
      error[1].style.display = "none";
      findPercentage();
    }
  });
});

//event listener for ENTER button
form.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    findPercentage();
    e.preventDefault();
  }

  resetButtonClear();
});

// //Custom % eventlistener
custom.addEventListener("keyup", function () {
  for (let i = 0; i < percentage.length; i++) {
    percentage[i].style.backgroundColor = "var(--cyan-700)";
    percentage[i].style.color = "var(--white)";
    percentage[i].classList.remove("active");
  }
  calculate(custom.value);
});

//reset button
resetButton.addEventListener("click", function () {
  clearAll();
});

//Select %
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
    calculate(info.target.value);
  });
});

//*******FUNCTIONS**************

function calculate(x) {
  let tipPercent = Number(x) / 100;
  let inputBillAmount = Number(input[0].value);
  let inputPeopleAmount = Number(input[2].value);
  let tip = tipPercent * inputBillAmount;
  let error = document.querySelector(".error-message");
  console.log(inputPeople.value);

  if (x > 0 && input[2].value > 0) {
    tipAmount.textContent = Math.floor((tip / inputPeopleAmount) * 100) / 100;
    tipTotal.textContent =
      Math.round(((inputBillAmount + tip) / inputPeopleAmount) * 100) / 100;
  }
}

//find Percentage
function findPercentage() {
  percentage.forEach((e) => {
    if (e.classList.contains("active")) {
      calculate(e.value);
    } else {
      calculate(custom.value);
    }
  });
}

// // clear all inputs
function inputClear() {
  for (let i = 1; i < input.length; i++) {
    input[i].value = "";
  }
}
// // CLEAR ALL
function clearAll() {
  input.forEach((e) => {
    e.value = "";
  });
}

// //RESET disable button
function resetButtonClear() {
  if (input[0].value === "" && input[1].value === "") {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
}

function checkNumber(number) {
  if (number < 0 || number === "") {
    console.log("Please Enter Valid Number");
  }
}
