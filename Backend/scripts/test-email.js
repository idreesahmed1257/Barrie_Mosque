import dotenv from 'dotenv';
import { sendMailServ } from '../services/email.service.js';

dotenv.config();

const TEST_TO = 'idreesahmef1257@gmail.com';

const mailOptions = {
  from: 'organizingsecretary@barriemosque.ca',
  to: TEST_TO,
  subject: 'Barrie Mosque – Test Email',
  text: 'This is a test email from the Barrie Mosque backend.',
  html: `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Test Email</h2>
      <p>This is a test email from the Barrie Mosque backend.</p>
      <p>If you received this, the email configuration is working correctly.</p>
      <p><strong>Sent at:</strong> ${new Date().toISOString()}</p>
    </div>
  `,
};

async function main() {
  try {
    console.log(`Sending test email to ${TEST_TO}...`);
    const info = await sendMailServ(mailOptions);
    console.log('Test email sent successfully.');
    console.log('Message ID:', info.messageId);
  } catch (err) {
    console.error('Failed to send test email:', err.message);
    process.exit(1);
  }
}

main();
