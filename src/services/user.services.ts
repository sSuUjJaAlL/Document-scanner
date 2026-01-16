import tesseract from "../helper/tesseract.helper"
import modelResponseMapper from "../mappers/response.mapper"
import UserRepository from "../repository/user.repositry"
import givebase from "../utils/base64.utils"

async function uploadfileService(filepath:string){
    const file= await givebase(filepath)
    const userrepo = new UserRepository()

    const payloadfordb= {
        image:file as string
    }
    const savetodb = await userrepo.savePicture(payloadfordb)

       return{
        data:savetodb,
        message:'SAved'
    }
} 
async function uploadfileServiceAndAnalyze(filepath:string){
    const file= await givebase(filepath)

    const savetodb = await tesseract(filepath)
    const response = modelResponseMapper(savetodb)
       return{
        data:savetodb,
        message:'SAved'
    }
} 
export{
    uploadfileService,
    uploadfileServiceAndAnalyze
    
}