import { Router } from "express";
import authRouter from "./authRouter";
import tweetRouter from "./tweetRouter";

const router = Router();

router.use("/tweets", tweetRouter);
router.use("/", authRouter);

export default router;