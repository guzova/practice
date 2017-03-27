var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.send("import.html");
});
app.listen(7000, function() {
    console.log('Example app listening on port 7000!')
});