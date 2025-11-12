/* eslint-disable react-hooks/error-boundaries */
// frontend/app/produtos/page.tsx
'use client';

import { Container } from '@/components/ui/container';
import { ProductCard } from '@/components/ui/product-card';
import { mockProducts, mockInfiniteProducts } from '@/lib/mock-data';
import { InfiniteProductList } from './infinite-product-list';

export default function ProdutosPage() {
  try {
    const initialData = mockProducts;

    if (!initialData || initialData.length === 0) {
      return (
        <Container className="py-16 md:py-24">
          <p className="text-center text-gray-600">Nenhum produto encontrado</p>
        </Container>
      );
    }

    return (
      <Container className="py-16 md:py-24">
        <h1 className="text-center text-4xl font-bold text-primary mb-4">
          Nossos Produtos
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira nossa linha completa de produtos em artefatos de cimento
        </p>

        {/* Grid inicial */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {initialData.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

        {/* Componente client-side para infinite scroll */}
        <InfiniteProductList initialPage={2} hasMore={true} />
      </Container>
    );
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    return (
      <Container className="py-16 md:py-24">
        <p className="text-center text-gray-600">Erro ao carregar produtos</p>
      </Container>
    );
  }
}