import {Request, Response} from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { db } from "../../lib/prisma";


export const logIn = async (req: Request, res: Response)=>{
    
    const {email, password} = req.body;
    
    
    try{
    
    const credentials = await db.user.findFirst({
        where:{
            email: email,
        }
    });


    const match =  await bcrypt.compare(password, credentials.password);

    if(!match) {
                        res.send({message: "credentials wrong"});
                        return;
                }

   const token = jwt.sign({data:{email, password}},"secretkey", {expiresIn: '1H'});

   res.send({token});
    }catch{
        res.send({message:"sometimes go wrong" });
    }
 };