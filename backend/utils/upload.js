// upload.js
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const mongoURI = process.env.DB_URI;

const imageStorage = new GridFsStorage({
    url: mongoURI,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const allowedMimeTypes = ["image/png", "image/jpg"];

        if (allowedMimeTypes.indexOf(file.mimetype) === -1) {
            throw new Error("Invalid file type");
        }
        return {
            bucketName: "fs",
            filename: `${Date.now()}-banner-${file.originalname}`
        };
    }
});

const upload = multer({ storage: imageStorage });

export default upload;
