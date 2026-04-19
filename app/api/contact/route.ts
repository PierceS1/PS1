import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, projectType, message } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SERCURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #C49632; margin: 0;">New Consultation Request</h2>
          <p style="color: #999; margin: 6px 0 0;">pspremierconstruction.com</p>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; font-weight: bold;">${firstName || ""} ${lastName || ""}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #C49632;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #C49632;">${phone || "—"}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Project Type</td>
              <td style="padding: 10px 0;">${projectType || "—"}</td>
            </tr>
          </table>
          ${
            message
              ? `<div style="margin-top: 16px; padding: 16px; background: #fff; border-left: 4px solid #C49632; border-radius: 4px;">
                  <p style="margin: 0; color: #333; line-height: 1.6;">${message}</p>
                </div>`
              : ""
          }
          <div style="margin-top: 28px;">
            <a href="mailto:${email}"
               style="background: #C49632; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 15px;">
              Reply to ${firstName || "Client"}
            </a>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"PS Premier Website" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: "Ps@pspremierconstruction.com",
      replyTo: email,
      subject: `New Lead: ${firstName || ""} ${lastName || ""} — ${projectType || "Consultation Request"}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
