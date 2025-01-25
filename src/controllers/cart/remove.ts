import {Request, Response} from 'express';
import { db } from '../../lib/prisma';

export const remove = async(req: Request, res: Response) =>{
   
    const {id} = req.body;

    try {

        await db.cart.delete({
            where:{
                id
            }
        });
        res.send({status: true, message: "deleted successfully"})
    }catch{
        res.send({status: false, message: "sometimes things go wrong"})
    }

    
}