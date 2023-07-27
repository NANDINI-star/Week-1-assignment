/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

}

function sleep(n) {
    return new Promise((resolve) => setTimeout(() => {
      resolve()}, n));
  }
  
  async function doSomething() {
    console.log("start");
  
    await sleep(2000);
  
    console.log("stop");
    
  }
  
  doSomething();