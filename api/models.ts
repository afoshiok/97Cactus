import { Schema, Types, model } from "mongoose";
import crypto from 'crypto'

interface Creator {
    _id: Types.ObjectId;
    name: string;
}

interface Challenge {
    _id: Types.ObjectId;
    startDate: Date;
    endDate: Date; //Will be used for countdown timer.

}

interface SubmittedSong {
    _id: Types.ObjectId;
    challengeId: Types.ObjectId;
    name: string;
    songLink?: string; //Most likely a Sound Cloud link
    creator: Types.ObjectId;
    dateSubmitted?: Date;
    artistSampled: string;
    sampledAlbum: string;
    albumYear: number;
    sampledSong: string;
}

const SongSchema = new Schema<SubmittedSong>({
    _id: { type: Schema.Types.ObjectId, required: true, default: crypto.randomUUID() },
    challengeId: { type: Schema.Types.ObjectId, required: true}, //add ref to challenge documents
    name: { type: String, required: true },
    songLink: { type: String },
    creator: { type: Schema.Types.ObjectId, required: true }, //add ref to creator documents
    dateSubmitted: { type: Date },
    artistSampled: { type: String, required: true },
    sampledAlbum: { type: String, required: true },
    albumYear: { type: Number, required: true },
    sampledSong: { type: String, required: true }
})

const CreatorSchema = new Schema<Creator>({
    _id: { type: Schema.Types.ObjectId, required: true, default: crypto.randomUUID() },
    name: { type: String, required: true }
})

const ChallengeSchema = new Schema<Challenge>({
    _id: { type: Schema.Types.ObjectId, required: true, default: crypto.randomUUID() },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
})

export const SongModel = model<SubmittedSong>("SubmittedSong", SongSchema)
export const CreatorModel = model<Creator>("Creator", CreatorSchema)
export const ChallengeModel = model<Challenge>("Challenge", ChallengeSchema)