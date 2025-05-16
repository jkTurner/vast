'use client'

import { ChevronDownIcon } from "@/assets/Icons";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";

interface ShippingMethodProps {
    method: string;
    setMethod: (value: string) => void;
}

const shippingOptions = ['Standard: 14 business days ($5)', 'Express: 7 business days ($20)'];

const ShippingMethod = ({ method, setMethod }: ShippingMethodProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOutsideClick(dropdownRef, () => setIsOpen(false));

    const toggleDropdown = () => setIsOpen(prev => !prev);
    const handleSelect = (value: string) => {
        setMethod(value);
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className="w-full relative">
            <label className="block mb-xxs text-[var(--textLight)] font-semibold text-sm">Shipping Method</label>
            <button
                type="button"
                onClick={toggleDropdown}
                className="input-block cursor-pointer flex items-center justify-between w-full"
            >
                <span className="mr-sm">{method}</span>
                <ChevronDownIcon size={18} className="text-[var(--textLight)]" />
            </button>

            {isOpen && (
                <ul className="absolute z-20 w-full bg-[var(--secondary)] border border-gray-200 mt-1 shadow-sm">
                    {shippingOptions.map((item) => (
                        <li
                            key={item}
                            onClick={() => handleSelect(item)}
                            className="px-4 py-2 hover:bg-[var(--bgMain)] cursor-pointer text-sm"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ShippingMethod;




