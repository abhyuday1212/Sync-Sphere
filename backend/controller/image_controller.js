import mongoose from "mongoose";
import Grid from 'gridfs-stream';

import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT



let gfs, gridfsBucket;

const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

const url = `http://localhost:${PORT}`;


export const uploadImage = async (request, response) => {
    try {
        if (!request.file)
            return response.status(400).json({ error: "File not found in the request" });

        const imageUrl = `${url}/file/${request.file.filename}`;

        response.status(200).json({ success: true, imageUrl });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
};

export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });

        if (!file)
            return response.status(404).json({ error: "File not found" });

        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
};