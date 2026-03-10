import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Solar_Grid_Main.jpeg" alt="SolarGrid Renewables" className="h-16 w-auto" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-blue-900 hover:text-orange-500 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-blue-900 hover:text-orange-500 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('brands')} className="text-blue-900 hover:text-orange-500 transition-colors font-medium">
              Brands
            </button>
            <button onClick={() => scrollToSection('about')} className="text-blue-900 hover:text-orange-500 transition-colors font-medium">
              About
            </button>
            <a href="https://quoatation-application.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-2 rounded-lg transition-all font-medium">
              Login
            </a>
            <button onClick={() => scrollToSection('contact')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md shadow-orange-500/30 hover:shadow-orange-500/50 transition-all font-medium">
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-blue-900 hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-4 flex flex-col space-y-2 border-t border-gray-200 pt-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left text-blue-900 hover:text-orange-500 transition-colors font-medium py-2 px-2"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left text-blue-900 hover:text-orange-500 transition-colors font-medium py-2 px-2"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('brands')}
              className="text-left text-blue-900 hover:text-orange-500 transition-colors font-medium py-2 px-2"
            >
              Brands
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-blue-900 hover:text-orange-500 transition-colors font-medium py-2 px-2"
            >
              About
            </button>
            <a
              href="https://quoatation-application.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-block text-center bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-2 rounded-lg transition-all font-medium"
            >
              Login
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md shadow-orange-500/30 hover:shadow-orange-500/50 transition-all font-medium"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
