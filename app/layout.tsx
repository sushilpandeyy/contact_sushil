import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Sushil Pandet',
  description: 'Full-stack developer crafting innovative solutions. Available for new opportunities.',
  openGraph: {
    url: '<https://sushilpandet.dev>',
    siteName: 'Sushil Pandet Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Sushil Pandet - Portfolio'
    }],
  },
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
      </body>
    </html>
  );
}
