import nodemailer from 'nodemailer';
import { getHtmlTemplate } from '../lib/email.js';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.BREVO_EMAIL, // Your Brevo email
        pass: process.env.BREVO_API_KEY // Your Brevo SMTP API Key
    }
});

export const sendEmail = async (req, res) => {
    try {
        const { mailType, mailTo, data } = req?.body;

        if (!mailType || !data) {
            return res.status(400).json({ error: 'Missing mailType or data' });
        }

        const html = getHtmlTemplate(mailType, data);

        const mailOptions = {
            from: "organizingsecretary@barriemosque.ca",
            to: mailTo,
            subject: `New ${mailType} Submission`,
            text: `You have received a new ${mailType} request.`,
            html
        };

        console.log("mailOptions", mailOptions);
        let info = await transporter.sendMail(mailOptions);
        res.json({ status: 200, message: "Email sent successfully", info });
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: 'Failed to send email' });
    }
};
