import { NextFunction, Request, Response } from "express";
import { uploadfileService, uploadfileServiceAndAnalyze } from "../services/user.services";
import { sendErrorResponse, sendSuccessResponse } from "../helper/api.helper";
import postlogger from "../libs/logger.libs";

async function postController(
    req:Request,
    res:Response,
    next:NextFunction
){
    try{
        const filepath= req.file?.path
    const apiresponse= await uploadfileService(filepath as string)
    const{ data ,message }= apiresponse
    sendSuccessResponse(res,data,message)
    }
    catch(err){
        postlogger.error(`Error while posting image`)
    }
    

}
async function postControllerOfImage(
    req:Request,
    res:Response,
    next:NextFunction
){
    try{
        const filepath= req.file?.path
    const apiresponse= await uploadfileServiceAndAnalyze(filepath as string)
    const{ data ,message }= apiresponse
    sendSuccessResponse(res,data,message)
    }
    catch(err){
        postlogger.error(`Error while posting image`)
    }
    
}
export {
    postController,
    postControllerOfImage
}