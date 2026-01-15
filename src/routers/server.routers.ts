import { Application } from "express";
import postRouter from "./post.router";
import healthrouter from "./health.router";


async function serverRouter(app:Application){
    app.use('/api/v1',[postRouter,healthrouter])
}
export default serverRouter