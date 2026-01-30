// frontend/components/layout/footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { mockFooter } from "@/lib/mock-data";

interface FooterData {
  id: number;
  slogan: string;
  schedule_title: string;
  schedule_text: string;
  social_title: string;
  email_address: string;
  map_title: string;
  map_embed_url: string;
}

// ✅ REDES SOCIAIS HARDCODED (Cliente não muda)
const SOCIAL_MEDIA = [
  {
    platform: "instagram",
    username: "armandopremoldados",
    url: "https://instagram.com/armandopremoldados",
  },
  {
    platform: "facebook",
    username: "armandopremoldados",
    url: "https://facebook.com/armandopremoldados",
  },
  {
    platform: "whatsapp",
    username: "(51) 8047-2613",
    url: "https://api.whatsapp.com/send?phone=555180472613&text=Ol%C3%A1,%20vim%20pelas%20Redes%20Sociais",
  },
];

export function Footer() {
  const footer = mockFooter as FooterData;

  if (!footer) {
    return null;
  }

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
      <Container>
        {/* Grid 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Logo + Slogan */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Armando Pré Moldados"
                width={144}
                height={119}
              />
            </Link>
            <p className="text-sm text-[#235942]">{footer.slogan}</p>
          </div>

          {/* Coluna 2: Horário */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-600 uppercase border-b border-gray-300 pb-2">
              {footer.schedule_title}
            </h3>
            <p className="text-sm text-[#235942] whitespace-pre-line">
              {footer.schedule_text}
            </p>
          </div>

          {/* Coluna 3: Redes Sociais + Email */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-600 uppercase border-b border-gray-300 pb-2">
              {footer.social_title}
            </h3>
            <div className="space-y-3">
              {/* ✅ REDES SOCIAIS HARDCODED */}
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#235942] hover:text-[#FF9F3F] transition"
                >
                  <SocialIcon platform={social.platform} />
                  <span>{social.username}</span>
                </a>
              ))}

              {/* Email */}
              {footer.email_address && (
                <a
                  href={`mailto:${footer.email_address}`}
                  className="flex items-center gap-3 text-sm text-[#235942] hover:text-[#FF9F3F] transition mt-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{footer.email_address}</span>
                </a>
              )}
            </div>
          </div>

          {/* Coluna 4: Mapa */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-600 uppercase border-b border-gray-300 pb-2">
              {footer.map_title}
            </h3>
            {footer.map_embed_url && (
              <div className="aspect-square rounded-lg overflow-hidden border border-gray-300 h-64">
                <div
                  dangerouslySetInnerHTML={{ __html: footer.map_embed_url }}
                  className="w-full h-full [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0"
                />
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 Armando Pré-moldados. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

// Componente para renderizar ícone de rede social
function SocialIcon({ platform }: { platform: string }): React.ReactNode {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.561 1.078 3.641L6.332 17.82l4.308-1.429c1.046.574 2.228.904 3.459.905 3.18 0 5.767-2.587 5.768-5.766.001-1.583-.623-3.073-1.757-4.206-1.134-1.134-2.623-1.756-4.206-1.758l-.002.003zm3.415 13.304l-.999-.329c-1.15.896-2.529 1.421-3.992 1.422-2.667-.025-4.834-2.191-4.858-4.857-.02-1.289.379-2.521 1.041-3.56l-.52-1.782 1.974.654c.864-.745 2.002-1.187 3.361-1.191 2.667.025 4.834 2.191 4.858 4.857.02 1.289-.379 2.521-1.041 3.56l.52 1.782-1.744-.576z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 002.856-3.54 9.88 9.88 0 01-2.828.856 4.91 4.91 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.82 4.82 0 00-8.835 4.395A13.74 13.74 0 011.671 3.149a4.824 4.824 0 001.49 6.437A4.805 4.805 0 01.96 9.456v.063a4.823 4.823 0 003.86 4.726 4.822 4.822 0 002.212.085 4.823 4.823 0 004.502 3.35A9.677 9.677 0 010 16.55a13.702 13.702 0 007.548 2.212c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    tiktok: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.498 3.71l1.413-1.413A2 2 0 0 1 24 3.71v16.58a2 2 0 0 1-3.089 1.413l-1.413-1.413V3.71zM8.5 2c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h7c2.206 0 4-1.794 4-4V6c0-2.206-1.794-4-4-4h-7zm0 2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      </svg>
    ),
  };

  return icons[platform] || null;
}
