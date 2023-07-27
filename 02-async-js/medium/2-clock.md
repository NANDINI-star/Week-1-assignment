Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function counterr() {
  var counter = new Date();
  let hours = counter.getHours();
  let mins = counter.getMinutes();
  let secs = counter.getSeconds();

  
  let ampm = (hours >= 12) ? "PM" : "AM";
  hours = hours%12;

  let ans = `${addLeadingzeros(hours)}:${addLeadingzeros(mins)}:${addLeadingzeros(secs)} ${ampm}`;
  console.log()
  console.clear();
  console.log(ans);

}

function addLeadingzeros(val){
  return (val<10) ? `0${val}` : val;
}
  setInterval(counterr, 1000);



console.log(counterr());