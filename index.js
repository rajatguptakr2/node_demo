// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var bodyParser = require('body-parser');


var app = express();


var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');


app.use(bodyParser.urlencoded({extended:true}));

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});



app.use(bodyParser.json());



/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.listen(8012);