'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuthGuard } from '@/lib/hooks/useAuthGuard';
import { getProducts } from '@/lib/api';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface DashboardStats {
  products: number;
  contacts: number;
  banners: number;
}

export default function DashboardPage() {
  useAuthGuard();

  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    products: 0,
    contacts: 0,
    banners: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) return;

        // Buscar produtos
        const products = await getProducts(token);
        setStats(prev => ({
          ...prev,
          products: products.length,
        }));
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_email');
    router.push('/admin/login');
  };

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo ao painel administrativo!</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
        >
          <LogOut size={20} />
          Sair
        </button>
      </div>

      {loading ? (
        <p className="text-gray-600">Carregando...</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {[
            { title: 'Produtos', count: stats.products.toString(), color: 'bg-blue-100 text-blue-900' },
            { title: 'Contatos', count: stats.contacts.toString(), color: 'bg-green-100 text-green-900' },
            { title: 'Banners', count: stats.banners.toString(), color: 'bg-yellow-100 text-yellow-900' },
            { title: 'Avaliações', count: '8', color: 'bg-purple-100 text-purple-900' },
          ].map((item) => (
            <div key={item.title} className={`${item.color} p-6 rounded-lg`}>
              <p className="text-sm font-medium mb-2">{item.title}</p>
              <p className="text-3xl font-bold">{item.count}</p>
            </div>
          ))}
        </div>
      )}

      {/* Links para páginas de gerenciamento */}
    <div className="mt-12 grid grid-cols-2 gap-6">
      <Link href="/admin/hero" className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition block">
        <h3 className="text-xl font-bold mb-2">Gerenciar Banners</h3>
        <p className="text-sm opacity-90">Edite os banners da home</p>
      </Link>
      <Link href="/admin/products" className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition block">
        <h3 className="text-xl font-bold mb-2">Gerenciar Produtos</h3>
        <p className="text-sm opacity-90">Adicione ou edite produtos</p>
      </Link>
      <Link href="/admin/footer" className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition block">
        <h3 className="text-xl font-bold mb-2">Configurar Footer</h3>
        <p className="text-sm opacity-90">Links sociais e informações</p>
      </Link>
      <Link href="/admin/settings" className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition block">
        <h3 className="text-xl font-bold mb-2">Configurações</h3>
        <p className="text-sm opacity-90">Temas e preferências</p>
      </Link>
    </div>
    </main>
  );
}
