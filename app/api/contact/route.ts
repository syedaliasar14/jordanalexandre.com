import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "./template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "contact@my-nimbus.com",
      to: "syedali.asar14@gmail.com",
      subject: `New Message from ${name}`,
      react: ContactEmail({
        name,
        email,
        message
      }),
      replyTo: email
    });

    return NextResponse.json({ message: "Contact form submitted successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}