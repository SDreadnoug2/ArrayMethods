const theArray = [1, 2, 3];

/* reverse - is mutative, (will modify original array) */
theArray.reverse();
/* 3, 2, 1 */

// push - is mutative, adds to original
theArray.push(5, 6, 7);
// 1, 2, 3, 5, 6, 7

//unshift - mutative, adds item to beginning
theArray.unshift(4);
// 4, 1, 2, 3

//includes - not mutative, returns true if item is in the aray.
// additional argument will be "From index", meaning it will check if it includes x from that index
theArray.includes(2, 1);
// true

//isArray - checks if is array
Array.isArray(theArray);
// returns true

//array.from - creates an array from something that you give it.
// Giving it an array
const newArray = Array.from(theArray); //gives a copy of the array
// can be useful when using document.getelementsbyclassname, returns a nodelist, can convert this to an array with array.from

//array.of - can pass any arguments, and make an array from it.
Array.of(1, undefined, [1, 2, 3]);

//indexOf - find index of value
theArray.indexOf(1);
// returns 0;
// if there's two of the same values, it returns the first.

//last index of returns the last time that appears.
theArray.lastIndexOf(3);
// returns 2

//toString - non-mutative, converts into a string representation.
console.log(theArray.toString());
// make it local specific, toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

// join - converts an array to a string, but pass through a seperator.
const theArrayText = ["Don't", "forget", "to", "subscribe"];
console.log(theArrayText.join(" "));
// returns Don't forget to subscribe

// pop - mutative, removes the last element from the array and returns that item
const removedItem = theArray.pop();
// returns 1

//shift - mutative, samve as pop but with the first item
const removedItem2 = theArray.shift();

//slice - not mutative, returns a copy from an array from a starting point to an ending point (exclusive - up to but not including)
const theArray2 = ["a", "b", "c", "d", "e", "f", "g"];
const arrayAfterC = theArray2.slice(3);
// returns d e f g
// slice(3, 5) would return c d e

// forEach - iterates over each item
const forEachArray = ["I", "you", "am"];
forEachArray.forEach((item) => {
  console.log(item);
});
// returns: I, you, am

// find - not mutative, first instance of an item in an array.
const names = ["Tyrice", "Candice", "Joe", "Sky"];
const firstNameWithLetterO = names.find((n) => n.includes("o"));
// returns Joe, if item doesn't exist returns undefined

//find index - returns the index instead of the item, and -1 instead of undefined.

// some - returns true if it finds item that passes the test.
const grades = [100, 97, 98, 58, 91];
const failed = grades.some((g) => g < 70);
console.log(failed);

// every - returns true only if all pass the test.
const evens = [2, 4, 6, 8, 10];
const isEven = (num) => num % 2 === 0;
console.log(evens.every(isEven));

//filter - non-mutative, pass in a function, and any items that pass will be in the array that it returns
const isEven = (num) => num % 2 === 0;
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = nums.filter(isEven);

//map - MUTATIVE, Iterate over every item, run that function on every item and replace that value in the array with new value
const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = oddNumbers.map((item) => item + 1);

//reduce - not-mutative, takes an accumulator and current value.
const theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = theArray.reduce((acc, val) => {
  return acc + val;
}, 0);
// 0 is starting value
//e.g. 2 making an object and using it as they key / reducing the array to a map.
const mappedValues = 

//reduce right - works like reduce method, but starts from the right hand side of the array.
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduceRight((prev, curr) => {
  return prev + curr;
});
console.log(sum); //output 15