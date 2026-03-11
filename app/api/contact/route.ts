import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "ujitalia@gmail.com",
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `,
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
