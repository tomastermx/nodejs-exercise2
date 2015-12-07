var express = require('express');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var path = require('path');


var app =express();





app.engine('html',cons.swig);
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get('/',function(req,res) {

res.render('fruitPicker', {'fruits':['apple','orange','banana','grapes']});

});

app.post('/favorite_fruit', function(req,res,next){

var favorite = req.body.fruit;

if (typeof favorite == 'undefined' ){
next(Error('Please choose a fruit'));
}
else {

res.send( "Your favorite fruit is   "  +  favorite );
}

});

app.use(function(err,req,res,next){

console.error(err.message);
console.error(err.stack);
res.render('error', {
        message: err.message,
        error: {}
});

});



app.listen(3000);
