import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 animate-fade-in"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
          aria-label="Stardust Portfolio Home"
        >
          <img src="/logo.svg" className="h-7 w-7 text-primary" alt="logo" />
          <span className="font-headline text-2xl font-bold text-foreground">
            Mohammed Al-Jabali
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-1 md:flex">
          {navItems.map(item => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
                size="icon"
              >
                <Menu className="h-5 w-5 " />
                <span className="sr-only ">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 text-sm">
              {navItems.map(item => (
                <DropdownMenuItem
                  className="hover:bg-primary hover:text-primary-foreground focus:text-primary-foreground focus:bg-primary w-full px-2 py-1.5 text-sm"
                  key={item.name}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
