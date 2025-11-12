'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function HeaderAdminPage() {
  const [form, setForm] = useState({
    contact_button_link: '/contato',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      alert('Cabeçalho salvo com sucesso!');
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Editar Cabeçalho</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Link do Botão de Contato</label>
            <Input
              name="contact_button_link"
              value={form.contact_button_link}
              onChange={handleChange}
              placeholder="/contato"
            />
          </div>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Cabeçalho'}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
