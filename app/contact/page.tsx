// frontend/app/contact/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { mockContactBanner } from '@/lib/mock-data';

interface ContactBanner {
  id: number;
  image: string;
  title: string;
}

export default function ContatoPage() {
  const [banner, setBanner] = useState<ContactBanner | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Carregar banner
  useEffect(() => {
    // Simula carregamento com dados mockados
    setTimeout(() => {
      setBanner(mockContactBanner);
    }, 300);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simula envio do formulário (dados mockados)
      console.log('Formulário enviado (MOCK):', formData);
      
      // Simula delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <section
        className="relative w-full h-96 overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: banner?.image ? `url(${banner.image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay verde com opacity */}
        <div className="absolute inset-0 bg-[235942] opacity-50" />

        {/* Conteúdo */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{banner?.title || 'ENTRE EM CONTATO'}</h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                SOLICITE UM ORÇAMENTO PERSONALIZADO
              </h2>
              <p className="text-slate-600">
                De a sua empresa toda a assistência que precisa!
              </p>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✓ Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                ✗ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#235942] focus:ring-2 focus:ring-[#FF9F3F]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#235942] focus:ring-2 focus:ring-[#FF9F3F]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#235942] focus:ring-2 focus:ring-[#FF9F3F]"
                />
                <div />
              </div>

              <textarea
                name="message"
                placeholder="Em que podemos ajudar?"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#235942] focus:ring-2 focus:ring-[#FF9F3F]"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-[#235942] hover:bg-[#FF9F3F] text-white font-semibold rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}