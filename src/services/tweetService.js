import TweetModel, { tweets } from "../models/tweetModel";

export default class TweetService {

  getUserTweets(username) {
    return tweets.filter((t) => t.username === username);
  }

  getAllTweets(page) {
    if (page && page < 1) {
      throw { status: 400, message: "Informe uma página válida!" };
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (tweets.length <= 10) {
      return reverseTweets();
    }

    return [...tweets].reverse().slice(start, end);
  }

  postTweet(username, tweet) {
    if (!username || !tweet) {
      throw { status: 400, message: "Todos os campos são obrigatórios!" };
    }

    const { avatar } = usuarios.find((user) => user.username === username);

    const tweet = new TweetModel({ username, tweet, avatar });

    this.tweetModel.setTweet(tweet);
  }

  reverseTweets() {
    return this.tweets.reverse();
  }
}
