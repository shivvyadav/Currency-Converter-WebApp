// Exchange Rate Converter
const BASE_URL = "https://v6.exchangerate-api.com/v6/22a2dcda7a7f35f6a9d57ee3/latest";

//selecting elements
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
