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
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={exp.company} className="flex items-center justify-between group">
          {/* Left side - Logo and Text */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0 overflow-hidden">
              {exp.logoUrl ? (
                <img
                  src={exp.logoUrl}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-300 dark:bg-neutral-600 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-neutral-600 dark:text-neutral-400">
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
                  className="text-xl font-medium text-neutral-900 dark:text-neutral-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {exp.company}
                </a>
              ) : (
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                  {exp.company}
                </h3>
              )}
              <p className="text-base text-neutral-600 dark:text-neutral-400 mt-1">
                {exp.position}
              </p>
            </div>
          </div>
          
          {/* Right side - Duration */}
          <div className="text-right">
            <p className="text-base text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
              {exp.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}