// Some npm packages we covered in class...
var fs = require("fs");
var http = require("http");
var url = require("url");
var mysql = require("mysql");



//"Final App" star wars app is below, with many basic commands...

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// If no matching route is found default to home
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        res.json(characters[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(characters);
  }
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});






//Two-level routing (these lines load apiRoutes.js and htmlRoutes.js, as opposed to writing it all in one server.js file)

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);





//API Routes...  The following code is dependent on a specific directory setup, FYI

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

app.get("/api/tables", function(req, res) {
	res.json(tableData);
});

app.get("/api/waitlist", function(req, res) {
	res.json(waitListData);
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

app.post("/api/tables", function(req, res) {
// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
// It will do this by sending out the value "true" have a table
if (tableData.length < 5) {
  tableData.push(req.body);
  res.json(true);
}
else {
  waitListData.push(req.body);
  res.json(false);
}
});

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

app.post("/api/clear", function() {
// Empty out the arrays of data
tableData = [];
waitListData = [];

console.log(tableData);
});
