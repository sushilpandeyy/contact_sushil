import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Google Summer of Code @ OpenAFS",
      position: "Contributing Developer",
      duration: "May 2025 – Present",
      description: `Selected for GSoC 2025 under the OpenAFS Foundation to contribute to performance improvements in AFS kernel module. Implemented multi-page folio support and developed testing tools across kernel versions.`,
      href: "https://summerofcode.withgoogle.com/programs/2025/projects/ChCleqd6",
      logoUrl: "/logo/gsoc.png",
    },
    {
      company: "Myraa Technologies",
      position: "Full Stack Developer (Internship)",
      duration: "Oct 2023 – Jan 2024",
      description: `Architected and built a complete healthcare and insurance system (FlocHealth) from scratch. Engineered robust Python backend with Tornado framework, implementing disease prediction algorithms.`,
      href: "https://myraa.com/",
      logoUrl: "/logo/myraa.jpeg",
    },
    {
      company: "Freelance Projects",
      position: "Software Developer",
      duration: "Mar 2020 – Present",
      description: `Developed various full-stack applications and backend systems for clients. Built scalable solutions using modern technologies including Python, Node.js, and cloud platforms.`,
      href: "mailto:contact.sushilpandey@gmail.com",
      logoUrl: "/logo/sushil_git.jpeg",
    },
  ];

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div 
          key={exp.company} 
          className="group border border-border/50 rounded-lg p-4 md:p-6 hover:border-border hover:shadow-sm transition-all duration-300 bg-card"
        >
          {/* Header - Mobile First Layout */}
          <div className="space-y-4">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col space-y-3 md:flex-row md:items-start md:justify-between md:space-y-0">
              {/* Company Info */}
              <div className="flex items-center gap-3 flex-1">
                {/* Logo */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden">
                  {exp.logoUrl ? (
                    <img
                      src={exp.logoUrl}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm md:text-lg font-bold text-muted-foreground">
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Company and Position */}
                <div className="flex-1 min-w-0">
                  {exp.href ? (
                    <a
                      href={exp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl font-semibold text-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-2 group/link"
                    >
                      <span className="truncate">{exp.company}</span>
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4 opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0" />
                    </a>
                  ) : (
                    <h3 className="text-lg md:text-xl font-semibold text-foreground truncate">
                      {exp.company}
                    </h3>
                  )}
                  <p className="text-sm md:text-base text-muted-foreground mt-1 font-medium">
                    {exp.position}
                  </p>
                </div>
              </div>
              
              {/* Duration - Mobile: Full width, Desktop: Right aligned */}
              <div className="w-full md:w-auto">
                <div className="px-3 py-1.5 bg-muted/50 rounded-full border border-border/30 text-center md:text-right">
                  <p className="text-xs md:text-sm text-muted-foreground font-medium whitespace-nowrap">
                    {exp.duration}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Description - Full width on mobile, indented on desktop */}
            <div className="md:ml-16">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}