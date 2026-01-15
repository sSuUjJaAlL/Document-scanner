
import { DataSource,DataSourceOptions } from "typeorm"
import { databaseconfig } from "../config/database.config"
import postlogger from "../libs/logger.libs"
import { INITIAL_DELAY_MS, MAX_RETRIES } from "../Constants/module-constants"
import { TreeRepositoryUtils } from "typeorm/browser"
import { getenvvar } from "../utils/env.utils"


class SingletonDatabaseConnection{
    public static async connectsql(retry=0):Promise<any>{
        let dbstatus=true
        try{
            const dbcsource= new DataSource(
                databaseconfig() as any
            )
            await dbcsource.initialize()
            postlogger.info('COnnected to Database')
            return dbcsource
        }catch(err){
            postlogger.error(`Error connecting to database`,err)
        if(retry<MAX_RETRIES){
            const delay= INITIAL_DELAY_MS*2** retry;
            postlogger.error(`retrying (${retry+1})/${MAX_RETRIES} in ${delay}`)
            await new Promise((resolve)=>setTimeout(resolve,delay))
            return this.connectsql(retry+1);
        }
         dbstatus = false;
      postlogger.error(
        'Maximum Database Connection Retries reached. Exiting process.',
        err,
      );
      const errorMessage = `Maximum Database Connection Retries reached. Exiting process.`;
        }
        finally{
            return dbstatus
        }

    }  
}

export default  SingletonDatabaseConnection