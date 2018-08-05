
require("dotenv").config();

var Twitter = require("twitter");
// var spotify = require('spotify');
var commandType = process.argv[2];

var commandString = "";
for(var i = 3; i < process.argv.length; i++){
  commandString += process.argv[i] + " ";
}
commandString = commandString.trim();

// Twitter =======================================================================

var keys = require("./keys");
console.log(keys);

var getMyTweets = function (){
    
    var twitterClient = new Twitter(keys.twitter)
    var params = {
        screen_name: "Ponyboy64091244"
    }
    twitterClient.get("statuses/user_timeline", params, function(error, tweets,response){
        if(!error){
            var newInfo = tweets.map(tweet => {
                return {
                    date: tweet.created_at,
                    tweet: tweet.text
                }
            })
            newInfo.forEach(info => {
                console.log('=======================')
                console.log('Date:', info.date)
                console.log('Tweet:', info.tweet)
                console.log('======================')
            })
        }
        if(error){
            console.log('ERRROR!==>', error)
        }

    })
};

getMyTweets()

// Spotify =======================================================================

// function callSpotify(userInput){
  
//     var songName;
//     if(userInput == ""){
//       songName = "The Sign Ace of Base"; 
//     }
//     else{
//       songName = userInput;
//     }

//     spotify.search({ type: 'track', query: songName }, function(err, data) {
  
//       if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//       }
//       else{
  
//         var displaySpotify = "";
  
//         var displaySong = 'Track Name: ' + data.tracks.items[0].name;
//         displaySpotify += displaySong + '\n';
  
//         var artists = "";
//         for(var i = 0; i < data.tracks.items[0].artists.length; i++){
//           artists += data.tracks.items[0].artists[i].name + ", ";
//         }
//         artists = artists.substring(0,artists.length - 2); 
//         var displayArtists = 'Artist Name(s): ' + artists;
//         displaySpotify += displayArtists + '\n';
  
  
//         // Album
//         var displayAlbum = 'Album Name: ' + data.tracks.items[0].album.name;
//         displaySpotify += displayAlbum + '\n';
  
  
//         // Preview
//         var displayURL = 'Preview Song URL: ' + data.tracks.items[0].preview_url;
//         displaySpotify += displayURL + '\n';
  
//           console.log(displaySpotify);
//       }
  
//     });
  
//   }

// // Commands =======================================================================

// switch(commandType){

//     case 'my-tweets':
//       callTwitter();
//       break;
  
//     case 'spotify-this-song':
//       callSpotify(commandString);
//       break;
  
//     //Invalid Entry
//     default:
  
//       var userPrompt = 'Invalid LIRI command type...' + '\n' + 'Use: "my-tweets", "spotify-this-song"';
      
//       console.log(userPrompt); 
//   }