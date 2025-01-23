import {Request, Response} from "express"
import { db } from "../../lib/prisma";
export const update = async(req: Request, res: Response)=>{

    const {id, name, description, price, stock} = req.body;

  

    try{
        await db.products.updateMany({
            data:{
                name,
                description,
                price,
                stock
            },
            where:{
                id
            }
        })
        res.send({status: true, message: "product updated successfully!"})
    }catch{
        res.send({status: false, message:"Sometimes erros happen in your life, fix it!"});
    
    }
}