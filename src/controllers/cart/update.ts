import {Request, Response} from 'express';
import { db } from '../../lib/prisma';

export const update = async(req: Request, res: Response) => {

    const {id, quantity} = req.body;

    try{
        await db.cart.update({
            data:{
                quantity
            },
            where:{
                id
            }
        });
        res.send({status: true, message: "updated successfully"})
    }catch{
        res.send({status: false, message: "sometimes things go wrong"})
    }

}