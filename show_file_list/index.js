const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "file_folder_test1");
console.log(dirpath);

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirpath+"/data"+i+".txt", "hello this is rachit gupta");
// }

fs.readdir(dirpath, (err, files) => {
  files.forEach((item) => {
    console.warn(item);
  });
});
