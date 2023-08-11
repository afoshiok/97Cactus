import { Schema, Types } from "mongoose";
import crypto from 'crypto'

interface Creator {
    _id: Types.ObjectId;
    name: string;
}

interface Challenge {
    _id: Types.ObjectId;
    startDate: Date;
    endDate: Date;

}

interface SubmittedSong {
    _id: Types.ObjectId;
    name: string;
    songLink?: string;
    creator: Types.ObjectId;
    dateSubmitted?: Date;
    artistSampled: string;
    sampledAlbum: string;
    albumYear: number;
    sampledSong: string;
}

const SongSchema = new Schema<SubmittedSong>({
    _id: { type: Schema.Types.ObjectId, required: true, default: crypto.randomUUID() },
    name: { type: String, required: true },
    songLink: { type: String },
    creator: { type: Schema.Types.ObjectId, required: true },
    dateSubmitted: { type: Date },
    artistSampled: { type: String, required: true },
    sampledAlbum: { type: String, required: true },
    albumYear: { type: Number, required: true },
    sampledSong: { type: String, required: true }
})