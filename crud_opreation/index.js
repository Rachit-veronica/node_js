const fs = require("fs");
const path = require("path");
const address = path.join(__dirname, "files");
const fileloc = `${address}/hello1.txt`;

// create files :-

// fs.writeFileSync(`${address}/hello1.txt`, "hello this is rachit gupta");

// read file data :-

// fs.readFile(fileloc, "utf8", (err, data) => {
//   console.log(data);
// });

// update data in file :-

// fs.appendFile(fileloc, "this is updated files plx chaeck it out",(err)=>{
//   if (!err) {
//     console.log("file updated")
//   }
// })

// file rename

// fs.rename(fileloc, `${address}/world.txt`, (err) => {
//   if (!err) {
//     console.log("file name updated");
//   }
// });

// delete file :-

// fs.unlinkSync(`${address}/world.txt`);
