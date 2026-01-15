import { Router } from "express";
import upload from "../config/multer.config";
import { postController, postControllerOfImage } from "../controllers/post.controller";

const postRouter=Router()

postRouter.post('/post',
    upload.single('image'),
    postController        
)
postRouter.post('/analyze',
    upload.single('image'),
    postControllerOfImage
)

export default postRouter