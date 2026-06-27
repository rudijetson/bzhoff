"use client"

import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { SectionHeader } from "@/app/components/features"
import { TooltipProvider } from "@/app/components/composed"
import type { PersonalProfile } from "./types"

type PersonalLinksProps = {
  profile: PersonalProfile
}

export function PersonalLinks({ profile }: PersonalLinksProps) {
  const missionProjects = profile.links.filter(link => link.category === 'mission')
  const commercialProjects = profile.links.filter(link => link.category === 'commercial')
  const technicalProjects = profile.links.filter(link => link.category === 'technical')

  const ProjectLink = ({ link }: { link: typeof profile.links[0] }) => (
    <Link
      key={link.title}
      href={link.href}
      className="group"
    >
      <div className="flex items-center justify-between py-3 border-b border-border/40 hover:text-muted-foreground transition-colors">
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{link.title}</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
          {link.description && (
            <p className="text-sm text-muted-foreground line-clamp-1">{link.description}</p>
          )}
          {link.techStack && (
            <div className="flex flex-wrap gap-2">
              {link.techStack.map((tech) => (
                <span key={tech} className="text-[10px] text-muted-foreground/60">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )

  return (
    <div className="mb-8 mt-12">
      <TooltipProvider delayDuration={0}>
        <div>
          <SectionHeader
            title="AI Literacy Mission"
            tooltip="Democratizing AI education and responsible technology adoption"
          />
          <div className="border-t border-border/40">
            {missionProjects.map((link) => (
              <ProjectLink key={link.title} link={link} />
            ))}
          </div>

          <SectionHeader
            title="Commercial Work"
            tooltip="Products and platforms that generate revenue"
          />
          <div className="border-t border-border/40">
            {commercialProjects.map((link) => (
              <ProjectLink key={link.title} link={link} />
            ))}
          </div>

          <SectionHeader
            title="Technical Portfolio"
            tooltip="Developer tools and systems demonstrating technical depth"
          />
          <div className="border-t border-border/40">
            {technicalProjects.map((link) => (
              <ProjectLink key={link.title} link={link} />
            ))}
          </div>
        </div>
      </TooltipProvider>
    </div>
  )
} 