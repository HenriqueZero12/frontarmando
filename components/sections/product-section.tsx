// frontend/components/sections/product-section.tsx
'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { ProductCard } from '@/components/ui/product-card';
import { mockProducts } from '@/lib/mock-data';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  is_featured?: boolean;
  is_active?: boolean;
  order?: number;
}

export function ProductSection() {
  const products = mockProducts.slice(0, 8) as Product[];

  if (!products || products.length === 0) {
    return (
      <Container className="py-16 md:py-24">
        <p className="text-center text-gray-600">Nenhum produto disponível</p>
      </Container>
    );
  }

  return (
    <section id="produtos" className="bg-background py-16 md:py-24">
      <Container>
        <h2 className="text-center text-3xl font-bold text-primary mb-12">
          NOSSOS PRODUTOS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}