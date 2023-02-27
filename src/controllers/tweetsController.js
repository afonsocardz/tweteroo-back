import { text } from "express";
import TweetService from "../services/tweetService";

export async function postTweet(req, res) {
  const { tweet, username } = req.body;

  const tweetService = new TweetService();

  tweetService.postTweet(username, tweet);

  res.status(201).send("OK, seu tweet foi criado");
}

export async function getUserTweets(req, res) {
  const { username } = req.params;

  const tweetService = new TweetService();

  const tweetsDoUsuario = tweetService.getUserTweets(username);

  res.status(200).send(tweetsDoUsuario);
}

export async function getTweets(req, res) {
  const { page } = req.query;

  const tweetService = new TweetService();
  try {
    const tweets = tweetService.getAllTweets(page);
    res.status(200).send(tweets);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}
