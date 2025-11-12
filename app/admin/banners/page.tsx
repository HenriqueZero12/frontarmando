'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getBanners } from '@/lib/api';

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta_text: string;
  cta_link: string;
  image: string;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function BannersPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        // Temporariamente sem token (você vai adicionar autenticação depois)
        // const token = localStorage.getItem('token') || '';
        // const data = await getBanners(token);
        // setBanners(data);
        
        // Por enquanto, teste com dados vazios
        setBanners([]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar banners');
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Banners Hero</h1>
          <p className="text-slate-600 mt-2">Gerencie os banners da página inicial</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          + Novo Banner
        </Button>
      </div>

      {/* Banners List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Banners</CardTitle>
          <CardDescription>Todos os banners ativos</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-slate-500">Carregando...</p>
          ) : error ? (
            <div className="text-red-600 p-4 bg-red-50 rounded-lg">
              <p className="font-medium">Erro ao carregar</p>
              <p className="text-sm">{error}</p>
            </div>
          ) : banners.length === 0 ? (
            <p className="text-slate-500 text-center py-8">
              Nenhum banner criado ainda
            </p>
          ) : (
            <div className="space-y-4">
              {banners.map((banner) => (
                <div
                  key={banner.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{banner.title}</h3>
                    <p className="text-sm text-slate-600">{banner.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      Deletar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}