'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function FeaturedAdminPage() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    title: '',
    cta_text: 'Ver Mais',
    cta_link: '/produtos',
    image: null as File | null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setForm({ ...form, image: file });
  };

  const handleAdd = async () => {
    if (!form.title || !form.image) {
      alert('Preencha todos os campos');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert('Card adicionado!');
      setForm({ title: '', cta_text: 'Ver Mais', cta_link: '/produtos', image: null });
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Card (máx. 3)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Título"
            />
            <Input
              name="cta_text"
              value={form.cta_text}
              onChange={handleChange}
              placeholder="Texto do botão"
            />
            <Input
              name="cta_link"
              value={form.cta_link}
              onChange={handleChange}
              placeholder="Link"
            />
            <Input type="file" accept="image/*" onChange={handleImage} />
            <Button onClick={handleAdd} disabled={loading || cards.length >= 3}>
              {loading ? 'Adicionando...' : 'Adicionar'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cards ({cards.length}/3)</CardTitle>
          </CardHeader>
          <CardContent>
            {cards.length === 0 ? (
              <p className="text-gray-500">Nenhum card</p>
            ) : (
              <div>Cards aqui</div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
