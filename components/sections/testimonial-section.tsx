// frontend/components/sections/testimonial-section.tsx
'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getYouTubeVideoId } from '@/lib/utils';
import { PlayCircle } from 'lucide-react';
import { mockTestimonials } from '@/lib/mock-data';

interface TestimonialData {
  id: number;
  title: string;
  video_1_url: string;
  video_2_url: string;
  video_3_url: string;
}

export function TestimonialSection() {
  const [testimonial, setTestimonial] = useState<TestimonialData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usando dados mockados
    setTimeout(() => {
      setTestimonial(mockTestimonials as TestimonialData);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <Container className="py-16 md:py-24">
        <p className="text-center text-gray-500">Carregando depoimentos...</p>
      </Container>
    );
  }

  if (!testimonial) {
    return (
      <Container className="py-16 md:py-24">
        <p className="text-center text-gray-500">Nenhum depoimento disponível</p>
      </Container>
    );
  }

  const videos = [
    testimonial.video_1_url,
    testimonial.video_2_url,
    testimonial.video_3_url,
  ].filter(url => url);

  return (
    <section id="testimonials">
      <Container className="py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold text-primary">
          {testimonial.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((url, index) => {
            const videoId = getYouTubeVideoId(url);
            if (!videoId) return null;

            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="
                      relative group w-full 
                      aspect-[3/4] 
                      rounded-lg overflow-hidden
                      border-2 border-primary/50
                      bg-muted bg-cover bg-center
                      cursor-pointer
                      transition-all duration-300 hover:border-primary
                    "
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 group-hover:bg-black/50">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                        <PlayCircle className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="p-0 border-0 max-w-2xl">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={`Depoimento ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </Container>
    </section>
  );
}