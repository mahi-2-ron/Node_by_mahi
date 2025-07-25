const fs = require('fs');
let content = "Hey i Am Mahesh Madiwalar 1St year student now i am learned how to read write and delete the content file  ";
fs.writeFileSync('node.txt',content,'utf8');
console.log("File content : ",data );

// --> deleting the file using node.js by writing the empty file
// const data =  fs.readFileSync('node.txt','utf8');


// fs stands for File System — it's a built-in Node.js module that lets you work with files and directories on your computer.