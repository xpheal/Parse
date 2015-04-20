var fs = require("fs");

var file = fs.readFileSync('./Default.JCF','utf8');

var buffer = file.split("\n");
var buffer2;
var temp;
var string;
var content;
var i = 0;
for(i = 0; i < buffer.length; i++){
	if(buffer[i].charAt(0) == "["){
		temp = buffer[i].substring(1,buffer[i].length-2);
	}
	else if(buffer[i].charAt(0) == ";"){}
	else if(buffer[i].length <= 1){}
	else{
		string = temp + "." + buffer[i];
		buffer2 = string.split("=");
		string = buffer2[0] + "," + buffer2[1];
		content = content + string;
	}
}
console.log(content);
fs.writeFileSync("./parse.csv",content,'utf8');

