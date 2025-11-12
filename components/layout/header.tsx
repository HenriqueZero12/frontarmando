'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Armando Pré Moldados"
            width={104}
            height={126}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <Link
            href="/"
            className="text-[#235942] hover:text-[#FF9F3F] transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/#produtos"
            className="text-[#235942] hover:text-[#FF9F3F] transition font-medium"
          >
            Produtos
          </Link>
          <Link
            href="/quem-somos"
            className="text-[#235942] hover:text-[#FF9F3F] transition font-medium"
          >
            Quem Somos
          </Link>
          <Link
            href="/contact"
            className="text-[#235942] hover:text-[#FF9F3F] transition font-medium"
          >
            Contatos
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="https://api.whatsapp.com/send/?phone=5541999999999&text&type=phone_number&app_absent=0"
          className="hidden md:inline-block bg-[#235942] text-white px-6 py-2 rounded-lg hover:bg-[#FF9F3F] transition font-medium ml-5"
        >
          Orçamento
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 p-2"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Home
            </Link>
            <Link
              href="/#produtos"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Produtos
            </Link>
            <Link
              href="/quem-somos"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Quem Somos
            </Link>
            <Link
              href="/contatos"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Contatos
            </Link>
            <Link
              href="/contatos"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition text-center font-medium"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}