const stats = [
  { value: '₹23K+', label: 'Total Ad Spend Managed', sublabel: 'Across Meta & Google Ads' },
  { value: '20+', label: 'Qualified Leads Generated', sublabel: 'in a Single Campaign Month' },
  { value: '₹460', label: 'Cost Per Lead', sublabel: 'Real Estate Performance Campaign' },
  { value: '₹2 Cr', label: 'Revenue Influenced', sublabel: 'via Lead-to-Booking Conversion' },
  { value: '9', label: 'Competitive Keywords', sublabel: 'Ranked on Page 1 in 4 Months' },
  { value: '–13', label: 'Avg. Keyword Position', sublabel: 'Improvement (32 → 19)' },
  { value: '5+', label: 'Active Campaigns', sublabel: 'Managed Simultaneously' },
  { value: '10+', label: 'High-Intent SEO Blogs', sublabel: 'Published for Organic Growth' },
];

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            By the Numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impact I&apos;ve delivered
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Every number here is traceable back to a real campaign, real budget,
            and real business outcome.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-glass p-5 md:p-6 text-center hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <p className="text-2xl md:text-3xl font-black text-emerald-400 mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </p>
              <p className="text-white text-sm font-semibold mb-0.5">
                {stat.label}
              </p>
              <p className="text-dark-500 text-xs">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}