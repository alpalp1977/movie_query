# movie_query
Movie_Query
===========
Movie_Query is project for running a web API that enables users to query movie ratings by movielens movie ids.
Movie ratings are sent in a JSON file.
The API is also able to filter movie ratings by date.

Setup
=====
git clone https://github.com/alpalp1977/movie_query.git
Download movielens dataset, which has 26million movie ratings (https://grouplens.org/datasets/movielens).
Extract ratings.csv file into project folder.

Dependencies
============
For installing project dependencies
	npm install

Express Framework: Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
	
body-parser: This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.
	
line-by-line: is a NodeJS module that helps you reading large text files, line by line, without buffering the files into memory.

sqlite3: Asynchronous, non-blocking SQLite3 bindings for Node.js.

Running the server
==================
To run the main server:
	node main.js

If the database file doesn't exist, the server program will read ratings.csv file and create the database. This might take a while.

Usage & API
===========
Following queries can be sent to server:

/localhost:3000/movieId

or

/localhost:3000/movieId/filter?<date>

<date>: 
	* after?1.1.2017
	* before?1.1.2017
	* between?1.1.2017?1.1.2018
	
The server will return matching movie ratings in a JSON file.
