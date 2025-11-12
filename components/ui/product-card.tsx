import Link from 'next/link';


export interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}


export function ProductCard({ id, title, description, image }: ProductCardProps) {
  return (
    <div className="group block h-full">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg h-full flex flex-col hover-lift">
        <Link href={`/produtos/${id}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img
              src={image || '/images/placeholder.jpg'}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>
        <div className="flex flex-1 flex-col p-4">
          <h3 className="mb-2 text-lg font-semibold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {description}
          </p>
          <div className="mt-auto pt-4 flex justify-center">
            <Link 
              href={`/produtos/${id}`}
              className="inline-block px-6 py-2 bg-[#235942] text-white font-medium rounded-lg hover:bg-[#FF9F3F] transition-colors"
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}