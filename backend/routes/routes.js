import express from "express";
import { signupUser, loginUser, checkUsername } from "../controller/user_controller.js";

import upload from "../utils/upload.js";
import { uploadImage, getImage } from "../controller/image_controller.js";

import pdfMiddleware from "../utils/pdfMiddleware.js";
import { uploadPdf } from "../controller/pdf_controller.js";

import { createPost, getAllPosts, getPost } from "../controller/post-controller.js";

import { authenticateToken } from "../controller/jwt-controller.js";

import { sponsorDonate, individualDonate, getTotalDonation } from "../controller/donations-controller.js";

import { geminiController } from "../controller/gemini-controller.js";

import { getPdfDetails } from "../controller/pdf_controller.js"

import { csrFileViewers } from "../controller/pdf_controller.js"

import { checkCsrNumber } from "../controller/post-controller.js";

const router = express.Router();

router.post('/signup', signupUser);
router.post('/username', checkUsername);
router.post('/login', loginUser);

router.post('/file/upload', upload.single('file'), uploadImage);

router.post('/csr/pdfupload', pdfMiddleware.single('csrfile'), uploadPdf);
router.get('/pdfdetails/:id', getPdfDetails);
router.post("/csrviewer", authenticateToken, csrFileViewers);

router.get('/file/:filename', getImage);

router.post('/create', authenticateToken, createPost)
router.get('/posts', authenticateToken, getAllPosts)
router.get('/post/:id', authenticateToken, getPost)

// Don Aditya routes
router.post('/sponsordonate', sponsorDonate)
router.post('/individualdonate', individualDonate)
router.get('/gettotaldonation', getTotalDonation)

router.get('/checkCsrNumber', checkCsrNumber  )

// router.get('/success', successPage)

// gemini routes
router.post("/gemini", authenticateToken, geminiController);


export default router;
