//'express' is the module name inside the node_modules file, this line of code help us access to that module, get all the functionality express have
var express = require('express');

//use body-parser as the middleware to handle post.
var bodyParser = require('body-parser');

//fire the express function, variable app are able to access to the methods of express
var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser, middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//set ejs as view engine
//when we request some views or template, it will look for the view folder, so we need to creat a view folder.
app.set('view engine', 'ejs');

//middleware, whenever the link include assets, this middle is gonna fire.
app.use('/assets', express.static('assets'));

//use render
app.get('/', function(req, res){
    res.render('index');
});

//use render
app.get('/contact', function(req, res){
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

//handle the post request here, the data we summit in contact.ejs is gonna pass through the middelware(urlencodedParser)
//with the help of urlencodedParser, we can access the data on the request object by using request.body
app.post('/contact-success', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
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

