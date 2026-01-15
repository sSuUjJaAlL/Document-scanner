import { Request, Response, Router } from "express";

const healthrouter =Router()

healthrouter.get('/haelth',(req:Request,res:Response)=>{
    res.status(201).json({
        msg:'API is working'
    })
})
export default healthrouter