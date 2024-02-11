// pdf_controller.js
import pdfdetails from "../model/pdfDetails.js";
import CsrViewer from "../model/CsrViewerSchema.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Post from "../model/post.js"

dotenv.config();

const PORT = process.env.PORT;

const url = `http://localhost:${PORT}`;

const PdfSchema = mongoose.model("CsrDetails")

export const uploadPdf = async (req, res) => {
    console.log(req.file);
    const fileName = req.file.filename;
    //    http://localhost:8000/uploads/1706994854155-csrpdf-Abhyuday.pdf
    try {
        await PdfSchema.create({ csrfile: fileName });

        const pdfUrl = `${url}/uploads/${fileName}`;

        return res.status(200).json({ status: "ok", fileName: fileName, pdfUrl });
    } catch (error) {
        return res.status(400).json({ status: error });
    }
};

export const getPdfDetails = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        return res.status(200).json(post.csrfile);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
};


export const csrFileViewers = async (req, res) => {
    try {
        const newCsrViewer = await new CsrViewer(req.body)
        newCsrViewer.save();

        return res.status(200).json({ isSuccess: true, message: 'Email saved successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ isSuccess: false, message: 'Error saving email to database' });
    }
}

