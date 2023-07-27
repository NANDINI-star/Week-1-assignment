## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































(Hint: setTimeout)

var counter = 1;
function counterr() {
  console.clear();
  console.log(counter);
  counter += 1;
setTimeout(counterr, 1000);
}

counterr();