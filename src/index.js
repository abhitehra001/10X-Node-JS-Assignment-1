const fs = require('fs/promises')
const http = require("http");

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
    fs.writeFile(`${fileName}.txt`, `${fileContent}`, (err)=>{
		console.log("hey")
        console.log("Error occured in myFileWriter:", err);
    })
}

// fs.writeFile('index.html','<h1>Hello world</h1>',(err,data)=>{ http.createServer((req,res)=>{ res.writeHead(200,{ 'Content-Type':'text/html' })
// fs.readFile('index.html',{encoding:"utf8"})})
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
    fs.readFile(`${fileName}.txt`, "utf8").then((resp)=>{console.log(resp)}).catch((err)=>{console.log("Error in read:",err)})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(`${fileName}.txt`, `${fileContent}`, (err) => {
		if(err){
			console.log("Error occured in myFileUpdater:", err);
		}
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(`${fileName}.txt`, (err) => {
		console.log("Error occured in myFileDeleter:", err);
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }