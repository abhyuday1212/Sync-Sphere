import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema(
    {
        csrfile: String,
        name: String,
    },
    { collection: "CsrDetails" }
);

const pdfdetails = mongoose.model("CsrDetails", PdfDetailsSchema);

export default pdfdetails;
