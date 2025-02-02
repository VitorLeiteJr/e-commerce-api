import {Request, Response} from "express"
import jwt from "jsonwebtoken"


export const logIn = async (req: Request, res: Response)=>{
    
    const {email, password} = req.body;

   try{const token = jwt.sign({data:{email, password}},"secretkey", {expiresIn: '1H'});

    res.send({token});
    }catch{
        res.send({message:"sometimes go wrong" })
    }
};