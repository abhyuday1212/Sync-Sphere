// Import mongoose
import mongoose from "mongoose";

const csrViewerSchema = new mongoose.Schema({
    visitormail: {
        type: String,
    },
    username: {
        type: String,
    },
    projectId: {
        type: String,
    },
},
    { collection: "CsrViewers" }
);

const CsrViewer = mongoose.model('CsrViewer', csrViewerSchema);

export default CsrViewer;
