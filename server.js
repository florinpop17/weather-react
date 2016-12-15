var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static('public'))

app.get('/', function (req, res) {
   res.send("Hello World!"); 
});

app.listen(PORT, function(){
    console.log(`Listen on port ${PORT}...`);
});