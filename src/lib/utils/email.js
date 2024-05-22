import { EMAIL_SEND, PASS_SEND } from "$env/static/private"
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_SEND,
        pass: PASS_SEND,
    },
});