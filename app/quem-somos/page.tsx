// frontend/app/quem-somos/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { MessageCircle } from 'lucide-react';
import { mockQuemSomos } from '@/lib/mock-data';

interface QuemSomosData {
  id: number;
  banner_image: string;
  banner_title: string;
  section_title: string;
  section_description: string;
  section_image: string;
  whatsapp_link: string;
  cta_text: string;
}

export default function QuemSomosPage() {
  const [data, setData] = useState<QuemSomosData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento de dados mockados
    setTimeout(() => {
      setData(mockQuemSomos as QuemSomosData);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <Container className="py-16 text-center">
        <p className="text-gray-600">Carregando...</p>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container className="py-16 text-center">
        <p className="text-red-600">Dados não encontrados</p>
      </Container>
    );
  }

  return (
    <>
      {/* Banner */}
      <section
        className="relative w-full h-96 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${data.banner_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{data.banner_title}</h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#235942]">
                {data.section_title}
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-lg">
                {data.section_description}
              </p>
              <a
                href={data.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#235942] hover:bg-[#ff9f3f] text-white font-semibold rounded transition"
              >
                <MessageCircle size={20} />
                {data.cta_text}
              </a>
            </div>

            {/* Imagem */}
            {data.section_image && (
              <div className="flex justify-center">
                <img
                  src={data.section_image}
                  alt={data.section_title}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}