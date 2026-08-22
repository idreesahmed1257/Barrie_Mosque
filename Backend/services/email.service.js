// services/mailService.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: process.env.SMTP_PORT, secure: true, auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASSWORD } });

export const sendMailServ = async (mailOptions) => {
    if (!mailOptions?.to || !mailOptions?.html) {
        throw new Error('Missing required mail options');
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent to ", mailOptions?.to);
    return info;
};
