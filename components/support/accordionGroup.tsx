'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useAccordionGroup } from '@/hooks/useAccordionGroup';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '../ui/button';

interface AccordionGroupProps {
    services: {
        icon: string;
        title: string;
        content: string;
        hasButton: boolean;
    }[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ services }) => {
    const { openItems, toggleItem } = useAccordionGroup(4, 2);
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const adjustHeights = () => {
            for (let i = 0; i < accordionRefs.current.length; i += 2) {
                const first = accordionRefs.current[i];
                const second = accordionRefs.current[i + 1];
                if (first && second) {
                    const maxHeight = Math.max(first.scrollHeight, second.scrollHeight);
                    first.style.height = `${maxHeight}px`;
                    second.style.height = `${maxHeight}px`;
                }
            }
        };

        adjustHeights();
        window.addEventListener('resize', adjustHeights);

        return () => window.removeEventListener('resize', adjustHeights);
    }, [openItems]);

    return (
        <div className="grid grid-cols-2 gap-8 w-full p-16">
            {services.map((service, index) => (
                <div key={index} className='flex items-start gap-4 justify-center'>
                    <Image src={service.icon} width={54} height={54} alt={service.title} className='bg-[#FEF2F2] p-2 rounded-md shadow-md' />
                    <Accordion type="multiple" value={openItems} onValueChange={() => toggleItem(`item-${index}`)} className='w-full'>
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className='font-bold'>{service.title}</AccordionTrigger>
                            <AccordionContent className='h-full' ref={el => { accordionRefs.current[index] = el; }}>
                                <div className="flex flex-col h-full">
                                    <p className="flex-grow mb-8 text-[#6B6B6B]">{service.content}</p>
                                    {service.hasButton && (
                                        <div className="flex justify-center w-full pb-4">
                                            <Button className='w-1/2 bg-duri-light rounded-full font-bold'>
                                                Saiba Mais
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            ))}
        </div>
    );
};

export default AccordionGroup;

