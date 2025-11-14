"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

const QUICK_QUESTIONS = [
  "What services do you offer?",
  "How much does a kitchen remodel cost?",
  "What areas do you serve?",
  "How long does a project take?",
  "Do you offer free estimates?",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm here to help with your construction project. What can I answer for you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "" })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const sendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      const data = await response.json()
      const assistantMessage: Message = { role: "assistant", content: data.message }
      setMessages((prev) => [...prev, assistantMessage])

      // Show contact form after 3 messages
      if (messages.filter((m) => m.role === "user").length >= 2) {
        setTimeout(() => setShowContactForm(true), 1000)
      }
    } catch (error) {
      console.error("[v0] Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting. Please call us at (512) 968-0169 or email info@pspremierconstruction.com",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactInfo.name,
          phone: contactInfo.phone,
          email: contactInfo.email,
          message: `Chat conversation: ${messages.map((m) => `${m.role}: ${m.content}`).join("\n")}`,
          source: "Chat Widget",
        }),
      })

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Thanks ${contactInfo.name}! We'll reach out to you soon at ${contactInfo.phone}. Is there anything else I can help you with?`,
        },
      ])
      setShowContactForm(false)
      setContactInfo({ name: "", phone: "", email: "" })
    } catch (error) {
      console.error("[v0] Contact submission error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "There was an issue submitting your info. Please call us directly at (512) 968-0169.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[600px] w-[380px] flex-col rounded-2xl bg-background shadow-2xl md:h-[650px] md:w-[420px]">
          {/* Header */}
          <div className="flex items-center gap-3 rounded-t-2xl bg-gradient-to-r from-gray-950 to-gray-900 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-amber">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">PS Premier Construction</h3>
              <p className="text-xs text-muted-foreground">Typically replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, idx) => (
              <div key={idx} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === "user" ? "bg-brand-amber text-white" : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl bg-muted px-4 py-2">
                  <div className="flex gap-1">
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Quick questions:</p>
                {QUICK_QUESTIONS.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(question)}
                    className="block w-full rounded-lg border border-border p-3 text-left text-sm transition-all hover:border-brand-amber hover:bg-muted"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Contact Form */}
            {showContactForm && (
              <div className="rounded-2xl border-2 border-brand-amber bg-background p-4">
                <h4 className="mb-3 font-semibold text-foreground">Get a Free Consultation</h4>
                <form onSubmit={handleSubmitContact} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-brand-amber focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-brand-amber focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-brand-amber focus:outline-none"
                    required
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-brand-amber hover:bg-brand-amber/90">
                    Submit
                  </Button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (input.trim()) sendMessage(input)
            }}
            className="border-t border-border p-4"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-border px-4 py-2 text-sm focus:border-brand-amber focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-amber text-white transition-all hover:scale-105 disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
