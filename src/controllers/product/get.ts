import { Request ,Response} from "express"
import { db } from "../../lib/prisma";

export const get = async (req: Request,res: Response  ) =>{
    const {id} = req.body;

    try{
       const items = await db.products.findMany({
        where:{
            id: id
        }
       });
        res.send(items);    

    }catch{
        res.send({status: false, message:"Sometimes erros happen in your life, fix it!"})

    }

}