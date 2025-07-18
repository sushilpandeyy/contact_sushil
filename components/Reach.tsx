import { Github, Linkedin, Mail, Phone, MapPin, Twitter, Instagram, Globe, Calendar } from 'lucide-react';

export default function Reach() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact.sushilpandeyy@gmail.com',
      href: 'mailto:contact.sushilpandeyy@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8545066691',
      href: 'tel:+918545066691',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sushilpandeyy',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/contactsushil',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/sushilpandeyy',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/sushilpandeyy',
    },
    {
      icon: Globe,
      label: 'Blog',
      href: 'https://blog.contactsushil.me',
    },
    {
      icon: Globe,
      label: 'Website',
      href: 'https://contactsushil.me',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-3">
            <info.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            {info.href ? (
              <a
                href={info.href}
                className="text-neutral-800 dark:text-neutral-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                {info.value}
              </a>
            ) : (
              <span className="text-neutral-800 dark:text-neutral-200">{info.value}</span>
            )}
          </div>
        ))}
      </div>

      {/* Booking Button */}
      <div className="pt-4">
        <a
          href="https://cal.com/sushil-pandey/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-sm">Book a Meeting</span>
        </a>
      </div>

      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
          Find me online
        </h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <link.icon className="w-4 h-4" />
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}