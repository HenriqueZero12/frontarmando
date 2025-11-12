// frontend/components/sections/about-section.tsx
'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { mockAbout } from '@/lib/mock-data';

interface AboutData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function AboutSection() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usando dados mockados
    setTimeout(() => {
      setAbout(mockAbout as AboutData);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <section className="bg-muted py-16 md:py-8">
        <Container>
          <p className="text-center text-gray-500">Carregando...</p>
        </Container>
      </section>
    );
  }

  if (!about) {
    return (
      <section className="bg-muted py-16 md:py-8">
        <Container>
          <p className="text-center text-gray-500">Nenhum dado disponível</p>
        </Container>
      </section>
    );
  }

  return (
    <section id="about" className="bg-muted py-16 md:py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-8 md:gap-12">
          <div
            className="
            relative w-full 
            h-[400px]         
            md:h-auto md:aspect-[4/3] 
            max-h-[700px] 
            rounded-lg overflow-hidden
            md:col-span-3
          "
          >
            {about.image ? (
              <img
                src={about.image}
                alt={about.title || 'Sobre a Armando Pré Moldados'}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Sem imagem</span>
              </div>
            )}
          </div>

          <div
            className="
            relative z-10 
            bg-card shadow-2xl rounded-lg 
            p-8 lg:p-12
            md:-ml-24
            md:col-span-2
          "
          >
            <h2 className="text-3xl font-extrabold text-primary mb-6">
              {about.title}
            </h2>

            <div
              className="prose prose-zinc max-w-none text-foreground/90"
              dangerouslySetInnerHTML={{ __html: about.description }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}