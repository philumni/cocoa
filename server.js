const http = require("http");
const host = 'localhost';
const port = 3000;
const requestListener = function (req, res) {};
const server = http.createServer(requestListener);
console.log("server starting.");
server.listen(port, host, () => { console.log(`Server is running on http://${host}:${port}`); }); 

