import {createWorker, ImageLike} from "tesseract.js"
import postlogger from "../libs/logger.libs"
async function tesseract(filepath: any){
    const worker = await createWorker('nep')
    try{
            const {data:{
                text
            }}=await worker.recognize(filepath)
            return text;
        }
    catch(err){
        postlogger.error(`Cannot extract text`)
    }finally{
        await worker.terminate()
    }
}
export default tesseract
