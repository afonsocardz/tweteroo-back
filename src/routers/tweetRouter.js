import { Router } from "express";
import {
  getTweets,
  getUserTweets,
  postTweet,
} from "../controllers/tweetsController";

const tweetRouter = Router();

tweetRouter
  .post("/", postTweet)
  .get("/:username", getUserTweets)
  .get("/", getTweets);

export default tweetRouter;
