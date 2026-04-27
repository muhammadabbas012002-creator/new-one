import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// const TO_EMAIL = "abbas.contactme@gmail.com"; // Change to your destination email
const TO_EMAIL = "abbas.contactme@gmail.com"; // Change to your destination email

// Configure your SMTP credentials here
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER, // your SMTP username
        pass: process.env.SMTP_PASS, // your SMTP password or app password
    },
});

export async function POST(req) {
    const body = await req.json();
    const { name, email, phone, country, visaType, address, message } = body;

    console.log(process.env.SMTP_USER);

    if (!name || !email || !phone || !country || !visaType) {
        return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 },
        );
    }

    const html = `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; padding: 32px;">
                <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 32px 28px;">
                    <h2 style="color: #1a237e; font-size: 1.6rem; margin-bottom: 18px;">New Visa Inquiry</h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 1rem;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #333;">Name:</td>
                            <td style="padding: 8px 0; color: #444;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #333;">Email:</td>
                            <td style="padding: 8px 0; color: #444;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #333;">Phone:</td>
                            <td style="padding: 8px 0; color: #444;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #333;">Country:</td>
                            <td style="padding: 8px 0; color: #444;">${country}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #333;">Visa Type:</td>
                            <td style="padding: 8px 0; color: #444;">${visaType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #333;">Address:</td>
                            <td style="padding: 8px 0; color: #444;">${address || "-"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: 600; color: #333; vertical-align: top;">Message:</td>
                            <td style="padding: 8px 0; color: #444; white-space: pre-line;">${message || "-"}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 32px; text-align: center; color: #888; font-size: 0.95rem;">
                        <span>Sent from <b>MADZ Consultant</b> website</span>
                    </div>
                </div>
            </div>
        `;

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: TO_EMAIL,
            subject: "New Visa Inquiry from Website",
            html,
        });
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json(
            { error: err.message || "Server error" },
            { status: 500 },
        );
    }
}
