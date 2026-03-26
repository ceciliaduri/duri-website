import React from 'react';
import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
    const message = encodeURIComponent('Olá, vim do site e tenho interesse nos serviços de trading da Duri');
    const url = `https://wa.me/5581994242112?text=${message}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5b] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Fale conosco pelo WhatsApp"
        >
            <Image src="/social/whatsapp.svg" width={28} height={28} alt="WhatsApp" />
        </a>
    );
};

export default WhatsAppButton;
