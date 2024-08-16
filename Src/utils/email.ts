import nodemailer from "nodemailer";
import  config  from "../config/env/development";
import { sendOtp } from "../email/otp.template";

const transporter=nodemailer.createTransport({
    service: config.EMAIL_SERVICE,
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS,
  },
})

export async function sendEmail(to:string, userName:string,otp:string):Promise<void>{
    const mailOptions = {
        from: config.EMAIL_USER,
        to: to,
        subject: `Library Management App`,
        html:sendOtp(userName, otp)
      };
    
      await transporter.sendMail(mailOptions);
}