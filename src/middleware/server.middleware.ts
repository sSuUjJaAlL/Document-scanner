import { Application } from "express";
import express from "express";
import corsconfig from "../config/cors.config";
import cors,{ CorsOptions } from "cors";
async function serverMiddleware(app:Application){
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(cors(corsconfig as CorsOptions))

}

export default serverMiddleware
