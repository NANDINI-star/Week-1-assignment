## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const write = "hellloooow";


fs.writeFile("file.txt", write, (err) => {
  if(err) {
    console.error("error");
  } else {
    console.log("written");
  }
})