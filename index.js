const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "data.json");

// Sync (simple , blocks the thread)
const data =fs.readFile(filePath, "utf-8", (err, data)=>{
    if(err) throw err;

});
console.log("DATA : ", data)