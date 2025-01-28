import {Request, Response} from "express";
import { db } from "../../lib/prisma";


export const update = async(req: Request, res: Response) =>{

const {name, id} = req.body;

try{

    await db.user.updateMany({
        data:{
            name
        }, where:{
            id
        }
    });
        res.send({status:true, message:"user updated successfully"});

}catch{
    res.send({status:false, message:"user not updated"});

}
}