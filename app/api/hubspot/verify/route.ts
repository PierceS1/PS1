import { NextResponse } from "next/server"

export async function GET() {
  const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN
  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
  const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID

  const config = {
    hasAccessToken: !!HUBSPOT_ACCESS_TOKEN,
    hasPortalId: !!HUBSPOT_PORTAL_ID,
    hasFormId: !!HUBSPOT_FORM_ID,
  }

  if (!HUBSPOT_ACCESS_TOKEN && !HUBSPOT_PORTAL_ID) {
    return NextResponse.json({
      status: "not_configured",
      message: "HubSpot integration not configured",
      config,
    })
  }

  // If using Private Apps API, verify token
  if (HUBSPOT_ACCESS_TOKEN) {
    try {
      const response = await fetch("https://api.hubapi.com/integrations/v1/me", {
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
      })

      if (!response.ok) {
        return NextResponse.json({
          status: "error",
          message: "Invalid HubSpot access token",
          config,
        })
      }

      const data = await response.json()

      return NextResponse.json({
        status: "success",
        method: "private_app",
        portalId: data.portalId,
        accountType: data.accountType,
        hubDomain: data.hubDomain,
        config,
      })
    } catch (error) {
      return NextResponse.json({
        status: "error",
        message: "Failed to verify HubSpot token",
        config,
      })
    }
  }

  // Using Forms API
  return NextResponse.json({
    status: "success",
    method: "forms_api",
    portalId: HUBSPOT_PORTAL_ID,
    formId: HUBSPOT_FORM_ID,
    config,
  })
}
