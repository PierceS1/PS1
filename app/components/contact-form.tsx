"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mblgdavn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg border border-gray-800">
      <input type="hidden" name="_subject" value="New Project Inquiry - PS Premier Construction" />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium leading-none text-white">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            placeholder="John"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium leading-none text-white">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            placeholder="Smith"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none text-white">
          Email
        </label>
        <input
          id="email"
          name="_replyto"
          type="email"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          placeholder="john.smith@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium leading-none text-white">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          placeholder="(555) 123-4567"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="projectType" className="text-sm font-medium leading-none text-white">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          required
        >
          <option value="">Select project type</option>
          <option value="Whole-Home Luxury Remodel">Whole-Home Luxury Remodel</option>
          <option value="Signature Kitchen & Bath">Signature Kitchen & Bath</option>
          <option value="Commercial Office Transformation">Commercial Office Transformation</option>
          <option value="Short-Term Rental Luxe Package">Short-Term Rental Luxe Package</option>
          <option value="Land & Residential Development">Land & Residential Development</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none text-white">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          className="flex min-h-[120px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          placeholder="Tell us about your project..."
          required
        />
      </div>

      {submitStatus === "success" && (
        <div className="rounded-md bg-green-900/50 border border-green-700 p-3 text-green-200 text-sm">
          Thank you! We've received your request and will contact you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-md bg-red-900/50 border border-red-700 p-3 text-red-200 text-sm">
          There was an error submitting your request. Please try again or call us at 512-798-0701.
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-10 px-4 py-2 rounded-md bg-brand-red text-white font-medium hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </Button>

      <p className="text-center text-sm text-gray-400">
        Or call us directly at{" "}
        <a href="tel:512-798-0701" className="text-brand-amber hover:underline">
          512-798-0701
        </a>
      </p>
    </form>
  )
}
