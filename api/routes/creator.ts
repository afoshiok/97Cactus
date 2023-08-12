import { Request, Response, Router } from "express";
import mongoose from "mongoose";
import { CreatorModel } from "../models";

export const creatorRouter = Router()

creatorRouter.get('/', (req:Request, res:Response) => {
    res.send("Test: Creator Route");
})