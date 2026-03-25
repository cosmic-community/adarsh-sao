import type { SiteSettings, StatItem } from '@/types';

interface HeroSectionProps {
  settings: SiteSettings | null;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const headline =
    settings?.metadata?.hero_headline ||
    'I Drive Real Leads, Not Just Clicks';
  const subheading =
    settings?.metadata?.hero_subheading ||
    'Digital Marketing Executive — I drive real leads and revenue growth using Meta Ads, Google Ads, and data-first SEO strategy. Not just clicks — conversions that matter.';
  const ctaText = settings?.metadata?.hero_cta_text || 'View My Work';
  const stats = settings?.metadata?.stats;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center pt-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
          <span className="text-sm text-emerald-400 font-medium">
            Available for new opportunities
          </span>
        </div>

        {/* Name */}
        <h2 className="text-lg md:text-xl text-dark-400 font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Adarsh Sao
        </h2>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {headline.split(' ').map((word, i) => {
            const isHighlight = ['Real', 'Leads', 'Clicks', 'Revenue', 'Growth'].includes(word.replace(/[^a-zA-Z]/g, ''));
            return (
              <span key={i}>
                {isHighlight ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}{' '}
              </span>
            );
          })}
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#case-studies" className="btn-primary text-base px-8 py-3.5">
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary text-base px-8 py-3.5">
            Contact Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats Ticker */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat: StatItem, i: number) => (
              <div key={i} className="card-glass p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">
                  {stat.value || '—'}
                </p>
                <p className="text-xs md:text-sm text-dark-400">
                  {stat.label || ''}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Fallback Stats */}
        {(!stats || stats.length === 0) && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {[
              { value: '₹460', label: 'Cost Per Lead — Meta Ads' },
              { value: '20+', label: 'Qualified Leads in 1 Month' },
              { value: '₹2 Cr', label: 'Revenue Influenced' },
              { value: '9/20', label: 'Keywords Ranked in 4 Months' },
            ].map((stat, i) => (
              <div key={i} className="card-glass p-4 md:p-5">
                <p className="text-xl md:text-2xl font-bold text-emerald-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-dark-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}