var mysql =  require('mysql');

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'test'
       
});

connection.connect(function(err){
    if(!err){
        console.log('Connected Successfully');
    }else{
        
        console.log('Not Connected');
    }
    
});


module.exports = connection;
