
import {Request, Response} from "express";
import { db } from "../lib/prisma";

export const signup = async (req: Request, res: Response) =>
{
    const {email,password,name} = await req.body;
    
    try{

        const user = await db.user.createMany({
            data:{
                email,
                password,
                name
            }
        
        })
       res.send({status:true, message:"user created successfully"})

    }catch{
        res.send({status:false, message:"user not created"})

    }
};