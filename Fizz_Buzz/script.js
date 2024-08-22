
let count = 1;

while(count <= 100) {
    if ((count % 3 == 0 && count % 5 == 0) 
    ) {
      console.log("FizzBuzz");
    } else if (count % 3 == 0) {
      console.log("Fizz");
    } else if (count % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(count);
    }
  
  count++;
}

// This function should output 'n' numbers in the fibonacci sequence

function fib(n) {
  let prevFib1 = 0;
  let prevFib2 = 0;
  let currentFib = 0;

  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      currrentFib = 1;
    } else {
      currentFib = prevFib1 + prevFib2;
    }
    prevFib1 = prevFib2;
    prevFib2 = currentFib;
    console.log(currentFib);
  }
}
