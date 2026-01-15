import { License } from "../database/entitites/license.entity";
import { Users } from "../database/entitites/user.entity";
import { IPicture } from "../interface/user.interface";


class UserRepository {
    
    public async getUserData<T>(key: string, value: T) {
    return await Users.findOne({  
      where: {
        [`${key}`]: value,
      },
    });
  }
    public async  savePicture(payload:Required<IPicture>){
    const saveData= await License.create({
      ...(payload as unknown as IPicture as any)
    })
    return saveData.save()

}

}


export default UserRepository