/*
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip),
and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
*/

let inputString = `12.00
                  20
                  8`;
let currentLine = 0;

function convertInputStringToArray() {
  inputString = inputString.replace(/\s*$/, '')
                           .split('\n')
                           .map(str => str.replace(/\s*$/, ''));
}

function readLine() {
  return inputString[currentLine++];
}

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  let taxOnMeal = (meal_cost * (tax_percent/100))
  let tipAmount = (meal_cost * (tip_percent/100))

  let totalCost = meal_cost + taxOnMeal + tipAmount
  console.log(Math.round(totalCost))
}

function main() {
  convertInputStringToArray()

  const meal_cost = parseFloat(readLine());

  const tip_percent = parseInt(readLine(), 10);

  const tax_percent = parseInt(readLine(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}
main()