var fs = require('fs');

if(process.argv.length != 4){
	throw new Error("Usage: node parse.js <input file> <n: Column of csv>\nThis program obtain column n of csv");
}

var inFile = process.argv[2];
var n = process.argv[3];

var readBuf = fs.readFileSync(inFile, "utf-8");

var lines = readBuf.split("\n");
var tempString = "";

for(var i = 0, j = lines.length; i < j; i++){
	tempString += "\"" + lines[i].split(",")[n] + "\",\n";
}

fs.writeFileSync("parseOutput.csv", tempString);