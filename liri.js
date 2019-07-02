// read and set any environment variables with the dotenv package
require("dotenv").config();

// import the keys.js file and store it in a variable
var keys = require("./keys.js");

// access the spotify api module
var Spotify = require('node-spotify-api');

// access the axios module
var axios = require("axios");

// access keys information
var spotify = new Spotify(keys.spotify);

// take in the CLI input 
var input = process.argv[2];
var search = process.argv[3];

// empty variable to output from the switch
var command;

// start function based on command
switch (input) {
    case "concert-this":
        command = input;
        bandsInTown();
        break;

    case "spotify-this-song":
        command = input;
        songSearch();
        break;

    case "movie-this":
        command = input;
        movieSearch();
        break;

    case "do-what-it-says":
        command = input;
        randomSearch();
        break;

    default:
        command = "not a recognized command";
};

// prints the command
console.log(command + " success!");

// FUNCTIONS

function bandsInTown() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(
        function(response) {
            console.log(response.data);
        }
    )};

function songSearch() {

};

function moveiSearch() {

};

function randomSearch() {

};