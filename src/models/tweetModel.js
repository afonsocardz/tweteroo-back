export const tweets = [];

export default class TweetModel {
  constructor({username, tweet, avatar}){
    this.username = username;
    this.tweet = tweet;
    this.avatar = avatar;
  }

  setTweet(tweet){
    tweets.push(tweet);
  }
}