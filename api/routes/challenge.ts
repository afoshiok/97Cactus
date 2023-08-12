import { Request, Response, Router } from "express";
import mongoose from "mongoose";
import { ChallengeModel } from "../models";

export const challengeRouter = Router()

challengeRouter.get('/', (req:Request, res:Response) => {
    res.send("Test: Challenge Route");
})