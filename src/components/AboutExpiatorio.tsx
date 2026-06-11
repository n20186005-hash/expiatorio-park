'use client';

import { useTranslations } from 'next-intl';

export default function AboutExpiatorio() {
  const t = useTranslations('aboutExpiatorio');
  
  const sections = [0, 1, 2, 3];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-8">
          {sections.map((index) => (
            <div key={index} className="bg-opacity-50 rounded-xl p-8 shadow-sm" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                {t(`sections.${index}.title`)}
              </h3>
              <p className="leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>
                {t(`sections.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
