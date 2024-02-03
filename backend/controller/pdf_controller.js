// pdf_controller.js
import pdfdetails from "../model/pdfDetails.js"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
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

        return res.status(200).json({ status: "ok", fileName: fileName ,pdfUrl});
    } catch (error) {
        return res.status(400).json({ status: error });
    }
};
