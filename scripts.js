"use strict";

var input_element = document.querySelector("#input");
var output_element = document.querySelector("#output");

setInterval(function () {
  output_element.value = input_element.value;
}, 1000);
