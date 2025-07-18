import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Footer from "../components/Footer";

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sushilpandey.dev'),
  title: 'Sushil Pandey - Backend Developer',
  description: 'Backend Developer specializing in low-level kernels via GSoC\'25 @OpenAFS. Frontend isn\'t my forte, but give me the right mood or deadline and I\'ll craft any platform.',
  openGraph: {
    url: 'https://sushilpandey.dev',
    siteName: 'Sushil Pandey Portfolio',
    locale: 'en_US',
    type: 'website',
    title: 'Sushil Pandey - Backend Developer',
    description: 'Backend Developer specializing in low-level kernels via GSoC\'25 @OpenAFS. Frontend isn\'t my forte, but give me the right mood or deadline and I\'ll craft any platform.',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Sushil Pandey - Backend Developer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushil Pandey - Backend Developer',
    description: 'Backend Developer specializing in low-level kernels via GSoC\'25 @OpenAFS. Frontend isn\'t my forte, but give me the right mood or deadline and I\'ll craft any platform.',
    creator: '@sushilpandeyy',
    images: ['/open-graph.png'],
  },
  keywords: [
    'backend developer',
    'systems programming', 
    'low-level kernels',
    'OpenAFS',
    'GSoC 2025',
    'kernel development',
    'distributed systems',
    'software engineering',
    'full-stack development',
    'performance optimization'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
        <Footer/>
      </body>
    </html>
  );
}