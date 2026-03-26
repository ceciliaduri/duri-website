import React from 'react';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

const navLinks = [
    { href: '#quem-somos', label: 'A Duri' },
    { href: '#servicos', label: 'Plataforma' },
    { href: '#beneficios', label: 'Economia Fiscal' },
    { href: '#consultoria', label: 'Consultoria' },
    { href: '#contato', label: 'Contato' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-duri-bg border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-16">

                <div className="grid md:grid-cols-3 gap-12 md:gap-16">

                    {/* Col 1 — Logo + frase */}
                    <div>
                        <Image
                            src="/duriLogo.png"
                            width={110}
                            height={44}
                            alt="Duri Trading"
                            className="mb-4"
                        />
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Consultoria em comércio exterior e planejamento tributário desde 1998.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <a href="https://wa.me/5581994242112?text=Ol%C3%A1!%20Cheguei%20atrav%C3%A9s%20do%20site." target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                                <Image src="/social/whatsapp.svg" width={24} height={24} alt="WhatsApp" />
                            </a>
                            <a href="https://www.instagram.com/duritrading/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                                <Image src="/social/instagram.svg" width={24} height={24} alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/duritrading/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                                <Image src="/social/linkedin.svg" width={24} height={24} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Col 2 — Navegação */}
                    <div>
                        <p className="text-sm font-semibold text-gray-900 mb-4">Navegação</p>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Contato */}
                    <div>
                        <p className="text-sm font-semibold text-gray-900 mb-4">Contato</p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-duri-light mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-gray-400">Recife — Rua Ribeiro de Brito, 830, Boa Viagem</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-duri-light mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-gray-400">João Pessoa — Av. Dom Pedro II, 962, Centro</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-duri-light flex-shrink-0" />
                                <a href="tel:+5581994242112" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                                    +55 (81) 99424-2112
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5">
                    <p className="text-xs text-gray-300 text-center">
                        &copy; {new Date().getFullYear()} Duri Trading. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
