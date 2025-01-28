import { Request, Response } from "express";
import { db } from "../../lib/prisma";


export const add = async (req: Request, res: Response) => {

    const {name, description, price, stock, priceId} = req.body;

    try{

        await db.products.createMany({
            data: {
                name,
                description,
                price,
                stock,
                priceId
            }
        })
        res.send({status: true, message: "product added successfully!"})
        }
        catch
        {
            res.send({status: false, message:"Sometimes erros happen in your life, fix it!"});
        }
} 