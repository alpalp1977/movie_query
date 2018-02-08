var sqlite3 = require('sqlite3').verbose();
// very slow to write into harddisk
// var db2 = new sqlite3.Database('movielist.db');
var db2 = new sqlite3.Database(':memory:');
var csv = require("fast-csv");
const fs = require('fs');
var express = require('express')
var app = express()

db2.serialize(function() {
	db2.run('DROP TABLE IF EXISTS ratings');
	db2.run('CREATE TABLE ratings(userId, movieId, rating, timestamp)');
});	

console.log("Movie Finder");

var stream = fs.createReadStream("ratings.csv");
var number = 0;

// read csv file into database 
csv
 .fromStream(stream, {headers : ["userId", "movieId", "rating", "timestamp"]})
 .on("data", function(data){
	number++;
	if (number %100000 === 0)
		console.log('number: ' + number + ' ' + (number * 100 / 26000000).toFixed(2) + '% completed' );
	db2.run('INSERT INTO ratings VALUES(' + data.userId + ', ' + data.movieId + ', ' + data.rating + ', ' + data.timestamp + ')', function(err) {
		if (err) {
			return console.log(err.message);
		}	
	});
 })
 .on("end", function(){ 
     console.log("done");
 });
 
app.get('/', function (req, res) {
  res.send('Movie Finder')
})

app.get('/movieid/:movieid', function (req, res) {
    if (req.query.order !== undefined) {
		console.log('Query: ' + req.query.order);
		// Doesn't work, 
		console.log('Date: ' + req.query.date);
		//var timestamp = new Date(req.query.date).getTime() / 1000;
		//console.log('timestamp: ' + timestamp);
	}
	// prepare JSON response data based on req.params.movieid
	db2.all('SELECT * from ratings WHERE movieId = ' + req.params.movieid, (err, rows) => {
		if (err) {
			throw err;
		}

		res.send(JSON.stringify(rows));
	});
})
 
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Movie Finder app listening at http://%s:%s", host, port)
})