import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb+srv://admin:2ldbMbuJG7ZZRSoW@cluster0.fg3insw.mongodb.net/test`,
    options: {
        useNewUrlParser: true,
        dbName: 'test',
    },
    file: (request, file) => {
        console.log("inside 3rd argument passed");

        const match = ["image/png", "image/jpg", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            // Instead of directly returning a filename, throw an error
            throw new Error(`Invalid file type: ${file.mimetype}`);
        } else {
            return {
                bucketName: "photos",
                filename: `${Date.now()}-blog-${file.originalname}`,
            };
        }
    },
});

const upload = multer({ storage });

export default upload;
