"use strict";
// Makes variables
let typeWrite = document.getElementById("typewriter");
let typeWrite2 = document.getElementById("typewriter2");
let input = typeWrite.textContent;
let input2 = typeWrite2.textContent;
let textHTML;
let randLyd;
let randFor;
const typeSpace = document.getElementById("typespace");
const typeReturn = document.getElementById("typeReturn");
let arrayString;
let maxIterations = input.length;

let iteration = -1;

window.addEventListener("DOMContentLoaded", writeCharacters);

function writeCharacters() {
  textHTML = typeWrite2.innerHTML;
  // Clears the elements, but not the strings
  typeWrite.textContent = "";
  typeWrite2.textContent = "";
  //   Runs the function
  addCharLoop();
}

function addCharLoop() {
  // Randomizes the sounds
  randLyd = Math.floor(Math.random() * 2) + 1;
  //   Randomizes delay
  randFor = 200 + Math.floor(Math.random() * 300) + 1;
  console.log(randFor);
  iteration++;

  if (iteration < maxIterations) {
    // If there is a space, it makes a space sound
    if (input[iteration] === " ") {
      console.log("this is a space");
      typeWrite.innerHTML += `${input[iteration]}`;
      typeSpace.play();
    } else {
      console.log(input[iteration]);
      typeWrite.innerHTML += `${input[iteration]}`;
      document.querySelector(`#typekey${randLyd}`).play();
      document.querySelector(`#typekey${randLyd}`).currentTime = 0;
    }
    setTimeout(addCharLoop, 2);
  } else {
    // Starts the second text
    document.querySelector("#typelast").play();
    checkInput2();
  }
}

function checkInput2() {
  if (input2 === "") {
    console.log("do nothing");
  } else {
    iteration = -1;

    document.querySelector("#typereturn").play();
    setTimeout(addCharLoop2, 2000);
  }
}
function addCharLoop2() {
  maxIterations = input2.length;
  randLyd = Math.floor(Math.random() * 2) + 1;
  randFor = 200 + Math.floor(Math.random() * 300) + 1;
  iteration++;

  if (iteration < maxIterations) {
    if (input2[iteration] === " ") {
      console.log("this is a space");
      typeWrite2.innerHTML += `${input2[iteration]}`;
      typeSpace.play();
    } else if (textHTML.substring(iteration, iteration + 4) === "<br>") {
      console.log("This is a linebreak");
      typeWrite2.innerHTML += "<br>";
      document.querySelector("#typereturn").play();
    } else {
      console.log(input2[iteration]);
      typeWrite2.innerHTML += `${input2[iteration]}`;
      document.querySelector(`#typekey${randLyd}`).play();
      document.querySelector(`#typekey${randLyd}`).currentTime = 0;
    }
    setTimeout(addCharLoop2, 2);
  } else {
    document.querySelector("#typelast").play();
  }
}

// getText();

// function getText() {

//   console.log(stringToType);
//   initLoop();
// }

// function initLoop() {
//   maxIterations = stringToType.length;
//   loop();
// }

// function loop() {
//   console.log("loop", typeWrite[iterator]);
//   iterator++;

//   if (iterator < maxIterations) {
//     Array.from(stringToType).forEach((letter, i) => {});
//   }
//   loop();
