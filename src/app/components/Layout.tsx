import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/krabdata-logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/services', label: 'Nos Services' },
    { to: '/realisations', label: 'Cas d\'usage' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1B2D5B] shadow-lg' : 'bg-[#1B2D5B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="KRABDATA logo" className="h-14 w-14.5 object-contain rounded-lg border border-[#E8CFA5]" />
            <div className="text-white font-bold text-2xl">
              <span className="font-black">KRAB</span>
              <span className="font-normal text-[#E8CFA5]">DATA</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors duration-200 font-medium
                  ${location.pathname === link.to
                    ? 'text-[#E8CFA5] underline underline-offset-8 decoration-2'
                    : 'text-white hover:text-[#E8CFA5]'}
                `}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#E8CFA5] text-[#1B2D5B] px-6 py-2 rounded-lg font-semibold hover:bg-[#d4b889] transition-colors duration-200"
            >
              Contactez-nous
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#3A5BA0]">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-white hover:text-[#E8CFA5] transition-colors duration-200 py-2 ${
                    location.pathname === link.to ? 'text-[#E8CFA5]' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1B2D5B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="font-black">KRAB</span>
              <span className="text-[#E8CFA5]">DATA</span>
            </div>
            <p className="text-gray-300 text-sm">
              Transformez vos données en levier de performance
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#E8CFA5] text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-[#E8CFA5] text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#E8CFA5] text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Coordonnées</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@krabdata.com" className="hover:text-[#E8CFA5]">
                  contact@krabdata.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+33 X XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>France</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/krabdata/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E8CFA5] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3A5BA0] mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KRABDATA CONSULTING. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link to="/mentions-legales" className="hover:text-[#E8CFA5]">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-[#E8CFA5]">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
