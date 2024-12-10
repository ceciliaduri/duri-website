import React from 'react';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white flex items-center p-8'>
      {/* SOCIAIS */}
      <div className='flex flex-col items-center gap-4 pr-8'>
        <a href="">
          <Image src={'/social/whatsapp.svg'}
            width={26}
            height={26}
            alt='Logo Whatsapp'
          />
        </a>
        <a href="https://www.instagram.com/duritrading/" target='__blank'>
          <Image src={'/social/instagram.svg'}
            width={26}
            height={26}
            alt='Logo Instagram'
          />
        </a>
        <a href="https://www.linkedin.com/company/duritrading/" target='__blank'>
          <Image src={'/social/linkedin.svg'}
            width={26}
            height={26}
            alt='Logo Linkedin'
          />
        </a>
      </div>

      {/* CONTENT */}
      <div className="flex justify-around w-full items-center">
        {/* Matriz */}
        <div className="flex flex-col text-left self-start">
          <p className="font-semibold pb-2">Matriz - Recife</p>
          <div className="flex flex-col gap-4">
            <p className="flex text-wrap gap-1 max-w-60">
              <span className="text-duri-light text-[10px]">
                <MapPin />
              </span>
              Rua Ribeiro de Brito, nº 830.
              Centro Empresarial Iberbras.
              Boa Viagem, Recife - PE.
            </p>
            <p className="flex text-wrap gap-1 max-w-60">
              <span className="text-duri-light text-[10px]">
                <Phone />
              </span>
              +55 (81) 3341-3438
            </p>
          </div>
        </div>

        {/* Logo Duri */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src={'/duriLogo.png'}
            width={200}
            height={80}
            alt="Logo Duri"
          />
          <p className="italic max-w-72 text-center">
            Desde 1998 sendo seu parceiro para soluções integradas em comercio exterior.
          </p>
        </div>

        {/* Filial */}
        <div className="flex flex-col text-left self-start">
          <p className="font-semibold pb-2">Filial - João Pessoa</p>
          <div className="flex flex-col gap-4">
            <p className="flex text-wrap gap-1 max-w-60">
              <span className="text-duri-light text-[10px]">
                <MapPin />
              </span>
              Avenida Dom Pedro II, Nº 962.
              Centro, João Pessoa - PB.
            </p>
          </div>
        </div>
      </div>

    </footer >
  );
};

export default Footer;