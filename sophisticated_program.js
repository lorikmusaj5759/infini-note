/* 
 * Filename: sophisticated_program.js
 * Description: This code implements a sophisticated program that performs
 * complex calculations and produces meaningful outputs.
 */

// Complex math function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Sophisticated program to calculate and display Fibonacci series
function fibonacci(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

// Complex algorithm to sort an array in descending order
function sortArrayDescending(array) {
  let sortedArray = array.slice(0);
  sortedArray.sort(function (a, b) {
    return b - a;
  });
  return sortedArray;
}

// Sophisticated program to calculate prime numbers
function getPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Main program execution
console.log("Sophisticated Program\n");

console.log("Factorial of 5: " + factorial(5));

console.log("\nFibonacci Series (10 numbers): " + fibonacci(10).join(", "));

let numbers = [9, 23, 6, 17, 2, 45, 8];
console.log("\nOriginal Array: " + numbers.join(", "));
console.log("Sorted Array (Descending Order): " + sortArrayDescending(numbers).join(", "));

console.log("\nPrime Numbers up to 50: " + getPrimes(50).join(", "));

console.log("\nProgram execution complete.");