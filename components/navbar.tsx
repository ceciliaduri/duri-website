'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let currentSection: string | null = null;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Detectar se scrollou para mudar o estilo do navbar
      setIsScrolled(scrollY > 50);

      // Calcular progresso do scroll (evitar divisão por zero)
      const progress = documentHeight > windowHeight 
        ? Math.min(scrollY / (documentHeight - windowHeight), 1) 
        : 0;
      setScrollProgress(progress);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;

        if (isVisible) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Fechar menu mobile ao redimensionar
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    // Fechar menu mobile com ESC
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const isPathActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/#home', label: 'Home', section: 'home' },
    { href: '/#quem-somos', label: 'Quem Somos', section: 'quem-somos' },
    { href: '/#servicos', label: 'Serviços', section: 'servicos' },
    { href: '/beneficios-fiscais', label: 'Benefícios Fiscais', external: true },
    { href: '/consultoria-tributaria', label: 'Consultoria Tributária', external: true }
  ];

  const handleSmoothScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Fechar menu mobile
    const isHome = pathname === '/';
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  // Prevenir scroll do body quando mobile menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar Principal */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg'
        } mx-6 mt-6 mb-4 rounded-2xl`}>
        
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image 
              src="/duriLogo.png" 
              alt="Duri Logo" 
              width={140} 
              height={50}
              className="transition-all duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.external ? (
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-duri-light ${
                      isPathActive(link.href)
                        ? 'text-duri-light'
                        : 'text-gray-700 hover:text-duri-light'
                    }`}
                  >
                    {link.label}
                    {/* Indicador ativo para páginas externas */}
                    {isPathActive(link.href) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-duri-light to-duri-medium rounded-full"></div>
                    )}
                    {/* Hover effect */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-duri-light to-duri-medium rounded-full transition-all duration-300 group-hover:w-8"></div>
                  </Link>
                ) : (
                  <button
                    onClick={(e) => handleSmoothScroll(e, link.section!)}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-duri-light ${
                      activeSection === link.section
                        ? 'text-duri-light'
                        : 'text-gray-700 hover:text-duri-light'
                    }`}
                  >
                    {link.label}
                    {/* Indicador ativo para seções internas */}
                    {activeSection === link.section && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-duri-light to-duri-medium rounded-full"></div>
                    )}
                    {/* Hover effect */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-duri-light to-duri-medium rounded-full transition-all duration-300 group-hover:w-8"></div>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Área do Cliente */}
            <Link
              href="https://sistemaduri.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-duri-light border border-gray-300 hover:border-duri-light rounded-full transition-all duration-300 group"
            >
              <span>Área do Cliente</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-duri-light transition-colors duration-300"></div>
            </Link>

            {/* Main CTA */}
            <Link href="/contato">
              <button className="relative overflow-hidden bg-gradient-to-r from-duri-light to-duri-medium hover:from-duri-medium hover:to-duri-dark text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10 flex items-center gap-2">
                  Descobrir Economia
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-gray-600 relative transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
              <div className={`absolute -top-2 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`absolute top-2 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-90' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Progress Bar Scroll Indicator */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-duri-light to-duri-medium transition-transform duration-100"
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left' }}
        ></div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'bg-black/50 backdrop-blur-sm opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`} onClick={toggleMobileMenu}>
        <div className={`absolute top-24 left-6 right-6 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`} onClick={(e) => e.stopPropagation()}>
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <div 
                key={link.href}
                className="transform transition-all duration-300"
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                {link.external ? (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-duri-light hover:bg-gray-50 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={(e) => handleSmoothScroll(e, link.section!)}
                    className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-duri-light hover:bg-gray-50 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
            
            <div className={`pt-4 border-t border-gray-200 transform transition-all duration-300 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}>
              
              <Link 
                href="https://sistemaduri.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 px-4 py-3 text-gray-600 hover:text-duri-light border border-gray-300 hover:border-duri-light rounded-lg transition-all duration-300 mb-3"
              >
                <span className="font-medium">Área do Cliente</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </Link>
              
              <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-gradient-to-r from-duri-light to-duri-medium text-white font-bold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Descobrir Economia
                  <span className="bg-yellow-300 text-duri-dark text-xs px-2 py-1 rounded-full font-bold">
                    GRÁTIS
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;