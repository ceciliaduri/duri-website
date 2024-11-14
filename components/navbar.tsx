'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-10 left-10 right-10 bg-white text-[#252525] py-2 px-6 flex gap-20 items-center rounded-full shadow-md z-50">
      <Image src={'/duriLogo.png'} alt="Duri Logo" width={154} height={52} />
      <div className='flex justify-between items-center w-screen'>
        <Link href="#home" scroll={false}>
          <p className={activeSection === 'home' ? 'text-blue-500' : ''}>
            Home
          </p>
        </Link>
        <Link href="#quem-somos" scroll={false}>
          <p className={activeSection === 'quem-somos' ? 'text-blue-500' : ''}>
            Quem Somos
          </p>
        </Link>
        <Link href="#servicos" scroll={false}>
          <p className={activeSection === 'servicos' ? 'text-blue-500' : ''}>
            Serviços
          </p>
        </Link>
        <Link href="#beneficios-fiscais" scroll={false}>
          <p className={activeSection === 'beneficios-fiscais' ? 'text-blue-500' : ''}>
            Benefícios Fiscais
          </p>
        </Link>
        <Link href="#consultoria-tributaria" scroll={false}>
          <p className={activeSection === 'consultoria-tributaria' ? 'text-blue-500' : ''}>
            Consultoria Tributária
          </p>
        </Link>
        <button className="bg-duri-light rounded-full p-3 px-8 font-bold text-white hover:bg-duri-dark">
          Entre em Contato
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
