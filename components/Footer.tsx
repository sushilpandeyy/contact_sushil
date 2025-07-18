export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 mt-16">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          <p>© {currentYear} Sushil Pandey</p>
        </div>
      </div>
    </footer>
  );
}