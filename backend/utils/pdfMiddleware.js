// pdf.js
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const uploadFolder = join(dirname(currentFilePath), '../uploads');

// Create the destination folder if it doesn't exist
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, { recursive: true });
}

const pdfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + '-csrpdf-' + file.originalname);
    },
});

const pdfMiddleware = multer({ storage: pdfStorage });

export default pdfMiddleware;
