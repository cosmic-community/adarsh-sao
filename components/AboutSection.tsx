import type { SiteSettings } from '@/types';

interface AboutSectionProps {
  settings: SiteSettings | null;
}

export default function AboutSection({ settings }: AboutSectionProps) {
  const heading = settings?.metadata?.about_heading || 'Who I Am';
  const content =
    settings?.metadata?.about_content ||
    "I'm a Digital Marketing Executive at Deep Red Ink, Hyderabad — promoted from intern to full-time in just 3 months. I specialise in paid media and SEO for real estate and business consulting verticals, where budgets are tight but expectations are high. I don't just run campaigns — I build performance systems. From keyword pruning to audience segmentation, from SERP analysis to conversion tracking, every decision I make is backed by data. My benchmark isn't impressions — it's revenue impact.";
  const profilePhoto = settings?.metadata?.profile_photo;

  const highlights = [
    {
      icon: '📈',
      title: 'Performance-Led',
      desc: 'Every campaign optimised toward CPL and ROAS, not vanity metrics',
    },
    {
      icon: '🔍',
      title: 'SEO Specialist',
      desc: 'Ranked competitive keywords for B2B consulting in under 4 months',
    },
    {
      icon: '🎯',
      title: 'Full-Funnel Thinker',
      desc: 'Paid ads, content, and tracking working together — not in silos',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo / Avatar */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {profilePhoto?.imgix_url ? (
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={`${profilePhoto.imgix_url}?w=800&h=900&fit=crop&auto=format,compress`}
                    alt="Adarsh Sao"
                    width={400}
                    height={450}
                    className="w-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
                </div>
              ) : (
                <div className="card-glass aspect-[4/5] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-6xl">🎯</span>
                    </div>
                    <p className="text-dark-400 text-sm">
                      Performance Marketer
                    </p>
                  </div>
                </div>
              )}
              {/* Accent bar */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {heading}
            </h2>
            <p className="text-dark-300 leading-relaxed mb-4 text-base">
              Performance marketer obsessed with measurable growth
            </p>
            <p className="text-dark-400 leading-relaxed mb-8">
              {content}
            </p>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 card-glass p-4 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-dark-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}