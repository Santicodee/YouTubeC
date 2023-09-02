"use strict";
const ham = document.querySelector(".hamburger2");
const hamburgerMenu = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav");
const container = document.querySelector(".container");

hamburgerMenu.addEventListener("click", function () {
  navbar.classList.add("change");
  container.classList.remove("big-container");
});
ham.addEventListener("click", function () {
  navbar.classList.remove("change");
  container.classList.add("big-container");
});
