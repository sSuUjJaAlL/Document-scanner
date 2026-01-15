import { DataSourceOptions } from "typeorm"
import { getenvvar } from "../utils/env.utils"
import { Users } from "../database/entitites/user.entity"
import { License } from "../database/entitites/license.entity"

export const databaseconfig=():DataSourceOptions=>{
    return{
        type:'mysql',
        port: Number(getenvvar('DB_PORT')),
        host:getenvvar('DB_HOST'),
        username:getenvvar('DB_USERNAME'),
        password:getenvvar('DB_PASSWORD'),
        database:getenvvar('DB_NAME'),
        synchronize:true,
        
        entities:[License]

    }

}
