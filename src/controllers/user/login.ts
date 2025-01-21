import {Request, Response} from "express"
import jwt from "jsonwebtoken"
import { db } from "../../lib/prisma";


export const logIn = async (req: Request, res: Response)=>{
    
    const {email, password} = req.body;

   const token = jwt.sign({data:{email, password}},"secretkey", {expiresIn: '1H'});

    res.send({token});
    
};