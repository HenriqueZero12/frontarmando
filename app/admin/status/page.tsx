'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function StatusAdminPage() {
  const [form, setForm] = useState({
    item_1_statistic: '500+',
    item_1_label: 'Clientes Satisfeitos',
    item_2_statistic: '1000+',
    item_2_label: 'Produtos',
    item_3_statistic: '50+',
    item_3_label: 'Anos de Experiência',
    item_4_statistic: '100%',
    item_4_label: 'Garantia',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      alert('Faixa de status salva com sucesso!');
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Editar Faixa de Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="grid grid-cols-2 gap-4 border-b pb-4">
              <div>
                <label className="block font-medium mb-2">Número {num}</label>
                <Input
                  name={`item_${num}_statistic`}
                  value={form[`item_${num}_statistic` as keyof typeof form] as string}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Rótulo {num}</label>
                <Input
                  name={`item_${num}_label`}
                  value={form[`item_${num}_label` as keyof typeof form] as string}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
          <Button onClick={handleSave} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Faixa de Status'}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
