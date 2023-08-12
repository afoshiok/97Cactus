import { Request, Response, Router } from "express";
import mongoose from "mongoose";
import { SongModel } from "../models";

export const songRouter = Router()

songRouter.get('/', (req:Request, res:Response) => {
    res.send("Test: Song Route");
})