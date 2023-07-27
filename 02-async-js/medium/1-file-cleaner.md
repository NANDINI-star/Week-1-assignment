## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');

let data_f = '';
fs.readFile("file.txt", "utf-8", (err,data) => {
  if(err) {
    console.error("error");
  } else {
    data_f = data.replace(/\s+/g, ' ');

    console.log(data_f);
    fs.writeFile("file.txt", data_f, (ERR) => {
      if(ERR) {
        console.log("error");
      }
      else {
        console.log("written");
      }
    })
  }
})
