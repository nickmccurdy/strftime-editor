"use strict";

var input_element = document.querySelector("#input");
var output_element = document.querySelector("#output");

// Update the output field with the current strftime results
var update = function () {
  output_element.innerHTML = strftime(input_element.value) || "none";
};

// Update after any changes in the input (for newer browsers)
input_element.addEventListener("input", update);

// Update after keypresses in the input (for older browsers)
input_element.addEventListener("keypress", update);

// Force an update every second (to keep the output up to date as time passes)
setInterval(update, 1000);

// Trigger an initial update immediately
update();
