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
    <nav className="fixed top-6 left-6 right-6 bg-white p-0.5 px-2 flex justify-between items-center rounded-full shadow-md z-50">
      <Image src={'/duriLogo.png'} alt="Duri Logo" width={154} height={52} />
      <div className="flex gap-12 text-[#252525]">
        <Link href="#quem-somos" scroll={false}>
          <span className={activeSection === 'quem-somos' ? 'text-blue-500' : ''}>
            Quem Somos
          </span>
        </Link>
        <Link href="#servicos" scroll={false}>
          <span className={activeSection === 'servicos' ? 'text-blue-500' : ''}>
            Serviços
          </span>
        </Link>
        <Link href="#beneficios-fiscais" scroll={false}>
          <span className={activeSection === 'beneficios-fiscais' ? 'text-blue-500' : ''}>
            Benefícios Fiscais
          </span>
        </Link>
        <Link href="#consultoria-tributaria" scroll={false}>
          <span className={activeSection === 'consultoria-tributaria' ? 'text-blue-500' : ''}>
            Consultoria Tributária
          </span>
        </Link>
      </div>
      <button className="bg-duri-light rounded-full p-2 px-8 font-bold text-white hover:bg-duri-dark">
        Entre em Contato
      </button>
    </nav>
  );
};

export default Navbar;
