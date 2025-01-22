
import {Request, Response} from "express";
import { db } from "../../lib/prisma";
import bcrypt from "bcrypt";



const saltRounds = 10;

export const signup = async (req: Request, res: Response) =>
{
    const {email,password,name} = await req.body;
    
    try{

        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);


            await db.user.createMany({
            data:{
                email,
                password: hashPassword,
                name
            }
        
        })
       res.send({status:true, message:"user created successfully"})

    }catch{
        res.send({status:false, message:"user not created"})

    }
};