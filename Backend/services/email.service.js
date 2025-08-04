// services/mailService.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.BREVO_EMAIL,
        pass: process.env.BREVO_API_KEY
    }
});

export const sendMailServ = async (mailOptions) => {
    if (!mailOptions?.to || !mailOptions?.html) {
        throw new Error('Missing required mail options');
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent to ", mailOptions?.to);
    return info;
};
