import { NextRequest, NextResponse } from "next/server";
import { Transporter } from "nodemailer";

const nodemailer = require("nodemailer");

const transporter: Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// create email
const createEmailOptions = (recipientEmail: string) => ({
  from: process.env.EMAIL_ADDRESS!, // sender address
  to: recipientEmail, // list of receivers
  subject: "Test Email", // Subject line
  text: "This is a test email sent from Node.js", // plain text body
  html: "<p>This is a test email sent from <b>Node.js</b></p>", // html body
});

type EmailOptions = { from: string; to: string; text: string; html: string };
// send email

const sendEmail = (options: EmailOptions): void => {
  transporter.sendMail(options, (error, info) =>
    error ? console.error(error) : console.log("Email send successfuly")
  );
};

export async function POST(req: NextRequest, res: NextResponse) {
  const options = createEmailOptions("3plefly@gmail.com");

  sendEmail(options);
  console.log("sent email");
}
