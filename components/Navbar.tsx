import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Supported Models', href: '#stats' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Download', href: '#download' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-nexus-dark/95 backdrop-blur-md border-nexus-card'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-nexus-accent/10 p-2 rounded-lg border border-nexus-accent/20">
                <Zap className="h-6 w-6 text-nexus-accent" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Nexus<span className="text-nexus-accent">Tool</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-nexus-accent transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-nexus-accent hover:bg-nexus-accentHover text-white px-5 py-2 rounded-md text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)]">
                Login
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-nexus-dark border-b border-nexus-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-nexus-card"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-nexus-accent hover:bg-nexus-card"
              >
                Login / Register
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;