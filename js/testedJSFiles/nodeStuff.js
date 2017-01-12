//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// process.argv will print out any command line arguments.
console.log(process.argv);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Takes in all of the command line arguments
var inputString = process.argv;

// Loads 3 arguments
var arg1 = inputString[2];
var arg2 = inputString[3];
var arg3 = inputString[4];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//run.js -uses ess.js below

// Using the require keyword lets us access all of the exports
// in our ess.js file
var stuffINeed = require("./ess.js");

// This will print everything in exports.
console.log("--------------------------");
console.log("ALL THE STUFF I NEED");
console.log(stuffINeed);
console.log("--------------------------");

// These will print correctly because we imported them
console.log("Essentials");
console.log(stuffINeed.essentials);
console.log("--------------------------");
console.log("Nice to Haves");
console.log(stuffINeed.nicetohaves);

// This won't print anything because it wasn't exported in ess.js
console.log("--------------------------");
console.log("Nonessentials");
console.log(stuffINeed.nonessentials);

//ess.js

// Exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.
exports.essentials = {
  drink: "water",
  eat: "snickers",
  fun: "phone",
  friend: "facebook"
};

exports.nicetohaves = {
  tools: ["can opener", "flashlight", "matches"],
  safety: ["first aid kit", "gloves"]
};

var nonessentials = {
  cookware: "wafflemaker"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//append, read, and write to/from files

//APPEND

// As always, we grab the fs package to handle read/write
var fs = require("fs");

// We then store the textfile filename given to us from the command line
var textFile = process.argv[2];

// We then append the contents "Hello Kitty" into the file
// If the file didn't exist then it gets created on the fly.
fs.appendFile(textFile, "Hello Kitty", function(err) {

  // If an error was experienced we say it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});

//READ

// fs is an NPM package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("movies.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});

//WRITE

// NPM Package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("movies.txt", "Inception, Die Hard", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("movies.txt was updated!");

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REQUEST

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////