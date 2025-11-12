'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function FooterAdminPage() {
  const [form, setForm] = useState({
    schedule_text: '',
    email_address: '',
    map_embed_url: '',
  });
  const [socialMedias, setSocialMedias] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setTimeout(() => {
      alert('Rodapé salvo!');
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Horário de Atendimento</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              name="schedule_text"
              value={form.schedule_text}
              onChange={handleChange}
              placeholder="Ex: Segunda a Sexta: 8:00 - 17:00"
              rows={4}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Redes Sociais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Redes sociais aqui</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="email"
              name="email_address"
              value={form.email_address}
              onChange={handleChange}
              placeholder="contato@armando.com.br"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mapa</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              name="map_embed_url"
              value={form.map_embed_url}
              onChange={handleChange}
              placeholder="Cole URL do Google Maps"
              rows={3}
            />
          </CardContent>
        </Card>

        <Button onClick={handleSave} disabled={loading} className="w-full">
          {loading ? 'Salvando...' : 'Salvar Rodapé'}
        </Button>
      </div>
    </main>
  );
}
