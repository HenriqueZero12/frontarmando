import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ProductSection } from '@/components/sections/product-section';
import { AboutSection } from '@/components/sections/about-section';
import { TestimonialSection } from '@/components/sections/testimonial-section';
import { GoogleReviewsSection } from '@/components/sections/google-reviews-section';
import { FeaturedProductsSection } from '@/components/sections/featured-products-section';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <ProductSection />
        <AboutSection />
        <TestimonialSection />
        <GoogleReviewsSection />
        <FeaturedProductsSection/>
      </main>
    </>
  );
}
