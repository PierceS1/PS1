import { NextResponse } from "next/server"

// HubSpot configuration
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN || ""

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, projectType, message, source } = body

    if (HUBSPOT_ACCESS_TOKEN && HUBSPOT_ACCESS_TOKEN.length > 0) {
      // Use Private Apps API (Contacts API v3) for direct contact creation
      return await createContactWithAPI(body)
    } else if (HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID) {
      // Use Forms API v3 (no token required)
      return await submitToFormsAPI(body)
    } else {
      return NextResponse.json({ error: "HubSpot integration not configured" }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit contact information" }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (!HUBSPOT_ACCESS_TOKEN || HUBSPOT_ACCESS_TOKEN.length === 0) {
      return NextResponse.json({
        configured: false,
        method: HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID ? "forms_api" : "none",
        message: "Using Forms API or not configured",
      })
    }

    // Verify token with HubSpot
    const response = await fetch("https://api.hubapi.com/integrations/v1/me", {
      headers: {
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      },
    })

    if (!response.ok) {
      return NextResponse.json({
        configured: false,
        error: "Invalid access token",
      })
    }

    const data = await response.json()

    return NextResponse.json({
      configured: true,
      method: "private_app",
      portalId: data.portalId,
      accountType: data.accountType,
    })
  } catch (error) {
    return NextResponse.json({
      configured: false,
      error: "Failed to verify token",
    })
  }
}

async function createContactWithAPI(body: any) {
  const { firstName, lastName, email, phone, projectType, message, source } = body

  const contactData = {
    properties: {
      firstname: firstName || "",
      lastname: lastName || "",
      email: email,
      phone: phone || "",
      project_type: projectType || "",
      message: message || "",
      hs_lead_source: source || "Website Contact Form",
    },
  }

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(contactData),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`HubSpot API error: ${errorData.message || response.statusText}`)
  }

  const result = await response.json()

  return NextResponse.json({
    success: true,
    message: "Contact created successfully",
    contactId: result.id,
    method: "contacts_api",
  })
}

// Forms API v3 submission (existing method)
async function submitToFormsAPI(body: any) {
  const { firstName, lastName, email, phone, projectType, message, source } = body

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
      pageUri: "https://pspremierconstruction.com",
      pageName: "Contact Form Submission",
    },
  }

  const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`

  const response = await fetch(hubspotUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hubspotData),
  })

  if (!response.ok) {
    throw new Error(`HubSpot API error: ${response.status}`)
  }

  const result = await response.json()

  return NextResponse.json({
    success: true,
    message: "Contact submitted successfully",
    hubspotContactId: result.inlineMessage,
    method: "forms_api",
  })
}
