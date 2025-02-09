import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export const auth = async(req: Request, res: Response, next: NextFunction)=>{

    const {token} = req.body;
    
    try{
        jwt.verify(token, 'secretkey');
            if(req.path === "/auth") res.send({authorization: true, message: "you have authorization"});
            next();

    }catch{
        res.send({authorization: false, error: "you do not have authorization"});
    } 

} 