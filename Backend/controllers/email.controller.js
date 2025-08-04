import { getHtmlTemplate } from '../lib/templates.js';
import { sendMailServ } from '../services/email.service.js';


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

        const info = await sendMailServ(mailOptions);

        res.json({ status: 200, message: "Email sent successfully", info });
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: 'Failed to send email' });
    }
};
