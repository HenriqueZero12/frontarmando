// frontend/components/sections/featured-products-section.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { mockFeaturedSection, mockFeaturedProducts } from '@/lib/mock-data';

interface FeaturedProduct {
  id: number;
  title: string;
  image: string;
  cta_text: string;
  cta_link: string;
}

interface FeaturedSection {
  id: number;
  title: string;
  background_image: string;
}

export function FeaturedProductsSection() {
  const [section, setSection] = useState<FeaturedSection | null>(null);
  const [products, setProducts] = useState<FeaturedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionTitle = "PRODUTOS EM DESTAQUE";

  useEffect(() => {
    // Usando dados mockados
    setTimeout(() => {
      setSection(mockFeaturedSection);
      setProducts(mockFeaturedProducts);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <section className="relative bg-primary py-16 md:py-24">
        <Container>
          <p className="text-center text-primary-foreground">Carregando...</p>
        </Container>
      </section>
    );
  }

  if (!section || products.length === 0) {
    return (
      <section className="relative bg-primary py-16 md:py-24">
        <Container>
          <p className="text-center text-primary-foreground">Nenhum produto em destaque</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative bg-primary py-16 md:py-24">
      {section.background_image && (
        <img
          src={section.background_image}
          alt="Fundo"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
        />
      )}
      <div className="relative z-10">
        <Container>
          <h2 className="text-center text-3xl font-bold text-primary-foreground mb-12">
            {sectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-5"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="mt-auto p-4">
                  <h3 className="text-2xl font-semibold text-primary text-center hover:text-[#FF9F3F] cursor-pointer mb-4">
                    {product.title}
                  </h3>

                  {product.cta_link && product.cta_text && (
                    <Button asChild className="block w-1/2 mx-auto px-6 py-2 bg-[#235942] text-white font-medium rounded-lg hover:bg-[#FF9F3F] transition-colors text-center">
                      <Link href={product.cta_link}>{product.cta_text}</Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}