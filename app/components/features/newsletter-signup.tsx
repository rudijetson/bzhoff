"use client"

import { useState } from "react"
import { Button, Input } from "@/app/components/primitives"
import { Mail } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div className="mb-12 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm">
        <Mail className="size-3.5" />
        <span className="text-muted-foreground">Subscribe to my newsletter</span>
      </div>
      {isSubmitted ? (
        <p className="text-xs text-muted-foreground">
          Thanks for subscribing! Please check your email to confirm.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-8 text-xs"
          />
          <Button type="submit" size="sm" className="h-8">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  )
}

