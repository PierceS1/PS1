"use client"

import { useEffect, useRef } from "react"

export function TransparentLogoGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 400
    canvas.height = 80

    // Clear canvas with transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw logo text
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 28px Arial"
    ctx.fillText("PS PREMIER", 20, 45)

    ctx.font = "bold 24px Arial"
    ctx.fillText("CONSTRUCTION", 20, 70)

    // Draw decorative elements
    ctx.fillStyle = "#b91c1c" // brand-red
    ctx.fillRect(10, 20, 5, 40)

    ctx.fillStyle = "#f59e0b" // brand-amber
    ctx.fillRect(380, 30, 10, 3)

    // Generate PNG data URL
    const dataUrl = canvas.toDataURL("image/png")

    // You can download this or use it directly
    console.log("Transparent logo generated:", dataUrl)

    // Optional: create download link
    const downloadLink = document.createElement("a")
    downloadLink.href = dataUrl
    downloadLink.download = "ps-premier-logo-transparent.png"
    downloadLink.textContent = "Download Transparent Logo"
    downloadLink.style.display = "block"
    downloadLink.style.marginTop = "10px"
    canvas.parentNode?.appendChild(downloadLink)
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Transparent Logo Generator</h2>
      <p className="mb-4">This tool generates a transparent version of your logo.</p>
      <canvas ref={canvasRef} className="border border-gray-300 bg-gray-800" width="400" height="80"></canvas>
      <p className="mt-4 text-sm text-gray-400">
        Note: This is a temporary solution. For best results, have a professional create a transparent PNG of your logo.
      </p>
    </div>
  )
}
