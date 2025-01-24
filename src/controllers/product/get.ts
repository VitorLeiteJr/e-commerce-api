import {Request, Response} from "express"
import { db } from "../../lib/prisma";

export const get = async (req: Request, res: Response  ) =>{

    try{
       const all = await db.products.findMany();
        res.send(all);    

    }catch{
        res.send({status: false, message:"Sometimes erros happen in your life, fix it!"})

    }

}