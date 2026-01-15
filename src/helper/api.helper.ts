import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import postlogger from "../libs/logger.libs";

 async function sendSuccessResponse<T>(
  res: Response,
  data: T,
  message: string,
  statuscode: number = StatusCodes.ACCEPTED
) {
    postlogger.info(`Success response`)
  return res.status(statuscode).json({
    message,
    data,
    statuscode,
    error:false
  });
}
 async function sendErrorResponse(
  res: Response,
  errorPayload: Record<string, any>,
  message: string,
  statuscode:number
) {
    postlogger.info(`Success response`)
  return res.status(statuscode).json({
    message:errorPayload,
    statuscode:statuscode,
    error:true
  });
}
export{
    sendErrorResponse,
    sendSuccessResponse
}