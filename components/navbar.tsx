'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll("section");

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
    handleScroll(); // Inicializar o estado

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-16 right-16 bg-white text-[#252525] py-0.5 px-5 flex gap-20 items-center rounded-full shadow-md z-50">
      <Image src={'/duriLogo.png'} alt="Duri Logo" width={120} height={45} />
      <div className="flex justify-between items-center w-screen">
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className={activeSection === 'home' ? 'text-duri-light' : ''}
        >
          Home
        </a>
        <a
          href="#quem-somos"
          onClick={(e) => handleSmoothScroll(e, 'quem-somos')}
          className={activeSection === 'quem-somos' ? 'text-duri-light' : ''}
        >
          Quem Somos
        </a>
        <a
          href="#servicos"
          onClick={(e) => handleSmoothScroll(e, 'servicos')}
          className={activeSection === 'servicos' ? 'text-duri-light' : ''}
        >
          Serviços
        </a>
        <a href="/beneficios-fiscais">
          <p className={activeSection === 'beneficios-fiscais' ? 'text-duri-light' : ''}>
            Benefícios Fiscais
          </p>
        </a>
        <a href="/consultoria-tributaria">
          <p className={activeSection === 'consultoria-tributaria' ? 'text-duri-light' : ''}>
            Consultoria Tributária
          </p>
        </a>
        <a href={'/contato'}>
          <button className="bg-duri-light rounded-full p-1 px-8 font-bold text-white hover:bg-duri-dark">
            Entre em Contato
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
