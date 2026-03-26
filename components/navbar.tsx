'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let currentSection: string | null = null;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsScrolled(scrollY > 50);

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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

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
    { href: '/#quem-somos', label: 'A Duri', section: 'quem-somos' },
    { href: '/#servicos', label: 'Plataforma', section: 'servicos' },
    { href: '/#beneficios', label: 'Economia Fiscal', section: 'beneficios' },
    { href: '/#consultoria', label: 'Consultoria', section: 'consultoria' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const isHome = pathname === '/';
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/duriLogo.png"
              alt="Duri"
              width={120}
              height={44}
              className={`transition-all duration-300 w-[90px] md:w-[120px] h-auto ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.external ? (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isScrolled
                        ? isPathActive(link.href) ? 'text-duri-light' : 'text-gray-600 hover:text-gray-900'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={(e) => handleSmoothScroll(e, link.section!)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isScrolled
                        ? activeSection === link.section ? 'text-duri-light' : 'text-gray-600 hover:text-gray-900'
                        : activeSection === link.section ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://sistemaduri.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/50 hover:text-white'
              }`}
            >
              Área do Cliente
            </Link>

            <button
              onClick={(e) => handleSmoothScroll(e, 'contato')}
              className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-duri-light hover:bg-duri-dark text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20'
              }`}
            >
              Diagnóstico gratuito
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${
              isScrolled ? '' : ''
            }`}
            aria-label="Menu"
          >
            <div className={`w-5 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            } ${isScrolled ? 'bg-gray-800' : 'bg-white'}`} />
            <div className={`w-5 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            } ${isScrolled ? 'bg-gray-800' : 'bg-white'}`} />
            <div className={`w-5 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            } ${isScrolled ? 'bg-gray-800' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'bg-black/50 backdrop-blur-sm opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`} onClick={toggleMobileMenu}>
        <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`} onClick={(e) => e.stopPropagation()}>
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                className="transition-all duration-300"
              >
                {link.external ? (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-duri-light rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={(e) => handleSmoothScroll(e, link.section!)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-duri-light rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                onClick={(e) => handleSmoothScroll(e, 'contato')}
                className="w-full bg-duri-light hover:bg-duri-dark text-white font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                Diagnóstico gratuito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
