// frontend/components/sections/stats-section.tsx
'use client';

import { Container } from '@/components/ui/container';
import { mockStats } from '@/lib/mock-data';

interface CompanyStatistic {
  id: number;
  item_1_statistic: string;
  item_1_label: string;
  item_2_statistic: string;
  item_2_label: string;
  item_3_statistic: string;
  item_3_label: string;
  item_4_statistic: string;
  item_4_label: string;
}

function FormattedLabel({ label }: { label: string }) {
  const words = label.split(' ');

  if (words.length === 1) {
    return <>{label.toUpperCase()}</>;
  }

  const lastWord = words.pop();
  const firstLine = words.join(' ');

  return (
    <>
      {firstLine.toUpperCase()}
      <br />
      {lastWord?.toUpperCase()}
    </>
  );
}

export function StatsSection() {
  const stats = mockStats as CompanyStatistic;

  if (!stats) {
    return (
      <section className="bg-primary text-primary-foreground">
        <Container className="py-8">
          <div className="text-center text-primary-foreground/70">Nenhuma estatística disponível</div>
        </Container>
      </section>
    );
  }

  const statsArray = [
    {
      statistic: stats.item_1_statistic,
      label: stats.item_1_label,
    },
    {
      statistic: stats.item_2_statistic,
      label: stats.item_2_label,
    },
    {
      statistic: stats.item_3_statistic,
      label: stats.item_3_label,
    },
    {
      statistic: stats.item_4_statistic,
      label: stats.item_4_label,
    },
  ];

  return (
    <section className="bg-primary text-primary-foreground">
      <Container className="py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {statsArray.map((stat, index) => (
            <div
              key={index}
              className="
                flex flex-row items-center justify-center gap-4 
                md:border-l md:border-primary-foreground/30 md:first:border-l-0
              "
            >
              <span className="text-6xl font-bold">{stat.statistic}</span>
              <span className="text-sm uppercase tracking-wide text-primary-foreground/90 text-left leading-tight">
                <FormattedLabel label={stat.label} />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}