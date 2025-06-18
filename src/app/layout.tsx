import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohammed Al-jabali Portfolio',
  description: 'This is Mohammed Al-jabali (MoAjabali) Portfolio website showcasing his skills, projects, and journey. In addition, who is Mohammed Al-jabali?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
    {/* Ensure dark theme is applied */}
      <head>
        {/* Removed direct font links, handled by next/font */}
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <div 
          className="fixed inset-0 z-[-1] opacity-20" // Reduced opacity for subtlety
          style={{
            backgroundImage: "url(/stars.jpg)", // Standardized placeholder
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          data-ai-hint="abstract particles" // Updated hint
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
