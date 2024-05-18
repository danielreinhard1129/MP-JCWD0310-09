import { getUserService } from "@/services/user/get-user.service";
import { NextFunction, Request, Response } from "express";

export class UserController {
    async getUserDataById(
        req: Request, 
        res: Response,
        next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const result = await getUserService(id);
            return res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }
};