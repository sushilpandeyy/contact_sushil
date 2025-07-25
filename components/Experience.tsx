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
      description: `Selected for GSoC 2025 under the OpenAFS Foundation to contribute to performance improvements in AFS kernel module. 
        Implemented multi-page folio support to improve memory performance and I/O efficiency. 
        Developed testing and benchmarking tools across kernel versions, ensuring compatibility and performance gains.`,
      href: "https://summerofcode.withgoogle.com/",
      logoUrl: "/logo/gsoc.png",
    },
    {
      company: "Myraa Technologies",
      position: "Full Stack Developer (Internship)",
      duration: "Oct 2023 – Jan 2024",
      description: `Architected and built a complete healthcare and insurance system (FlocHealth) from scratch, developing both frontend and 
        backend components using Python-based technologies. 
        Engineered robust Python backend with Tornado framework, implementing disease prediction algorithms and personalized 
        insurance policy recommendation engines for the medical sector.`,
      href: "https://myraa.tech/",
      logoUrl: "/logo/myraa.jpeg",
    },
  ];

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div 
          key={exp.company} 
          className="group border border-border/50 rounded-lg p-6 hover:border-border hover:shadow-sm transition-all duration-300 bg-card"
        >
          {/* Header with Logo, Company, and Duration */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden">
                {exp.logoUrl ? (
                  <img
                    src={exp.logoUrl}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Company and Position */}
              <div>
                {exp.href ? (
                  <a
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-2 group/link"
                  >
                    {exp.company}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.company}
                  </h3>
                )}
                <p className="text-base text-muted-foreground mt-1 font-medium">
                  {exp.position}
                </p>
              </div>
            </div>
            
            {/* Duration */}
            <div className="px-3 py-1 bg-muted/50 rounded-full border border-border/30">
              <p className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                {exp.duration}
              </p>
            </div>
          </div>
          
          {/* Description */}
          <div className="ml-16">
            <p className="text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}