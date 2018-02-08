# movie_query

movie_query is project for running a web API that enables users to query movie ratings by movie ids from movielens data.

Movie ratings are sent as JSON.

### Setup

git clone https://github.com/alpalp1977/movie_query.git

Download movielens dataset, which has 26 million movie ratings (https://grouplens.org/datasets/movielens).

Extract ratings.csv file into project folder.

Node.js and npm have to be installed.

### Dependencies

For installing project dependencies
	
	npm install

##### Express Framework
Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
	
##### fast-csv
A library that provides CSV parsing and formatting.

##### sqlite3 
Asynchronous, non-blocking SQLite3 bindings for Node.js.

### Running the server
To run the main server application:
	
	node main.js

If the database file doesn't exist, the application will read ratings.csv file and create the database.

### Usage & API
Following queries can be sent to server through web browser or cURL:

	/localhost:3000/movieId

example: /localhost:3000/25

The server will return matching movie ratings as JSON data.
