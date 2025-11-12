// frontend/app/produtos/infinite-product-list.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ProductCard } from '@/components/ui/product-card';
import { mockInfiniteProducts } from '@/lib/mock-data';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  is_featured?: boolean;
  is_active?: boolean;
  order?: number;
}

interface Props {
  initialPage: number;
  hasMore: boolean;
}

export function InfiniteProductList({ initialPage, hasMore: initialHasMore }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      // Simula carregamento com dados mockados
      await new Promise(resolve => setTimeout(resolve, 300));

      // Busca dados mockados baseado na página
      const pageProducts = mockInfiniteProducts[`page_${page}` as keyof typeof mockInfiniteProducts] || [];
      
      if (pageProducts && pageProducts.length > 0) {
        setProducts(prev => [...prev, ...pageProducts]);
        setPage(prev => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loading, page]);

  return (
    <>
      {/* Grid de produtos adicionais */}
      {products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}

      {/* Elemento observador para infinite scroll */}
      {hasMore && <div ref={observerTarget} className="h-10" />}

      {/* Loading state */}
      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Carregando mais produtos...</p>
        </div>
      )}

      {/* Fim da lista */}
      {!hasMore && products.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">Você viu todos os produtos!</p>
        </div>
      )}
    </>
  );
}