'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function TestimonialsAdminPage() {
  const [form, setForm] = useState({
    title: 'DEPOIMENTOS DOS NOSSOS CLIENTES',
    video_1_url: '',
    video_2_url: '',
    video_3_url: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      alert('Depoimentos salvos!');
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Editar Depoimentos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Título</label>
            <Input name="title" value={form.title} onChange={handleChange} />
          </div>
          {[1, 2, 3].map((num) => (
            <div key={num}>
              <label className="block font-medium mb-2">Vídeo {num} (YouTube ou Shorts)</label>
              <Input
                name={`video_${num}_url`}
                value={form[`video_${num}_url` as keyof typeof form] as string}
                onChange={handleChange}
                placeholder="https://youtube.com/watch?v=... ou https://youtube.com/shorts/..."
              />
            </div>
          ))}
          <Button onClick={handleSave} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Depoimentos'}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
