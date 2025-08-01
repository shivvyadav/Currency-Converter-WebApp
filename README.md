# 💱 Currency Converter

A simple and clean currency converter built using HTML, CSS, and JavaScript. It lets you convert one currency to another in real-time using live exchange rates fetched from the ExchangeRate-API. The app also displays country flags based on the selected currencies.
<br/>

## 🔧 Features

-Real-time currency conversion <br/>
-User-friendly interface <br/>
-Dropdowns with currency codes and country flags <br/>
-Default conversion from USD to NPR <br/>
-Error handling for invalid or empty inputs
<br/>

## 🔑 API Used

We use ExchangeRate-API to fetch the latest exchange rates. You will need your own API key.
Replace the BASE_URL in app.js with your own key:
const BASE_URL = "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest";
<br/>

## 🧠 How It Works

-On page load, the default conversion is set (USD to NPR).<br/>
-Users can enter an amount and select currencies from dropdowns.<br/>
-The app fetches the latest exchange rates from the API.<br/>
-It updates the conversion message with the final amount.<br/>
-Flag images dynamically update based on currency selection.<br/>
