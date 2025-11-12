'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function HeroAdminPage() {
  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    description: '',
    cta_text: 'Explorar Produtos',
    cta_link: '/produtos',
    image: null as File | null,
    imagePreview: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onload = (event) => {
        setForm((prev) => ({ ...prev, imagePreview: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      alert('Banner salvo com sucesso!');
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Editar Banner da Home</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Título</label>
            <Input name="title" value={form.title} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium mb-2">Subtítulo</label>
            <Input name="subtitle" value={form.subtitle} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium mb-2">Descrição</label>
            <Textarea name="description" value={form.description} onChange={handleChange} rows={4} />
          </div>
          <div>
            <label className="block font-medium mb-2">Texto do CTA</label>
            <Input name="cta_text" value={form.cta_text} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium mb-2">Link do CTA</label>
            <Input name="cta_link" value={form.cta_link} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium mb-2">Imagem</label>
            <Input type="file" accept="image/*" onChange={handleImage} />
            {form.imagePreview && (
              <img src={form.imagePreview} alt="Preview" className="mt-2 max-w-xs rounded" />
            )}
          </div>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Banner'}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
