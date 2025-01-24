import {Request, Response} from 'express';
import { db } from '../../lib/prisma';


export const add = async (req: Request, res: Response) =>{

const {userId, productId, quantity} = req.body;

try{
    
    await db.cart.create({
        data:{
            userId,
            productId,
            quantity
        }
    }); 
    res.send({status: true, message: "added to cart successfully"});

}catch{

    res.send({status: false, message: "something is wrong"});

}

}