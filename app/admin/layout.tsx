'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { Button } from '@/components/ui/button';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated, loading, logout } = useAuth();

  const menuItems = [
    { href: '/admin', label: '📊 Dashboard', icon: '📊' },
    { href: '/admin/banners', label: '🎠 Banners', icon: '🎠' },
    { href: '/admin/produtos', label: '📦 Produtos', icon: '📦' },
    { href: '/admin/redes-sociais', label: '🌐 Redes Sociais', icon: '🌐' },
    { href: '/admin/configuracoes', label: '⚙️ Configurações', icon: '⚙️' },
  ];

  // Se está carregando, mostrar tela em branco
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  // Se não está autenticado, não renderizar (o hook redireciona)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold">Armando Admin</h1>
          <p className="text-sm text-slate-400">Painel de Controle</p>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-slate-700">
          <Button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            🚪 Sair
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Painel de Administração
          </h2>
          <div className="text-sm text-slate-600">
            Bem-vindo, <span className="font-semibold">{typeof window !== 'undefined' ? localStorage.getItem('user_email') : ''}</span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
