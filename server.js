var express = require('express');
var path = require('path');
var app = express();
var port =8000;
var host="localhost";
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendfile('public/first.html');
});

module.exports = app;
console.log("ready");

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})
