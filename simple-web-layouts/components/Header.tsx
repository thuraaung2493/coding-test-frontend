'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between items-center bg-slate-50 relative">
      <h1 className="text-xl font-bold text-pink-400">LOGO</h1>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4 items-center">
        <a href="#" className="text-gray-600 hover:text-black">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Discovery
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Photos
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Contact
        </a>
        <a href="#">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </a>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-10">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Discovery
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Photos
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
            <a href="#" className="flex items-center space-x-2">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
