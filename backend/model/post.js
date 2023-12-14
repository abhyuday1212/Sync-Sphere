import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    addressurl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // picture: {
    //     type: String,
    //     required: false
    // },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date
    }
});


const post = mongoose.model('post', PostSchema);

export default post;