export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Solar_Grid_Main.jpeg" alt="SolarGrid Renewables" className="h-16 w-auto" />
          </div>

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
        </div>
      </nav>
    </header>
  );
}
