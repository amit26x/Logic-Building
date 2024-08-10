// function checkEvenOdd(num){
//     if(num % 2 == 0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(checkEvenOdd(21));


let isLeapYear = (year) => {
    if((year % 4 === 0 && year % 100 !==0) || year % 400 == 0) {
        return true;
    }else{
        return false;
    }
}
console.log(isLeapYear(2028));