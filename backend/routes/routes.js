import express from "express";
import { signupUser, loginUser } from "../controller/user_controller.js";
// import { uploadImage } from "../controller/image_controller.js";
// import upload from "../utils/upload.js";
import { createPost, getAllPosts } from "../controller/post-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js"




const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

// router.post('/file/upload', upload.single('file'), uploadImage);

router.post('/create', authenticateToken, createPost)
router.get('/posts', authenticateToken, getAllPosts)


export default router;
