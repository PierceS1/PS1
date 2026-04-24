import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

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
      secure: process.env.EMAIL_SECURE === "true" || process.env.EMAIL_SERCURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const safeFirst = escapeHtml(String(firstName || ""))
    const safeLast = escapeHtml(String(lastName || ""))
    const safeEmail = escapeHtml(String(email || ""))
    const safePhone = escapeHtml(String(phone || ""))
    const safeProjectType = escapeHtml(String(projectType || ""))
    const safeMessage = escapeHtml(String(message || ""))

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0a0a0a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #b91c1c; margin: 0;">New Tune Request</h2>
          <p style="color: #999; margin: 6px 0 0;">remotedieseltuning.com</p>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; font-weight: bold;">${safeFirst} ${safeLast}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #b91c1c;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0;"><a href="tel:${safePhone}" style="color: #b91c1c;">${safePhone || "—"}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Tune Type</td>
              <td style="padding: 10px 0;">${safeProjectType || "—"}</td>
            </tr>
          </table>
          ${
            safeMessage
              ? `<div style="margin-top: 16px; padding: 16px; background: #fff; border-left: 4px solid #b91c1c; border-radius: 4px;">
                  <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
                </div>`
              : ""
          }
          <div style="margin-top: 28px;">
            <a href="mailto:${safeEmail}"
               style="background: #b91c1c; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 15px;">
              Reply to ${safeFirst || "Customer"}
            </a>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Remote Diesel Tuning" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "info@remotedieseltuning.com",
      replyTo: email,
      subject: `New Tune Request: ${firstName || ""} ${lastName || ""} — ${projectType || "General inquiry"}`.trim(),
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
