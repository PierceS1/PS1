"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MeetingSchedulerProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function MeetingScheduler({ variant = "default", size = "default", className = "" }: MeetingSchedulerProps) {
  const meetingLink = process.env.NEXT_PUBLIC_HUBSPOT_MEETING_LINK || "https://meetings.hubspot.com/your-link"

  const handleSchedule = () => {
    window.open(meetingLink, "_blank", "noopener,noreferrer")
  }

  return (
    <Button onClick={handleSchedule} variant={variant} size={size} className={className}>
      <Calendar className="mr-2 h-4 w-4" />
      Schedule a Meeting
    </Button>
  )
}
