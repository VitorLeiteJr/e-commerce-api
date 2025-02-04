import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export const auth = async(req: Request, res: Response, next: NextFunction)=>{

    const {token} = req.body;
    
    try{
        jwt.verify(token, 'secretkey');
            if(req.path === "/auth") res.status(200).send({message: "you have authorization"});
            next();

    }catch{
        res.status(401).send({message: "you do not have authorization"});
    } 

} 