import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function getEnv(name: string, ...fallbacks: string[]): string | undefined {
  for (const key of [name, ...fallbacks]) {
    const v = process.env[key]
    if (v && v.trim()) return v.trim()
  }
  return undefined
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const firstName = typeof body.firstName === "string" ? body.firstName : ""
  const lastName = typeof body.lastName === "string" ? body.lastName : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const phone = typeof body.phone === "string" ? body.phone : ""
  const projectType = typeof body.projectType === "string" ? body.projectType : ""
  const message = typeof body.message === "string" ? body.message : ""

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
  }

  const emailUser = getEnv("EMAIL_USER", "SMTP_USER", "GMAIL_USER")
  const emailPassword = getEnv("EMAIL_PASSWORD", "EMAIL_PASS", "SMTP_PASSWORD", "SMTP_PASS", "GMAIL_APP_PASSWORD")
  const emailHost = getEnv("EMAIL_SERVER", "EMAIL_HOST", "SMTP_HOST") || "smtp.gmail.com"
  const emailPort = Number(getEnv("EMAIL_PORT", "SMTP_PORT")) || 587
  const emailSecureRaw = getEnv("EMAIL_SECURE", "EMAIL_SERCURE", "SMTP_SECURE")
  const emailSecure = emailSecureRaw === "true" || emailPort === 465
  const emailFrom = getEnv("EMAIL_FROM", "MAIL_FROM") || emailUser
  const emailTo = getEnv("EMAIL_TO", "MAIL_TO") || "remotedieseltuning@proton.me"

  if (!emailUser || !emailPassword) {
    console.error("[contact] SMTP credentials missing. Set EMAIL_USER and EMAIL_PASSWORD in the deployment environment.")
    return NextResponse.json(
      { error: "Email service is not configured. Please email us directly." },
      { status: 503 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailSecure,
    auth: { user: emailUser, pass: emailPassword },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  })

  const safeFirst = escapeHtml(firstName)
  const safeLast = escapeHtml(lastName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeProjectType = escapeHtml(projectType)
  const safeMessage = escapeHtml(message)

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

  try {
    await transporter.sendMail({
      from: `"Remote Diesel Tuning" <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: `New Tune Request: ${firstName} ${lastName} — ${projectType || "General inquiry"}`.trim(),
      html,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    const err = error as { code?: string; responseCode?: number; message?: string }
    console.error("[contact] sendMail failed:", {
      code: err?.code,
      responseCode: err?.responseCode,
      message: err?.message,
    })
    const transient = err?.code === "ETIMEDOUT" || err?.code === "ECONNECTION" || err?.code === "ESOCKET"
    return NextResponse.json(
      { error: transient ? "Mail server unreachable, please try again." : "Failed to send message" },
      { status: transient ? 502 : 500 },
    )
  }
}
