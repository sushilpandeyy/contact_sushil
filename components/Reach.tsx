import { Github, Linkedin, Mail, Phone, MapPin, Twitter, Instagram, Globe, Calendar, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

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
      value: 'Andhra Pradesh, India',
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
    <div className="space-y-8">
      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((info, index) => (
          <div 
            key={index} 
            className="group p-4 rounded-lg border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm bg-card"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-muted/50 group-hover:bg-muted transition-colors">
                <info.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm font-medium text-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group/link"
                  >
                    <span className="truncate">{info.value}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0" />
                  </a>
                ) : (
                  <span className="text-sm font-medium text-foreground truncate block">
                    {info.value}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center">
        <Button size="lg" className="gap-2 font-medium" asChild>
          <a
            href="https://cal.com/sushil-pandey/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="w-4 h-4" />
            Schedule a Meeting
          </a>
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Find me online
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm bg-card"
            >
              <div className="p-2 rounded-full bg-muted/50 group-hover:bg-muted transition-colors">
                <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-foreground group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {link.label}
                </span>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}