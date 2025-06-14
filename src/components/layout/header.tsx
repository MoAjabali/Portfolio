import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2" aria-label="Stardust Portfolio Home">
          <Rocket className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">Stardust</span>
        </Link>
        <nav className="hidden space-x-2 md:flex">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild className="text-foreground hover:bg-accent hover:text-accent-foreground">
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
        {/* Mobile menu button can be added here if needed */}
      </div>
    </header>
  );
}
