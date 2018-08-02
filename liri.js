require("dotenv").config();

var keys = require("./keys");
console.log(keys);

var Twitter = require("twitter");

var getMyTweets = function (){
    
    var twitterClient = new Twitter(keys.twitter)
    var params = {
        screen_name: "cnn"
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



