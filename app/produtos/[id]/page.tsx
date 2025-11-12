// frontend/app/produtos/[id]/page.tsx
import { mockProducts, mockProductDetails } from "@/lib/mock-data";
import ProductDetailClient from "./product-detail-client";

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

// ✅ FUNÇÃO OBRIGATÓRIA - SEM "use client"
export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: String(product.id),
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ProductDetailClient params={params} />;
}