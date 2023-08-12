import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"

import { songRouter } from "./routes/songs";
import { creatorRouter } from "./routes/creator";
import { challengeRouter } from "./routes/challenge";

dotenv.config()

const app: Express = express();
const port = process.env.PORT

app.use('/song', songRouter)
.use('/creator', creatorRouter)
.use('/challenge', challengeRouter)

app.listen(port, () => {
    console.log(`[Server] Listening on PORT: ${port}`)
})