const fs = require("fs");

console.log(1);

fs.writeFile("my-new-file.txt", "Hello world", (error) => {
  console.log("The file has been written to.");
});

console.log(2);
