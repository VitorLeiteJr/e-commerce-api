import {Request, Response} from "express";

export const newUser = async (req: Request, res: Response) =>
{
    res.send("new user route");
};