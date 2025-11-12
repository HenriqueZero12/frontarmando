'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ProductDetailAdminPage() {
  const [form, setForm] = useState({
    banner_title: '',
    section_subtitle: '',
    section_description: '',
    advantages_title: 'Vantagens',
    advantages_description: '',
    applications_title: 'Aplicações',
    applications_description: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      alert('Detalhes do produto salvos!');
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Banner</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <label className="block font-medium mb-2">Título do Banner</label>
              <Input name="banner_title" value={form.banner_title} onChange={handleChange} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Seção Principal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Subtítulo</label>
              <Input name="section_subtitle" value={form.section_subtitle} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-medium mb-2">Descrição</label>
              <Textarea name="section_description" value={form.section_description} onChange={handleChange} rows={4} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vantagens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Título</label>
              <Input name="advantages_title" value={form.advantages_title} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-medium mb-2">Descrição</label>
              <Textarea name="advantages_description" value={form.advantages_description} onChange={handleChange} rows={4} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aplicações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Título</label>
              <Input name="applications_title" value={form.applications_title} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-medium mb-2">Descrição</label>
              <Textarea name="applications_description" value={form.applications_description} onChange={handleChange} rows={4} />
            </div>
          </CardContent>
        </Card>

        <Button onClick={handleSave} disabled={loading} className="w-full">
          {loading ? 'Salvando...' : 'Salvar Detalhes'}
        </Button>
      </div>
    </main>
  );
}
