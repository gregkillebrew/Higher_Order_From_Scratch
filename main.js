// Whiteboard, make a code plan and build each of the following methods:

// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.


// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
let motorcycles = [{item:"harley", cost: 1000.00}, {item:"ducati", cost: 1000.00}, {item:"suzuki", cost: 800.00}, {item:"kawasaki", cost: 800.00}, {item:"indian", cost: 900.00}]

let cost = motorcycles.map((money) => money.cost)

let total = cost.reduce((sum, current) => sum + current,0);
  console.log ("Total",total)


// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
filter()
let motorcycles = [{item:"harley", type: 1.00}, {item:"ducati", type: 2.00}, {item:"suzuki", type: 2.00}, {item:"kawasaki", type: 2.00}, {item:"indian", type: 1.00}]


let importedMotorcycles = [];
for (let i = 0; i < motorcycles.length; i++) {
    if (motorcycles[i].type > 1) {
        importedMotorcycles.push(motorcycles[i]);
    }
}
console.log(importedMotorcycles);

// Create a repo called "Higher-Order-From-Scratch".



// Practice working from branches by creating a new branch called: "HigherOrder".



// Place your code in a file called main.js.



// Create a pull request (PR) for Higher-Order-From-Scratch to be merged into master.