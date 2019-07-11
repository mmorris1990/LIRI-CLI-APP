# LIRI CLI 

**A Command Line Node App mimicking Apple's SIRI, simplified**

## There are four items the user can search for, and the app will retrieve results through a variety of API calls.

#1. concert-this "artist name":
This feature will take an artist or band name and reach out to an API called BandsinTown to show the user upcoming show locations, dates, and venue names for that artist or group.

#2. spotify-this-song "song name"
This feature will take a song name and retrieve information including artist names, album names, and a link to the song on Spotify through Spotify's Node API.

#3. movie-this "movie name"
This feature will take in the name of a film and through the OMDB API show the user quite a bit of information regarding that movie. 

#4. do-what-it-says
This final feature will do some file system magic to retrieve information about a surprise song, then run it through the Spotify Node API and show it to the user.

**Technologies used in this app**
- Node.js
- Node-Spotify-API
- Axios module
- BandsinTown API
- OMDB API
- Moment module
- DotEnv module
- fs module




