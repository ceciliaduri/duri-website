'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let currentSection: string | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;

        if (isVisible) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-6 left-16 right-16 bg-white text-[#252525] py-0.5 px-5 flex gap-20 items-center rounded-full shadow-md z-50">
      <Image src={'/duriLogo.png'} alt="Duri Logo" width={120} height={45} />
      <div className="flex justify-between items-center w-screen">
        <Link
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            const isHome = window.location.pathname === '/';
            if (isHome) {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#home';
            }
          }}
          className={activeSection === 'home' ? 'text-duri-light' : ''}
        >
          Home
        </Link>
        <Link
          href="/#quem-somos"
          onClick={(e) => {
            e.preventDefault();
            const isHome = window.location.pathname === '/';
            if (isHome) {
              document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#quem-somos';
            }
          }}
          className={activeSection === 'quem-somos' ? 'text-duri-light' : ''}
        >
          Quem Somos
        </Link>
        <Link
          href="/#servicos"
          onClick={(e) => {
            e.preventDefault();
            const isHome = window.location.pathname === '/';
            if (isHome) {
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#servicos';
            }
          }}
          className={activeSection === 'servicos' ? 'text-duri-light' : ''}
        >
          Serviços
        </Link>
        <Link href="/beneficios-fiscais">
          <p className={activeSection === 'beneficios-fiscais' ? 'text-duri-light' : ''}>
            Benefícios Fiscais
          </p>
        </Link>
        <Link href="/consultoria-tributaria">
          <p className={activeSection === 'consultoria-tributaria' ? 'text-duri-light' : ''}>
            Consultoria Tributária
          </p>
        </Link>
        <Link href={'/contato'}>
          <button className="bg-duri-light rounded-full p-1 px-8 font-bold text-white hover:bg-duri-dark">
            Entre em Contato
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
