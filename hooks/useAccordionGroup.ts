'use client'
import { useState, useCallback } from 'react';

export const useAccordionGroup = (rowCount: number, itemsPerRow: number) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = useCallback((itemValue: string) => {
        setOpenItems((prevOpenItems) => {
            const rowIndex = Math.floor(parseInt(itemValue.split('-')[1]) / itemsPerRow);
            const newOpenItems = prevOpenItems.filter(
                (item) => Math.floor(parseInt(item.split('-')[1]) / itemsPerRow) === rowIndex
            );

            if (newOpenItems.includes(itemValue)) {
                return newOpenItems.filter((item) => item !== itemValue);
            } else {
                return [...newOpenItems, itemValue];
            }
        });
    }, [itemsPerRow]);

    return { openItems, toggleItem };
};
