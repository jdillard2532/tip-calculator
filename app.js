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
    let error = document.querySelector(".error-message");

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
  });
});

form.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    findPercentage();
    e.preventDefault();
  }
  resetButtonClear();
});

// percentEventListener();

// //listening event for ENTER key
// body.addEventListener("keypress", function (e) {
//   resetButtonClear();
//   let error = document.querySelector(".error-message");
//   if (e.key === "Enter") {
//     if (numberPeople.value <= 0 || NaN) {
//       inputPeople.classList.add("error");
//       error.style.display = "block";
//       e.preventDefault();
//     } else {
//       inputPeople.classList.remove("error");
//       error.style.display = "none";
//       findPercentage();
//       e.preventDefault();
//     }
//   }
// });

// //Custom % eventlistener
custom.addEventListener("keyup", function () {
  for (let i = 0; i < percentage.length; i++) {
    percentage[i].style.backgroundColor = "var(--cyan-700)";
    percentage[i].style.color = "var(--white)";
  }
  if (custom.value === 0) {
  }
  calculate2(custom.value);
});

//reset button
resetButton.addEventListener("click", function () {
  clearAll();
});

//Select %
function percentEventListener() {}
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
    calculate2(info.target.value);
  });
});

//   //   for (let i = 0; i < percentage.length; i++) {
//   //     percentage[i].addEventListener("click", function (e) {
//   //       calculate(e.target.value);
//   //     });
//   //   }
//   //   for (let i = 0; i < percentage.length; i++) {
//   //     percentage[i].classList.remove("active");
//   //     percentage[i].backgroundColor = "hsl(183,100%,15%)";
//   //   }
// }

function calculate2(x) {
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
      calculate2(e.value);
    }
  });
}

// //calculate total
// function calculate(x) {
//   let amount = Number(billAmount.value);
//   let people = Number(numberPeople.value);
//   let percent = Number(x);
//   let tipSplit = Number(amount * percent) / 100;
//   let split;
//   let total;

//   tipSplit = Number(tipSplit / people);
//   split = (amount * percent) / 100;
//   total = (amount + split) / people;

//   tipAmount.textContent = Math.floor(tipSplit * 100) / 100;
//   tipTotal.textContent = Math.round(total * 100) / 100;
// }

// //find percentage
// function findPercentage() {
//   let customValue = Number(custom.value);
//   if (custom.value === "") {
//     for (let i = 0; i < percentage.length; i++) {
//       if (percentage[i].classList.contains("active")) {
//         let percent = percentage[i].value;

//         calculate(percent);
//       }
//     }
//   } else {
//     calculate(customValue);
//   }
// }
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

//   percentage.forEach((e) => {
//     e.classList.remove("active");
//   });

//   tipAmount.textContent = "0.00";
//   tipTotal.textContent = "0.00";
// }

// //RESET disable button
function resetButtonClear() {
  if (input[0].value === "" && input[1].value === "") {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
}
