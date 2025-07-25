// lib/config.ts
export const siteConfig = {
  name: 'Sushil Pandey',
  title: 'Sushil Pandey - Backend Developer',
  description: 'Backend Developer specializing in low-level kernels via GSoC\'25 @OpenAFS. Frontend isn\'t my forte, but give me the right mood or deadline and I\'ll craft any platform.',
  url: 'https://sushilpandey.dev',
  author: 'Sushil Pandey',
  email: 'contact.sushilpandeyy@gmail.com',
  phone: '+91 8545066691',
  location: 'Andhra Pradesh, India',
  social: {
    github: 'https://github.com/sushilpandeyy',
    linkedin: 'https://linkedin.com/in/contactsushil',
    twitter: 'https://twitter.com/sushilpandeyy',
    instagram: 'https://instagram.com/sushilpandeyy',
    blog: 'https://blog.contactsushil.me',
    website: 'https://contactsushil.me'
  },
  keywords: [
    'portfolio',
    'backend developer',
    'systems programming',
    'low-level kernels',
    'OpenAFS',
    'GSoC',
    'full-stack',
    'web development',
    'software engineering',
    'kernel development',
    'distributed systems',
    'performance optimization'
  ],
  navItems: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
}

export const metadataConfig = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
    creator: '@sushilpandeyy',
  },
  icons: {
    icon: '/photo/sushil_git.jpeg',
    shortcut: '/photo/sushil_git.jpeg',
    apple: '/photo/sushil_git.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}