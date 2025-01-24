import { Request, Response } from "express";
import { db } from "../../lib/prisma";



export const remove = async(req: Request, res: Response)=>{

    const {id} = req.body;

    
    try{
        await db.products.delete({
            where: {
                id
            }
        })  
        res.send({status: true, message: "product deleted successfully!"})
    }catch{
        res.send({status: false, message:"Sometimes erros happen in your life, fix it!"});
    }
    

    }

