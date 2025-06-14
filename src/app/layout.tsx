import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Stardust Portfolio',
  description: 'Portfolio website showcasing skills, projects, and journey.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Ensure dark theme is applied */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <div 
          className="fixed inset-0 z-[-1] opacity-30"
          style={{
            backgroundImage: "url(https://placehold.co/1920x1080.png)",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          data-ai-hint="starry nebula"
          aria-hidden="true"
        ></div>
        <div className="relative z-0">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
