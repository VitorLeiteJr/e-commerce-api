import {Response, Request} from "express";
import { db } from "../../lib/prisma";


export const get = async(req: Request, res: Response)=>{

    const {id} = req.body;

    try{
        const users = await db.user.findMany({
            where:{ 
                id: id
            }
        });
        res.send(users);
    }catch{

res.send({status:false, message:"someone makes a mistake"})

    }
}