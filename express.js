var mysql = require('mysql');

var connection = mysql.createConnection({ 
    host :'localhost', //db ip address 
    port : 3306, //db port number 
    user : 'happy', //db id 
    password : 'happy', //db password 
    database:'myeonguni' //db schema name });
``

    connection.connect(function(err) { if (err) 
        { console.error('mysql connection error'); 
        console.error(err); th``row err; }
    else{ console.log("연결에 성공하였습니다."); } });
