var mysql = require('mysql')

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : ''
})

con.connect(function (err) {
    if(err){
        throw err
    }
    console.log("Connected!")
    con.query("CREATE DATABASE biodata", function (err, result) {
        if(err) throw err
        console.log("Database Created");
    })
    var sql = "CREATE TABLE customers (nama VARCHAR(255), address VARCHAR(255), avability VARCHAR(255), usia VARCHAR(255), lokasi VARCHAR(255), experiance VARCHAR(255), email VARCHAR(255), password VARCHAR(255) )";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
})