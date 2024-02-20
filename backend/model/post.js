import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: false
    },
    csrfile: {
        type: String,
        required: false
    },
    csrnumber: {
        type: String,
        required: false
    },
    summary: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    usertype: {
        type: String,
        required: false
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
    yturl: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true
    },
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