"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  loading?: "eager" | "lazy"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  loading,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isError, setIsError] = useState(false)

  const handleError = () => {
    if (!isError) {
      setImgSrc("/placeholder.svg")
      setIsError(true)
    }
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      className={cn(className)}
      quality={90}
      onError={handleError}
      loading={loading}
    />
  )
}
