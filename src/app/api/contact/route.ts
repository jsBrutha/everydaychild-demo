import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      schoolName,
      fullAddress,
      contactPersonName,
      phoneNumber,
      emailAddress,
      message,
      to,
      subject,
    } = body;

    // Create a transporter using Gmail SMTP
    // Note: You'll need to set up environment variables for email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2772D7; border-bottom: 2px solid #DDB725; padding-bottom: 10px;">
          School Partnership Inquiry
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">School Information</h3>
          <p><strong>School Name:</strong> ${schoolName}</p>
          <p><strong>Full Address:</strong> ${fullAddress}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p><strong>Contact Person:</strong> ${contactPersonName}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Email Address:</strong> ${emailAddress}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This message was sent from the EveryChild International partnership form.</p>
          <p>Sent on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const textContent = `
School Partnership Inquiry

School Information:
- School Name: ${schoolName}
- Full Address: ${fullAddress}

Contact Information:
- Contact Person: ${contactPersonName}
- Phone Number: ${phoneNumber}
- Email Address: ${emailAddress}

Message:
${message}

---
This message was sent from the EveryChild International partnership form.
Sent on: ${new Date().toLocaleString()}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: textContent,
      html: htmlContent,
      replyTo: emailAddress, // Allow direct reply to the sender
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
