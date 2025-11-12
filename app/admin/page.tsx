'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-2">Bem-vindo ao painel de administração</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-600">
              Produtos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-slate-500 mt-1">Carregando...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-600">
              Banners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-slate-500 mt-1">Carregando...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-600">
              Redes Sociais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-slate-500 mt-1">Carregando...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-600">
              Contatos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-slate-500 mt-1">Carregando...</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>Acesse as seções principais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border rounded-lg hover:bg-slate-50 transition text-center">
              <span className="text-2xl">🎠</span>
              <p className="text-sm font-medium mt-2">Banners</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-slate-50 transition text-center">
              <span className="text-2xl">📦</span>
              <p className="text-sm font-medium mt-2">Produtos</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-slate-50 transition text-center">
              <span className="text-2xl">🌐</span>
              <p className="text-sm font-medium mt-2">Redes Sociais</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-slate-50 transition text-center">
              <span className="text-2xl">⚙️</span>
              <p className="text-sm font-medium mt-2">Configurações</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
