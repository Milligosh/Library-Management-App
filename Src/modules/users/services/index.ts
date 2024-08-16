import bcrypt from 'bcrypt'
import db from '../../../config/database'
import { UserQueries } from '../queries'
import { ApiConstants } from '../../../helpers/constants'
import { StatusCodes } from '../../../helpers/statusCodes'
import { GenericHelper } from '../../../helpers/generic.helper'
import crypto from 'crypto'
import { sendEmail } from '../../../utils/email'





export class UserService{
    static async createUser(body:any):Promise<any>{
        const {firstName,lastName,userName,email,password}= body
        const checkEmail= await db.oneOrNone(UserQueries.checkEmailAvailability,[email])
    if (checkEmail){
        return{
            message:ApiConstants.USER__EMAIL_EXIST,
            code:StatusCodes.BAD_REQUEST,
            data:null
        }
    }
    const checkUserName= await db.oneOrNone(UserQueries.checkUsernameAvailability,[userName])
    if (checkUserName){
        return{
            message:ApiConstants.USERNAME_EXIST,
            code:StatusCodes.BAD_REQUEST,
            data:null
        }
    }
    const id =GenericHelper.generateId()
    const newRequest= {id,...body}
    const saltRounds= 12
    const hashpassword= bcrypt.hashSync(password,saltRounds)
    const otp = crypto.randomInt(10000,99999).toString()
    const hash= bcrypt.hashSync(otp,saltRounds)
     
    try {
        await sendEmail(email,userName,otp)
    } catch (error) {
        console.error("Error sending OTP:", error)
        return{
            message:ApiConstants.OTP_NOT_SENT,
            code:StatusCodes.NOT_FOUND,
            data:null
        }
    }

    const result = await db.oneOrNone(UserQueries.createUser,[
        id,
        firstName,
        lastName,
        userName,
        email,
        hash,
        hashpassword,
    ])
    return{
        message:ApiConstants.USER_CREATED,
            code:StatusCodes.OK,
            data:result
    }
    }
}