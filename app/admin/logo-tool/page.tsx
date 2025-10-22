"use client"

import { LogoTransparencyTool } from "@/components/logo-transparency-tool"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LogoToolPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
              <ArrowLeft className="size-4 mr-2" />
              Return to Homepage
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Logo Transparency Tool</h1>
          <p className="text-gray-300">
            This tool helps you create a transparent version of your logo for use in the website header. Upload your
            logo, adjust the settings as needed, and download the transparent version.
          </p>

          <div className="mt-4 p-4 bg-brand-amber/20 border border-brand-amber/30 rounded-md">
            <h2 className="text-brand-amber font-medium mb-2">Instructions:</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Upload your logo using the button below</li>
              <li>Adjust the threshold and tolerance sliders to remove the background</li>
              <li>Download the transparent version</li>
              <li>
                Upload the downloaded file to your project as{" "}
                <code className="bg-gray-800 px-2 py-1 rounded text-brand-amber">
                  /public/images/ps-premier-logo-transparent.png
                </code>
              </li>
              <li>The website will automatically use this transparent version in the header</li>
            </ol>
          </div>
        </div>

        <LogoTransparencyTool />

        <div className="mt-8 p-4 bg-gray-900 border border-gray-800 rounded-md">
          <h2 className="text-xl font-bold mb-2">After Creating Your Transparent Logo</h2>
          <p className="text-gray-300 mb-4">
            Once you've downloaded your transparent logo, you'll need to add it to your website files:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>
              Name the file{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-brand-amber">ps-premier-logo-transparent.png</code>
            </li>
            <li>
              Upload it to your project's{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-brand-amber">public/images/</code> folder
            </li>
            <li>The header component is already configured to use this file if it exists</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
