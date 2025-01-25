import {Request, Response} from 'express';
import { db } from '../../lib/prisma';
import { fail } from 'assert';

export const get = async(req: Request, res: Response) =>{

const {userId} = req.body;

//get items from cart, required a the param userId
if(!userId){ 
    res.send({status: false, message: "user id is required"}); 
    return;
}
try{

       const items = await db.cart.findMany({
            where:{
             userId
            }
        });
        
        if(items.length === 0) {
            res.send({status: false, message: "no items found"});
            return;
        }
        
        res.send({status: true, items: items})

}catch{
res.send({status: false, message: "sometimes things go wrong"})
}

}