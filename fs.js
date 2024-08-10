const fs = require("fs");

fs.writeFile("hello.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("hello.txt has been saved!");
});

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});