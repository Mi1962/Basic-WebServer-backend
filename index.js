const http = require("http");
const hostName = "127.0.0.1";
const port= 3000;

const server = http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader("content", "text/plain");
    res.end("Hello Mi");
});
server.listen(port, hostName, () => {
   console.log("Server is listening to http://127.0.0.1:3000");
});
