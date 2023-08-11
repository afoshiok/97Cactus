import { Schema } from "mongoose";

interface Creator {
    id: string;
    name: string;
}

interface SubmittedSong {
    name: string;
    songLink: string;
    creator: string;
    dateSubmitted: Date;
    artistSampled: string;
    sampledAlbum: string;
    albumYear: number;
    sampledSong: string;
}

const SongSchema = new Schema<SubmittedSong>({
    name: { type: String, required: true },
    creator: { type: String, required: true }
    //finish schema 
})