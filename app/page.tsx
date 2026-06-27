"use client"

import { useState, useEffect } from "react"
import {
  NewsletterSignup,
  ProfileSwitcher,
  ProfileHeader,
  CreatorContent,
  CreatorConnect,
  PersonalLinks,
  Footer
} from "@/app/components/features"
import { profiles } from "@/app/data/profiles"

export default function HomePage() {
  const [isCreatorProfile, setIsCreatorProfile] = useState(false)
  const currentProfile = isCreatorProfile ? profiles.creator : profiles.personal

  // Persist profile mode to localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('profileMode')
    if (savedMode === 'creator') {
      setIsCreatorProfile(true)
    }
  }, [])

  const handleProfileChange = (isCreator: boolean) => {
    setIsCreatorProfile(isCreator)
    localStorage.setItem('profileMode', isCreator ? 'creator' : 'professional')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <ProfileSwitcher
          isCreatorProfile={isCreatorProfile}
          onProfileChange={handleProfileChange}
        />

        <ProfileHeader 
          profile={currentProfile}
          isCreatorProfile={isCreatorProfile}
        />

        {isCreatorProfile ? (
          <>
            <CreatorContent profile={profiles.creator} />
            <CreatorConnect profile={profiles.creator} />
            <NewsletterSignup />
          </>
        ) : (
          <PersonalLinks profile={profiles.personal} />
        )}

        <Footer />
      </main>
    </div>
  )
}

