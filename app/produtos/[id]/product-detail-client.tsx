// frontend/app/produtos/[id]/product-detail-client.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { mockProductDetails, mockProducts } from "@/lib/mock-data";

interface ProductDetailData {
  id: number;
  banner_image: string;
  banner_title: string;
  section_image: string;
  section_subtitle: string;
  section_description: string;
  advantages_title: string;
  advantages_description: string;
  applications_title: string;
  applications_description: string;
}

interface ProductData {
  id: number;
  title: string;
  description: string;
}

export default function ProductDetailClient({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [detail, setDetail] = useState<ProductDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const p = await params;
        setProductId(p.id);

        // Busca dados mockados direto
        const productIdNum = parseInt(p.id);
        const mockProduct = mockProducts.find(prod => prod.id === productIdNum);
        const mockDetail = mockProductDetails[productIdNum];

        if (!mockProduct) throw new Error("Produto não encontrado");

        setProduct({
          id: mockProduct.id,
          title: mockProduct.title,
          description: mockProduct.description,
        });

        if (mockDetail) {
          setDetail(mockDetail);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [params]);

  if (loading) {
    return (
      <Container className="py-16 text-center">
        <p className="text-gray-600">Carregando...</p>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-16 text-center">
        <p className="text-red-600">Produto não encontrado</p>
      </Container>
    );
  }

  return (
    <>
      <section className="relative w-full h-[400px] overflow-hidden">
        <img
          src={detail?.banner_image}
          alt={detail?.banner_title || product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 h-full flex items-center">
          <Container>
            <div className="flex items-center gap-4">
              <Link
                href="/produtos"
                className="text-white hover:text-secondary transition-colors"
              >
                <ChevronLeft size={32} />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
                {detail?.banner_title || product.title}
              </h1>
            </div>
          </Container>
        </div>
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-delay-100">
            {detail?.section_subtitle && (
              <p className="text-secondary font-semibold mb-2">
                {detail.section_subtitle}
              </p>
            )}
            <h2 className="text-3xl font-bold text-primary mb-6">
              {product.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-wrap">
              {detail?.section_description || product.description}
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="animate-fade-in-delay-200 hover-lift"
            >
              Solicitar Orçamento
            </Button>
          </div>
          <div className="relative w-full overflow-hidden rounded-lg animate-fade-in-delay-200">
            <img
              src={detail?.section_image}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </Container>

      <section className="bg-muted py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-delay-100">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {detail?.advantages_title || "Vantagens"}
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {detail?.advantages_description}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-delay-200">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {detail?.applications_title || "Principais Aplicações"}
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {detail?.applications_description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productId={productId ? parseInt(productId) : undefined}
      />
    </>
  );
}