'use client'

import { ChevronDownIcon } from "@/assets/Icons";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";

interface GenderSelectProps {
  gender: string;
  setGender: (value: string) => void;
}

const genderOptions = ['Male', 'Female', 'Unspecified'];

const GenderSelect = ({ gender, setGender }: GenderSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const handleSelect = (value: string) => {
    setGender(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="w-52 relative">
        <label className="block mb-xxs text-[var(--textLight)] font-semibold text-sm mr">Gender</label>
        <button
            type="button"
            onClick={toggleDropdown}
            className="input-block w-auto cursor-pointer flex items-center justify-between"
        >
            <span className="mr-sm">{gender}</span>
            <ChevronDownIcon size={18} className="text-[var(--textLight)]" />
        </button>

      {isOpen && (
        <ul className="absolute z-20 w-full bg-[var(--secondary)] border border-gray-200 mt-1 shadow-sm">
          {genderOptions.map((g) => (
            <li
              key={g}
              onClick={() => handleSelect(g)}
              className="px-4 py-2 hover:bg-[var(--bgMain)] cursor-pointer text-sm"
            >
              {g}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenderSelect;