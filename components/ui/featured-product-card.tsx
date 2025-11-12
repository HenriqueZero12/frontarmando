// frontend/components/ui/featured-product-card.tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FeaturedProductCardProps {
  title: string;
  image: string;
  whatsappLink: string;
}

export function FeaturedProductCard({
  title,
  image,
  whatsappLink,
}: FeaturedProductCardProps) {
  return (
    <Card className="h-full w-full text-center overflow-hidden flex flex-col p-4">
      <div className="relative w-full aspect-square bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="pt-6 px-2 pb-2 flex flex-col items-center flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-4 flex-grow">
          {title}
        </h3>
        <Button asChild variant="secondary" size="lg">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Saiba mais
          </a>
        </Button>
      </div>
    </Card>
  );
}
