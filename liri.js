// read and set any environment variables with the dotenv package
require("dotenv").config();

// import the keys.js file and store it in a variable
var keys = require("./keys.js");

// access the axios module
var axios = require("axios");

// access the moment.js module
var moment = require("moment");

// access the spotify api module
var Spotify = require("node-spotify-api");

// access the keys information
var spotify = new Spotify(keys.spotify);

// access the fs module
var fs = require("fs");

// take in the CLI input 
var input = process.argv[2];
var search = process.argv[3];

// store both inputs for later use
inputSearch(input, search);

// empty variable to output from the switch
var command;

// start function based on command
function inputSearch(input, search) {
    switch (input) {
        case "concert-this":
            command = input;
            bandsInTown(search);
            break;

        case "spotify-this-song":
            command = input;
            songSearch(search);
            break;

        case "movie-this":
            command = input;
            movieSearch(search);
            break;

        case "do-what-it-says":
            command = input;
            randomSearch(search);
            break;

        default:
            command = "not a recognized command";
    }
};

// prints the command
console.log(command + " success!");

// FUNCTIONS

// BandsinTown Event Search
function bandsInTown(search) {
    // Use Axios to get BandsinTown API Call
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(
        function (response) {
            for (i = 0; i < response.data.length; i++) {
                console.log("Event #" + [i + 1] + "\nVenue Name: " + response.data[i].venue.name + "\nCity: " + response.data[i].venue.city + "\nDate: " + moment(response.data[i].datetime).format("L") + "\n");
            };
        }
    )
        .catch(function (error) {
            console.log(error);
        });
};

// Spotify Song Search
function songSearch(search) {
    // Input "The Sign" if input is null
    if (search === undefined) {
        search = "The Sign"; //default Song
    }
    // Search the Spotify Node API
    spotify.search(
        {
            type: "track",
            query: search
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log("Artist(s): " + songs[i].artists[0].name + "\nSong Name: " + songs[i].name + "\nPreview Link: " + songs[i].preview_url + "\n\nAlbum: " + songs[i].album.name);
            }
        }
    );
};

// OMDB Movie Search
function movieSearch(search) {
    // Input "Mr. Nobody" if input is null
    if (search === undefined) {
        search = "Mr. Nobody"
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/ \nIt's on Netflix!")
    };
    // Use Axios to get OMDB API Call
    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
        function (response) {
            console.log("Title: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry of Production: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\n\nActors: " + response.data.Actors);

        }
    )
        .catch(function (error) {
            console.log(error);
        }
        );
};

 // fs file search
function randomSearch() {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArr = data.split(',');
        inputSearch(dataArr[0], dataArr[1]);
    });
};

