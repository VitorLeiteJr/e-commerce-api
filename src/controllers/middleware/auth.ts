import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export const auth = async(req: Request, res: Response, next: NextFunction)=>{

    const {token} = req.body;
    
    try{

        jwt.verify(token, 'secretkey');
        next();

    }catch{
        res.send({status: false, message: "you do not have authorization"})
    } 

} 