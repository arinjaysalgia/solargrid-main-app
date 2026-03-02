import { Sun } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-orange-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange-500 to-blue-600 p-2 rounded-lg">
              <Sun className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">SolarGrid</h1>
              <p className="text-xs text-orange-400">Powering Tomorrow</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-orange-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-orange-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('brands')} className="text-gray-300 hover:text-orange-400 transition-colors">
              Brands
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
