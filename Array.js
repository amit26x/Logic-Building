// create An Aarray
let arr = [1,2,3,4,5]
console.log(arr);


// Find the Array Length
let arr = [1,2,3,4,5]
console.log(arr.length);


// Access the first aelement of Array
let arr = [1,2,3,4,5]
console.log(arr[0]);


// Access the last Element of Array
let arr = [1,2,3,4,6];
console.log(arr[arr.length - 1]);


// Add element at the and of an Array
let arr = [1,2,3,4,5];
arr.push(8);
console.log(arr);


// Remove the last element from an Array
let arr = [1,2,3,4,5,6,7];
arr.pop();
console.log(arr);


// Add an Element at the Beginning
let arr = [1,2,3,4,5];
arr.unshift(0);
console.log(arr);


// Remove the first element of Array
let arr = [1,2,3,4,5];
arr.shift()
console.log(arr);


// concatenate Two Array
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];

let Array = arr1.concat(arr2);
console.log(Array);


// Check Array Contains a Specific element
let arr = [1,2,3,4,5];
console.log(arr.includes(0));

