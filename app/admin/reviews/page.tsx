'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ReviewsAdminPage() {
  const [reviews, setReviews] = useState([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  const handleUpload = async () => {
    if (!imageFile) {
      alert('Selecione uma imagem');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert('Imagem adicionada!');
      setImageFile(null);
      setLoading(false);
    }, 800);
  };

  return (
    <main className="p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Avaliação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            <Button onClick={handleUpload} disabled={loading}>
              {loading ? 'Enviando...' : 'Fazer Upload'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avaliações Existentes</CardTitle>
          </CardHeader>
          <CardContent>
            {reviews.length === 0 ? (
              <p className="text-gray-500">Nenhuma avaliação cadastrada</p>
            ) : (
              <div>Avaliações aqui</div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
