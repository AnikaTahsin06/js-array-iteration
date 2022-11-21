let fruits = ["mango", "apple", "orange", "strawberrie", "lemon"];

// forEach()
fruits.forEach((value, index, array) => {
  value = value + " juice";
  console.log(value, index);
  console.log(array);
});

// map()
let fruitSmoothie = fruits.map((fruit) => {
  console.log(fruit);
  return `${fruit} smoothie`;
});

console.log(fruitSmoothie);

// filter()
let newFruits = fruits.filter((fruit) => {
  return fruit.length > 5;
});

console.log(newFruits);

// reduce()
function myFunction(total, value, index, array) {
  return total + value;
}

let totalString = fruits.reduce(myFunction);
console.log(totalString);

let nums = [1, 2, 3, 4];

function myFunction(total, value, index, array) {
  return total + value;
}

let totalNum = nums.reduce(myFunction);
console.log(totalNum);

// some()
let atLeast = fruits.some(function (fruit) {
  return fruit.length > 11;
});
console.log(atLeast);

// every()
let everyM = fruits.every(function (fruit, index, array) {
  return fruit.length > 4;
});
console.log(everyM);

// find()
let findV = fruits.find(function (fruit) {
  return fruit === "mangoo";
});
console.log(findV);

// findIndex()
let findIndex = fruits.findIndex(function (fruit) {
  return fruit === "mangoo";
});
console.log(findIndex);
