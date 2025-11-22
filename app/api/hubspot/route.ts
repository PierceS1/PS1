import { NextResponse } from "next/server"

// HubSpot Forms API endpoint
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, projectType, message, source } = body

    if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
      return NextResponse.json({ error: "HubSpot integration not configured" }, { status: 500 })
    }

    // Prepare HubSpot submission data
    const hubspotData = {
      fields: [
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: firstName || "",
        },
        {
          objectTypeId: "0-1",
          name: "lastname",
          value: lastName || "",
        },
        {
          objectTypeId: "0-1",
          name: "email",
          value: email,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: phone || "",
        },
        {
          objectTypeId: "0-1",
          name: "project_type",
          value: projectType || "",
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: message || "",
        },
        {
          objectTypeId: "0-1",
          name: "lead_source",
          value: source || "Website Contact Form",
        },
      ],
      context: {
        pageUri: request.headers.get("referer") || "https://pspremierconstruction.com",
        pageName: "Contact Form Submission",
      },
    }

    // Submit to HubSpot Forms API
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`

    const hubspotResponse = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hubspotData),
    })

    if (!hubspotResponse.ok) {
      const errorText = await hubspotResponse.text()
      throw new Error(`HubSpot API error: ${hubspotResponse.status}`)
    }

    const result = await hubspotResponse.json()

    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully",
      hubspotContactId: result.inlineMessage,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit contact information" }, { status: 500 })
  }
}
