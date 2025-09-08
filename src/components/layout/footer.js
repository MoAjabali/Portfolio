import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className="w-full border-t border-border/40 bg-background/80 py-8 text-center text-muted-foreground animate-fade-in"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="container mx-auto">
        <p className="flex items-center justify-center text-sm">
          Crafted with <Heart className="mx-1.5 h-4 w-4 text-primary" /> by
          Mohammed Al-Jabali &copy; {currentYear}
        </p>
        <p className="mt-1 text-xs">
          Reach for the stars. Your dreams can come true.
        </p>
      </div>
    </footer>
  )
}
