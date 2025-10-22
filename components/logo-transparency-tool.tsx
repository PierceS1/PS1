"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Upload, Download, Trash2 } from "lucide-react"

export function LogoTransparencyTool() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [threshold, setThreshold] = useState(240) // Default threshold for white detection
  const [tolerance, setTolerance] = useState(30) // Color tolerance
  const [isProcessing, setIsProcessing] = useState(false)
  const [fileName, setFileName] = useState("")

  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    const reader = new FileReader()

    reader.onload = (event) => {
      if (event.target?.result) {
        setOriginalImage(event.target.result as string)
      }
    }

    reader.readAsDataURL(file)
  }

  // Process the image to make background transparent
  const processImage = () => {
    if (!originalImage || !canvasRef.current) return

    setIsProcessing(true)

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      // Set canvas dimensions to match image
      canvas.width = img.width
      canvas.height = img.height

      // Draw original image
      ctx.drawImage(img, 0, 0)

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Make white/light background transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // Check if pixel is close to white based on threshold and tolerance
        if (r >= threshold - tolerance && g >= threshold - tolerance && b >= threshold - tolerance) {
          // Set alpha channel to transparent
          data[i + 3] = 0
        }
      }

      // Put processed image data back
      ctx.putImageData(imageData, 0, 0)

      // Set processed image
      setProcessedImage(canvas.toDataURL("image/png"))
      setIsProcessing(false)
    }

    img.src = originalImage
  }

  // Process image when original image or settings change
  useEffect(() => {
    if (originalImage) {
      processImage()
    }
  }, [originalImage, threshold, tolerance])

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  // Download processed image
  const handleDownload = () => {
    if (!processedImage) return

    const link = document.createElement("a")
    link.href = processedImage
    link.download = "ps-premier-logo-transparent.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Reset everything
  const handleReset = () => {
    setOriginalImage(null)
    setProcessedImage(null)
    setFileName("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-900 border-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Logo Transparency Tool</CardTitle>
        <CardDescription className="text-gray-400">
          Upload your logo to create a transparent version for your website header
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* File Upload */}
        <div className="space-y-2">
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />

          <Button
            onClick={handleUploadClick}
            className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-700 bg-gray-800 hover:bg-gray-700"
          >
            <Upload className="size-8 mb-2" />
            <span>{fileName || "Upload your logo"}</span>
            <span className="text-xs text-gray-400 mt-1">PNG, JPG or SVG</span>
          </Button>
        </div>

        {/* Settings */}
        {originalImage && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="threshold">Background Threshold</Label>
                <span className="text-sm text-gray-400">{threshold}</span>
              </div>
              <Slider
                id="threshold"
                min={0}
                max={255}
                step={1}
                value={[threshold]}
                onValueChange={(value) => setThreshold(value[0])}
                className="w-full"
              />
              <p className="text-xs text-gray-400">Higher values remove more white/light colors</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="tolerance">Color Tolerance</Label>
                <span className="text-sm text-gray-400">{tolerance}</span>
              </div>
              <Slider
                id="tolerance"
                min={0}
                max={100}
                step={1}
                value={[tolerance]}
                onValueChange={(value) => setTolerance(value[0])}
                className="w-full"
              />
              <p className="text-xs text-gray-400">Higher values increase the range of colors made transparent</p>
            </div>
          </div>
        )}

        {/* Preview */}
        {(originalImage || processedImage) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {originalImage && (
              <div className="space-y-2">
                <Label>Original Logo</Label>
                <div className="relative aspect-video flex items-center justify-center bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
                  <img
                    src={originalImage || "/placeholder.svg"}
                    alt="Original logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            )}

            {processedImage && (
              <div className="space-y-2">
                <Label>Transparent Version</Label>
                <div className="relative aspect-video flex items-center justify-center bg-[url('/transparent-grid-overlay.png')] border border-gray-700 rounded-md overflow-hidden">
                  <img
                    src={processedImage || "/placeholder.svg"}
                    alt="Transparent logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Hidden canvas for processing */}
        <canvas ref={canvasRef} className="hidden"></canvas>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleReset}
          disabled={!originalImage}
          className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
        >
          <Trash2 className="size-4 mr-2" />
          Reset
        </Button>

        <Button
          onClick={handleDownload}
          disabled={!processedImage || isProcessing}
          className="bg-brand-red hover:bg-brand-red-dark text-white"
        >
          <Download className="size-4 mr-2" />
          Download Transparent Logo
        </Button>
      </CardFooter>
    </Card>
  )
}
