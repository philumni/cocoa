var express = require('express');
var path = require('path');
var app = express();
var port =8080;
var host="first-philumni.b4a.run";
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendfile('public/first.html');
});

module.exports = app;
console.log("ready");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
