'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  is_active?: boolean;
}

export default function ProductsAdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await fetch('http://localhost:8000/api/products/?page_size=100', {
          headers: { 'Authorization': token ? `Bearer ${token}` : '' },
        });
        if (response.ok) {
          const data = await response.json();
          setProducts(data.results || data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Produtos</h1>
          <Link href="/admin/products/new">
            <Button>+ Novo Produto</Button>
          </Link>
        </div>

        <Card>
          <CardContent className="pt-6">
            {loading ? (
              <p className="text-gray-500">Carregando...</p>
            ) : products.length === 0 ? (
              <p className="text-gray-500">Nenhum produto cadastrado</p>
            ) : (
              <div className="space-y-2">
                {products.map((p: Product) => (
                  <div key={p.id} className="flex justify-between items-center p-3 border rounded hover:bg-gray-50">
                    <div>
                      <p className="font-semibold">{p.title}</p>
                      <p className="text-sm text-gray-500">{p.description?.substring(0, 50)}...</p>
                    </div>
                    <Link href={`/admin/products/${p.id}`}>
                      <Button variant="outline" size="sm">Editar</Button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
