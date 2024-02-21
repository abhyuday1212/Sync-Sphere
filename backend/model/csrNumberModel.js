import mongoose from 'mongoose';

const csrNumberSchema = mongoose.Schema({
    csrnumber: {
        type: String,
        required: true
    },
})

const csrnumbermodel = mongoose.model('csrnumbermodels', csrNumberSchema);

export default csrnumbermodel;