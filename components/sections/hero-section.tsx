// frontend/components/sections/hero-section.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { mockHeroBanners } from '@/lib/mock-data';

interface HeroBanner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta_text: string;
  cta_link: string;
  image: string;
  order: number;
}

export function HeroSection() {
  const [banners, setBanners] = useState<HeroBanner[]>(mockHeroBanners.sort((a, b) => a.order - b.order));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const isSingleBanner = banners.length <= 1;
  const currentBanner = banners[currentIndex];

  useEffect(() => {
    if (isSingleBanner || !isAutoPlay || banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isSingleBanner, isAutoPlay, banners.length]);

  if (banners.length === 0) {
    return (
      <section className="relative w-full h-[650px] bg-slate-100 flex items-center justify-center">
        <p className="text-slate-500">Nenhum banner disponível</p>
      </section>
    );
  }

  if (isSingleBanner) {
    return <StaticHeroSection banner={currentBanner} />;
  }

  return <RotatingHeroSection banners={banners} />;
}

function StaticHeroSection({ banner }: { banner: HeroBanner }) {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      <img
        src={banner.image}
        alt={banner.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="absolute inset-0 z-20 h-full flex items-center">
        <Container>
          <div className="max-w-2xl text-left">
            {banner.subtitle && (
              <h2 className="text-lg font-semibold text-[#FF9F3F] animate-fade-in">
                {banner.subtitle}
              </h2>
            )}
            <h1 className="mt-2 text-6xl font-bold text-white sm:text-8xl animate-fade-in-delay-100">
              {banner.title}
            </h1>
            {banner.description && (
              <p className="mt-6 text-xl text-gray-100 animate-fade-in-delay-200 max-w-xl">
                {banner.description}
              </p>
            )}
            {banner.cta_link && banner.cta_text && (
              <Button asChild size="lg" className="mt-10 animate-fade-in-delay-300 bg-[#FF9F3F] hover:bg-[#235942]">
                <Link href={banner.cta_link}>{banner.cta_text}</Link>
              </Button>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}

function RotatingHeroSection({ banners }: { banners: HeroBanner[] }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
          startIndex: 0,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full m-0">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="relative h-[650px] p-0">
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              
              <div className="absolute inset-0 bg-black/40 z-10" />
              
              <div className="absolute inset-0 z-20 h-full flex items-center">
                <Container>
                  <div className="max-w-2xl text-left">
                    {banner.subtitle && (
                      <h2 className="text-lg font-semibold text-[#FF9F3F]">
                        {banner.subtitle}
                      </h2>
                    )}
                    <h1 className="mt-2 text-5xl font-extrabold text-white sm:text-6xl">
                      {banner.title}
                    </h1>
                    {banner.description && (
                      <p className="mt-6 text-xl text-gray-100 max-w-xl">
                        {banner.description}
                      </p>
                    )}
                    {banner.cta_link && banner.cta_text && (
                      <Button asChild size="lg" className="mt-10 bg-[#FF9F3F] hover:bg-[#235942]">
                        <Link href={banner.cta_link}>{banner.cta_text}</Link>
                      </Button>
                    )}
                  </div>
                </Container>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-30 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 z-30 top-1/2 -translate-y-1/2" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-white w-8' : 'bg-white/50'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}