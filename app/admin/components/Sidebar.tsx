'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { label: 'Cabeçalho', href: '/admin/header', icon: '🔗' },
  { label: 'Banner da Home', href: '/admin/hero', icon: '🖼️' },
  { label: 'Faixa de Status', href: '/admin/status', icon: '📈' },
  { label: 'Produtos', href: '/admin/products', icon: '📦' },
  { label: 'Detalhe dos Produtos', href: '/admin/product-detail', icon: '📑' },
  { label: 'Depoimentos', href: '/admin/testimonials', icon: '🎥' },
  { label: 'Avaliações Google', href: '/admin/reviews', icon: '⭐' },
  { label: 'Produtos em Destaque', href: '/admin/featured', icon: '✨' },
  { label: 'Rodapé', href: '/admin/footer', icon: '🔚' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white h-screen p-4 border-r border-gray-200 flex flex-col overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Armando Admin</h1>
        <p className="text-sm text-gray-500">Painel de Controle</p>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              pathname === section.href || pathname.startsWith(section.href + '/')
                ? 'bg-blue-100 text-blue-900 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <span>{section.label}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t pt-4 mt-4">
        <Link
          href="/admin/login"
          className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition text-sm"
        >
          🚪 Sair
        </Link>
      </div>
    </aside>
  );
}
