// read and set any environment variables with the dotenv package
require("dotenv").config();

// import the keys.js file and store it in a variable
var keys = require("./keys.js");

// access keys information
// var spotify = new Spotify(keys.spotify);

// take in the CLI input 
var input = process.argv[2];

// empty variable to output from the switch
var command;

// start function based on command
switch (input) {
    case "concert-this":
        command = input;
        break;

    case "spotify-this-song":
        command = input;
        break;

    case "movie-this":
        command = input;
        break;

    case "do-what-it-says":
        command = input;
        break;

    default:
        command = "not a recognized command";
};

// prints the command
console.log(command + " success!");