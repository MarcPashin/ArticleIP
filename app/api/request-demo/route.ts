import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, role, interests, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Demo Request from ArticleIP Website

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Company: ${company || "Not provided"}
- Role: ${role || "Not provided"}

Interests:
${interests.length > 0 ? interests.map((interest: string) => `- ${interest}`).join('\n') : "None selected"}

Message:
${message || "No message provided"}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // For now, we'll use a simple email service
    // In production, you'd want to use a service like SendGrid, Resend, or similar
    const emailData = {
      to: process.env.DEMO_REQUEST_EMAIL ,
      subject: `Demo Request from ${firstName} ${lastName}`,
      text: emailContent,
      from: email,
      replyTo: email
    };

    // Since we can't actually send emails without a proper email service configured,
    // we'll log the request and return success
    console.log("Demo request received:", emailData);

    // In a real implementation, you would integrate with an email service here:
    // const response = await sendEmail(emailData);

    return NextResponse.json(
      {
        message: "Demo request submitted successfully",
        data: {
          firstName,
          lastName,
          email,
          company,
          role,
          interests,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}