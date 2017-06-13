// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
const os = require('os');
var app = express();
const dns = require('dns');  




dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});


var ig = require('instagram-node').instagram();

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources

console.log("os.freemem(): \n",os.networkInterfaces());  
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');
// configure instagram app with your access token
// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - our profile's images



app.get('/', function (req, res) {
    
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        
    res.render('pages/index', {message:medias});
        
    });

});





// configure instagram app with your access_token
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: '2900699242.1677ed0.4a856166f5454e5fa000877b1ea7f54a',
});



// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');
