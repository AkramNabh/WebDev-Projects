import { FormData } from "../components/EmailSection";
import { Resend } from "resend";

const resend = new Resend("re_XwyJBbGx_5gTKXSuJnVkHQ2MUSKQ73z97");


export function sendEmail(data: FormData) {
    console.log(data);

    resend.emails.send({
        from: 'onboarding@resend.div',
        to:'akramnabh@gmail.com',
        subject: 'message from a test',
        text: 'hello world',
    });
  }