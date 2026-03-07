import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/Solar_Grid_Main_Logo.jpeg" alt="SolarGrid" className="h-12 w-auto rounded-lg" />
            </div>
            <p className="text-blue-200 text-sm">
              Leading solar EPC company in Indore, delivering end-to-end renewable energy solutions for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-orange-400 transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-orange-400 transition-colors text-sm">Services</a></li>
              <li><a href="#brands" className="text-blue-200 hover:text-orange-400 transition-colors text-sm">Brand Partners</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-orange-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-orange-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-blue-200 text-sm">Residential Solar</li>
              <li className="text-blue-200 text-sm">Commercial Solutions</li>
              <li className="text-blue-200 text-sm">Industrial Projects</li>
              <li className="text-blue-200 text-sm">Maintenance & Support</li>
              <li className="text-blue-200 text-sm">Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-blue-200 text-sm">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>solargridforyou@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-blue-200 text-sm">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>+91 6232011183/85</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-white/10 border border-white/20 p-2 rounded-lg hover:border-orange-400 transition-all">
                  <Facebook className="w-5 h-5 text-orange-400" />
                </a>
                <a href="#" className="bg-white/10 border border-white/20 p-2 rounded-lg hover:border-orange-400 transition-all">
                  <Twitter className="w-5 h-5 text-orange-400" />
                </a>
                <a href="#" className="bg-white/10 border border-white/20 p-2 rounded-lg hover:border-orange-400 transition-all">
                  <Linkedin className="w-5 h-5 text-orange-400" />
                </a>
                <a href="#" className="bg-white/10 border border-white/20 p-2 rounded-lg hover:border-orange-400 transition-all">
                  <Instagram className="w-5 h-5 text-orange-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © 2024 SolarGrid. All rights reserved. | Indore, Madhya Pradesh
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
