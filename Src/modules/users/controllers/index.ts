import { Request, Response, NextFunction } from "express";
import { UserService } from "../services";

export class UserController {
  static async createUser(
    req: Request,res:Response,next:NextFunction): Promise<any> {
        try {
            const result = await UserService.createUser(req.body)
            return res.status(result.code).json(result)
        } catch (error) {
            next(error)
        }
    }
}
