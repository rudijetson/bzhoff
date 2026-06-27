export type PersonalProfile = {
  name: string
  title: string
  subtitle: string
  mainContent: string
  expandedContent: string[]
  links: {
    title: string
    href: string
    description?: string
    techStack?: string[]
    category?: 'mission' | 'commercial' | 'technical'
  }[]
}

export type CreatorProfile = {
  name: string
  title: string
  subtitle: string
  mainContent: string
  expandedContent: string[]
  socialLinks: { title: string; href: string; icon: React.ReactNode }[]
  connectLinks: { title: string; href: string; icon: React.ReactNode }[]
}

export const isCreatorProfileType = (profile: PersonalProfile | CreatorProfile): profile is CreatorProfile => {
  return 'socialLinks' in profile
} 