// create An Aarray
// let arr = [1,2,3,4,5]
// console.log(arr);


// Find the Array Length
// let arr = [1,2,3,4,5]
// console.log(arr.length);


// Access the first aelement of Array
// let arr = [1,2,3,4,5]
// console.log(arr[0]);


// Access the last Element of Array
// let arr = [1,2,3,4,6];
// console.log(arr[arr.length - 1]);


// Add element at the and of an Array
// let arr = [1,2,3,4,5];
// arr.push(8);
// console.log(arr);


// Remove the last element from an Array
// let arr = [1,2,3,4,5,6,7];
// arr.pop();
// console.log(arr);


// Add an Element at the Beginning
// let arr = [1,2,3,4,5];
// arr.unshift(0);
// console.log(arr);


// Remove the first element of Array
// let arr = [1,2,3,4,5];
// arr.shift()
// console.log(arr);


// concatenate Two Array
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9];

// let Array = arr1.concat(arr2);
// console.log(Array);


// Check Array Contains a Specific element
// let arr = [1,2,3,4,5];
// console.log(arr.includes(0));



// ************************** Intermediate Level Question************************

//Reverse an Array
// let arr = [1,2,3,4,5]
// arr.reverse();
// console.log(arr);

//sort an Array in Ascending order
// let arr = [4,3,6,2,8,7,6,0,1];
// arr.sort((a,b) => a-b);
// console.log(arr);


//sort An Array in Descending Order
// let arr = [1,2,3,4,5,6,7]
// arr.sort((a,b)=> b-a);
// console.log(arr);


//Find the index of a specific Element
// let arr = [1,2,3,4,5,6]
// console.log(arr.indexOf(3));


// Remove a specific element by its index
// let arr = [1,2,3,4,5,6]
// arr.splice(arr.indexOf(3),1);
// console.log(arr);


//Create New Array with only Even Number
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let even = arr.filter(num => num % 2 === 0);
// console.log(even);


//Sum All the element of an Array
// let arr = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
// let sum = arr.reduce((acc , curr) => acc + curr, 0);
// console.log(sum);


//Find the maximum element of an Array
// let arr = [1,12,88,90,67,56,80];
// let Max = Math.max(...arr);
// console.log(Max);


//Find the minimum element in an Array
// let arr = [1,2,3,4,5,6,7,89]
// let min = Math.min(...arr);
// console.log(min);


// Flatten Array
// let arr = [[1,2], [3,4], [5,6],[7,8]];
// let flat = arr.flat();
// console.log(flat);

//Remove Duplicate Array
// let arr = [1,2,2,1,4,3,2,5,6,5,7,8,7,6,9,8,7,6,];
// let New = [...new Set(arr)];
// console.log(New);


//Merge Array
// let arr1 = [1,2,3,4,5,6,7,8,9]
// let arr2 = [1,2,32,21,,12,4,55,44,6,77];
// let Merge =[...new Set([...arr1, ...arr2])];
// console.log(Merge);


//Fibonacci 
function fibonacci (n){
    let fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
console.log(fibonacci(50));