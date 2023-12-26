

function factorial(num){
   
    if (num === 1 || num === 0) return 1;

    return num * factorial(num-1);

}

console.log(factorial(0));
factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040