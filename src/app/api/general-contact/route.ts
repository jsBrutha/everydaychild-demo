import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, emailAddress, subject, message, to } = body;

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2772D7; border-bottom: 2px solid #DDB725; padding-bottom: 10px;">
          General Contact Inquiry
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${emailAddress}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This message was sent from the EveryChild International contact form.</p>
          <p>Sent on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const textContent = `
General Contact Inquiry

Contact Information:
- Name: ${fullName}
- Email: ${emailAddress}
- Subject: ${subject}

Message:
${message}

---
This message was sent from the EveryChild International contact form.
Sent on: ${new Date().toLocaleString()}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: `General Inquiry: ${subject}`,
      text: textContent,
      html: htmlContent,
      replyTo: emailAddress,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
