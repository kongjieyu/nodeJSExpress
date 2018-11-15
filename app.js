//'express' is the module name inside the node_modules file, this line of code help us access to that module, get all the functionality express have
var express = require('express');

//fire the express function, variable app are able to access to the methods of express
var app = express()

//set ejs as view engine
//when we request some views or template, it will look for the view folder, so we need to creat a view folder.
app.set('view engine', 'ejs');

//use sendFile to allocate the html path
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

//use sendFile to allocate the html path
app.get('/contact', function(req, res){
     res.sendFile(__dirname + '/contact.html')
});

app.get('/profile/:name', function(req, res){
    var data = {age: 26, job: 'designer', hobbies: ['eating', 'fighting', 'fishing','Dancing']};
    res.render('profile', {person: req.params.name, data: data});
});

//listen to the port
app.listen(3000);

//HTTP Methods 
// -Get - app.get('route',fn) fn means function
// -Post - app.post('route',fn)
// -Delete -app.delete('route',fn)
// -Put
// (type of request)

