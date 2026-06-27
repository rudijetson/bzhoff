interface PageContainerProps {
  children: React.ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-2xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

