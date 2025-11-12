'use client';

interface InternalPageBannerProps {
  title: string;
  imageSrc?: string;
}

export function InternalPageBanner({ title, imageSrc }: InternalPageBannerProps) {
  return (
    <section
      className="relative w-full h-96 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay verde com opacity */}
      <div className="absolute inset-0 bg-green-600 opacity-50" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
