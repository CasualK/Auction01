var express = require('express');
var router = express.Router();

var mysql = require('mysql');

router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "auction"
    });
    connection.connect();
    connection.query('select * from book_table', function(err, rows, fields) {
        connection.end();
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {

            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;