import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

import { SongModel, CreatorModel, ChallengeModel } from "./models";

dotenv.config()

const app: Express = express();
const port = process.env.PORT

app.listen(port, () => {
    console.log(`[Server] Listening on PORT: ${port}`)
})