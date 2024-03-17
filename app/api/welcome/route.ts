import { NextResponse, NextRequest } from "next/server";
import Welcome from "@/app/emails/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_KEY);

export async function GET(req: NextRequest) {
  const body = req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ismaelali.cv@gmail.com",
      subject: "Thanks for Reaching out 👋",
      react: Welcome(),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
