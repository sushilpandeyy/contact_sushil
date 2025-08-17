import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "../components/Footer";
import { AnalyticsProvider } from '../components/Analytics';

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://contactsushil.me'),
  title: {
    default: 'Sushil Pandey - Backend Developer & Systems Engineer',
    template: '%s | Sushil Pandey'
  },
  description: 'Experienced Backend Developer & Systems Engineer specializing in low-level kernel development, distributed systems, and high-performance applications. GSoC\'25 @OpenAFS contributor with expertise in Python, Java, Go, and React.',
  applicationName: 'Sushil Pandey Portfolio',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Sushil Pandey', url: 'https://contactsushil.me' }],
  creator: 'Sushil Pandey',
  publisher: 'Sushil Pandey',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: 'https://contactsushil.me',
    siteName: 'Sushil Pandey - Backend Developer Portfolio',
    locale: 'en_US',
    type: 'website',
    title: 'Sushil Pandey - Backend Developer & Systems Engineer',
    description: 'Experienced Backend Developer & Systems Engineer specializing in low-level kernel development, distributed systems, and high-performance applications. GSoC\'25 @OpenAFS contributor.',
    images: [{
      url: '/logo/sushil_git.jpeg',
      width: 1200,
      height: 630,
      alt: 'Sushil Pandey - Backend Developer & Systems Engineer Portfolio',
      type: 'image/jpeg'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sushilpandeyy',
    creator: '@sushilpandeyy',
    title: 'Sushil Pandey - Backend Developer & Systems Engineer',
    description: 'Experienced Backend Developer & Systems Engineer specializing in low-level kernel development, distributed systems, and high-performance applications. GSoC\'25 @OpenAFS contributor.',
    images: {
      url: '/logo/sushil_git.jpeg',
      alt: 'Sushil Pandey - Backend Developer & Systems Engineer Portfolio'
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  keywords: [
    'Sushil Pandey',
    'backend developer',
    'systems engineer',
    'software engineer',
    'systems programming', 
    'low-level kernels',
    'kernel development',
    'OpenAFS',
    'GSoC 2025',
    'distributed systems',
    'high-performance computing',
    'Python developer',
    'Java developer',
    'Go developer',
    'React developer',
    'full-stack development',
    'performance optimization',
    'API development',
    'microservices',
    'cloud computing',
    'DevOps',
    'portfolio',
    'software development',
    'programming',
    'technology',
    'computer science'
  ],
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sushil Pandey',
    jobTitle: 'Backend Developer & Systems Engineer',
    description: 'Experienced Backend Developer & Systems Engineer specializing in low-level kernel development, distributed systems, and high-performance applications.',
    url: 'https://contactsushil.me',
    sameAs: [
      'https://github.com/sushilpandeyy',
      'https://twitter.com/sushilpandeyy',
      'https://linkedin.com/in/sushilpandeyy'
    ],
    knowsAbout: [
      'Backend Development',
      'Systems Engineering',
      'Kernel Development',
      'Distributed Systems',
      'Python',
      'Java',
      'Go',
      'React',
      'OpenAFS',
      'GSoC'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Google Summer of Code',
      description: 'GSoC 2025 @OpenAFS'
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
          </div>
        </ThemeProvider>
        <Footer/>


      </body>
    </html>
  );
}