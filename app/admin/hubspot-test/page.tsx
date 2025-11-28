"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, AlertCircle, Loader2 } from "lucide-react"

export default function HubSpotTestPage() {
  const [testing, setTesting] = useState(false)
  const [result, setResult] = useState<any>(null)

  const testConnection = async () => {
    setTesting(true)
    setResult(null)

    try {
      const response = await fetch("/api/hubspot/verify")
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        status: "error",
        message: "Failed to connect to verification endpoint",
      })
    } finally {
      setTesting(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-6 w-6 text-green-600" />
      case "error":
        return <XCircle className="h-6 w-6 text-red-600" />
      case "not_configured":
        return <AlertCircle className="h-6 w-6 text-amber-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "not_configured":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">HubSpot Integration Test</h1>
          <p className="text-gray-600">Verify your HubSpot configuration and test the API connection</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Connection Test</CardTitle>
            <CardDescription>Click the button below to test your HubSpot integration</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={testConnection} disabled={testing} className="w-full bg-brand-red hover:bg-brand-red/90">
              {testing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing Connection...
                </>
              ) : (
                "Test HubSpot Connection"
              )}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {getStatusIcon(result.status)}
                  <div>
                    <CardTitle>Connection Status</CardTitle>
                    <CardDescription>{result.message || "Test completed"}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge className={getStatusColor(result.status)}>{result.status?.toUpperCase()}</Badge>
              </CardContent>
            </Card>

            {result.config && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Configuration Status</CardTitle>
                  <CardDescription>Environment variables detected</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">HUBSPOT_ACCESS_TOKEN</span>
                    {result.config.hasAccessToken ? (
                      <Badge className="bg-green-100 text-green-800">Configured</Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">Not Set</Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">HUBSPOT_PORTAL_ID</span>
                    {result.config.hasPortalId ? (
                      <Badge className="bg-green-100 text-green-800">Configured</Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">Not Set</Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">HUBSPOT_FORM_ID</span>
                    {result.config.hasFormId ? (
                      <Badge className="bg-green-100 text-green-800">Configured</Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">Not Set</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {result.status === "success" && (
              <Card>
                <CardHeader>
                  <CardTitle>Integration Details</CardTitle>
                  <CardDescription>Information from HubSpot</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Integration Method</span>
                    <Badge className="bg-blue-100 text-blue-800">
                      {result.method === "private_app" ? "Private App API" : "Forms API"}
                    </Badge>
                  </div>
                  {result.portalId && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Portal ID</span>
                      <span className="text-sm text-gray-700 font-mono">{result.portalId}</span>
                    </div>
                  )}
                  {result.accountType && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Account Type</span>
                      <span className="text-sm text-gray-700">{result.accountType}</span>
                    </div>
                  )}
                  {result.hubDomain && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Hub Domain</span>
                      <span className="text-sm text-gray-700">{result.hubDomain}</span>
                    </div>
                  )}
                  {result.formId && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Form ID</span>
                      <span className="text-sm text-gray-700 font-mono">{result.formId}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {result.status === "not_configured" && (
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Setup Required</CardTitle>
                  <CardDescription className="text-amber-700">
                    Add HubSpot environment variables to complete setup
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-amber-900 space-y-2">
                  <p className="font-medium">Required steps:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>Go to v0 sidebar and click "Vars"</li>
                    <li>Add HUBSPOT_ACCESS_TOKEN (from HubSpot Private Apps)</li>
                    <li>Add HUBSPOT_PORTAL_ID (from HubSpot Account Settings)</li>
                    <li>Add HUBSPOT_FORM_ID (optional, from HubSpot Forms)</li>
                    <li>Test connection again</li>
                  </ol>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  )
}
