/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

    return new Promise((resolve) => setTimeout(resolve("p1"), 1000));
  
  }
  
  function waitTwoSecond() {
  return new Promise((resolve) => setTimeout(resolve("p2"), 2000));
  }
  
  function waitThreeSecond() {
  return new Promise((resolve) => setTimeout(resolve("p3"), 3000));
  }
  
  function calculateTime() {
    const start = new Date();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((values) => {
      console.log("alldone", values);
      const end = new Date();
  
    console.log((end-start) / 1000);
    })
  
    
  }
  
  calculateTime();