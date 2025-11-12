'use client';


import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';


export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);


  useEffect(() => {
    const loadParams = async () => {
      const p = await params;
      setProductId(p.id);
    };
    loadParams();
  }, [params]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      alert('Produto salvo!');
      setLoading(false);
    }, 800);
  };


  return (
    <main className="p-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Editar Produto #{productId}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Título</label>
            <Input name="title" value={form.title} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium mb-2">Descrição</label>
            <Textarea name="description" value={form.description} onChange={handleChange} rows={4} />
          </div>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Produto'}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}