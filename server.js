process.env.NODE_ENV = process.env.NODE_ENV || 'development'; 

var express = require('./config/express'); 
var app = express(); 

app.listen(3000); 

module.exports = app; 

console.log('Server running at http://localhost:3000/');


/*old code from earlier in the book*/
/*
var express = require('express');
var app = express();

app.use('/', function(req, res)
        {
     res.send('hellow world');
});
app.listen(3000);
console.log('server running at 3000');

module.exports = app;
*/