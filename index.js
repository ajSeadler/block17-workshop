// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.

// Prompt 2:
// Print an array of all the drinks.
const coffeeMenu = require("./coffee_data_starter.js");

const drinkNames = coffeeMenu.map((drink) => drink.name);
console.log("Drink names");
console.table(drinkNames);

// Prompt 3
// Print an array of drinks that cost 5 and under.
const drinkNamesUnder5 = coffeeMenu
  .filter((drink) => drink.price <= 5) // filter drinks with price 5 or under
  .map((drink) => ({ name: drink.name, price: drink.price }));
console.log("Drinks $5 or under");
console.table(drinkNamesUnder5);
// Prompt 4
// Print an array of drinks that are priced at an even number.
const drinkNamesEven = coffeeMenu.filter((drink) => drink.price % 2 === 0)
.map((drink) => ({ name: drink.name, price: drink.price }));
console.log("Drinks with an even price");
console.table(drinkNamesEven);
// Prompt 5
// Print the total if you were to order one of every drink.
const totalCost = coffeeMenu.reduce((total, drink) => total + drink.price, 0);
console.log(`The total cost for one of every drink is: $${totalCost}`);
// Prompt 6
// Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal)
.map((drink) => ({ name: drink.name, seaonal: drink.seasonal }));

console.log("Here are seasonal drinks.");
console.table(seasonalDrinks);
// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"
const seasonalDrinksWBeans = coffeeMenu
  .filter((drink) => drink.seasonal)
  .map((drink) => `${drink.name} with imported beans!`);
  console.log("Here are seasonal drinks with beans");
console.table(seasonalDrinksWBeans);
