// frontend/components/sections/google-reviews-section.tsx
'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { mockGoogleReviews } from '@/lib/mock-data';

interface GoogleReview {
  id: number;
  image: string;
  order: number;
  is_active: boolean;
}

export function GoogleReviewsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usando dados mockados
    setTimeout(() => {
      setReviews(mockGoogleReviews);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <Container className="py-16 md:py-24">
        <p className="text-center text-gray-500">Carregando avaliações...</p>
      </Container>
    );
  }

  if (reviews.length === 0) {
    return (
      <Container className="py-16 md:py-24">
        <p className="text-center text-gray-500">Nenhuma avaliação disponível</p>
      </Container>
    );
  }

  return (
    <Container className="py-16 md:py-24">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full cursor-grab active:cursor-grabbing"
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="
                pl-4 
                basis-full         
                md:basis-1/2       
                lg:basis-1/3
              "
            >
              <div className="group cursor-pointer p-1">
                <div 
                  className="
                    relative 
                    w-full
                    max-w-[400px] 
                    h-[200px]      
                    mx-auto
                    rounded-lg overflow-hidden
                    transition-all duration-300 hover:border-primary
                  "
                >
                  <img
                    src={review.image}
                    alt={`Avaliação Google ${review.id}`}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="
            hidden md:flex 
            bg-primary text-primary-foreground 
            hover:bg-primary/90 hover:text-primary-foreground
          " 
        />
        <CarouselNext 
          className="
            hidden md:flex 
            bg-primary text-primary-foreground 
            hover:bg-primary/90 hover:text-primary-foreground
          " 
        />
      </Carousel>
    </Container>
  );
}