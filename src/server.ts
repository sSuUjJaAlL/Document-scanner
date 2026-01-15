import express, { Request, Response } from "express";
import postlogger from "./libs/logger.libs";
import { getenvvar } from "./utils/env.utils";
import SingletonDatabaseConnection from "./database/connect";
import serverRouter from "./routers/server.routers";
import serverMiddleware from "./middleware/server.middleware";
async function startExpress() {
    
    try {
        const app = express();
        await serverMiddleware(app)
        await serverRouter(app)
        const status = await SingletonDatabaseConnection.connectsql();

        if (!status) {
            throw new Error("Database not connected");
        }

        app.listen(Number(getenvvar("PORT")), () => {
            postlogger.info(`App is working on ${getenvvar("PORT")} port}`);
        });

    } catch (err) {
        postlogger.error("Startup failed. DB not connected", err);
        process.exit(1); 
    }
}


export default startExpress