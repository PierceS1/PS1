"use client"

import { TransparentLogoGenerator } from "@/components/transparent-logo-generator"
import Link from "next/link"

export default function LogoGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Logo Generator Tool</h1>
        <p className="mb-8">
          This tool creates a transparent version of your logo for use in the website header. After generating, download
          the image and place it in your public/images folder as "ps-premier-logo-transparent.png".
        </p>

        <TransparentLogoGenerator />

        <div className="mt-12">
          <Link href="/" className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
