/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {

}

function waitTwoSecond() {

}

function waitThreeSecond() {

}

function calculateTime() {

}

function waitOneSecond() {

    return new Promise((resolve) => setTimeout(() => {resolve("p1")}, 1000));
  
  }
  
  function waitTwoSecond() {
  return new Promise((resolve) => setTimeout(() => {resolve("p2")}, 2000));
  }
  
  function waitThreeSecond() {
  return new Promise((resolve) => setTimeout(() => {resolve("p3")}, 3000));
  }
  
  function calculateTime() {
    const start = new Date();
    waitOneSecond();
    waitTwoSecond();
    waitThreeSecond();
  const end = new Date();
  
    console.log((end-start)/1000);
    
  }
  
  calculateTime();