import type { WorkExperience } from '@/types';
import { getMetafieldValue } from '@/types';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

// Changed: Normalize metrics to array for safe rendering
function normalizeMetrics(metrics: unknown): string[] {
  if (Array.isArray(metrics)) {
    return metrics
      .map((item) => {
        if (typeof item === 'string') return item.trim();
        if (typeof item === 'object' && item !== null && 'value' in item && 'label' in item) {
          const value = String((item as { value?: unknown }).value ?? '').trim();
          const label = String((item as { label?: unknown }).label ?? '').trim();
          return [value, label].filter(Boolean).join(' ').trim();
        }
        return '';
      })
      .filter((item) => item.length > 0);
  }
  if (typeof metrics === 'string') {
    return metrics
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }
  return [];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const fallbackExperiences = [
    {
      title: 'Digital Marketing Executive',
      company: 'Deep Red Ink',
      location: 'Hyderabad',
      dateRange: 'Oct 2025 – Present',
      isCurrent: true,
      description:
        'Managed end-to-end Meta Ads and Google Search campaigns for real estate and business consulting clients — covering keyword strategy, negative keyword pruning, match type optimisation, A/B creative testing, and multi-tier audience segmentation.',
      metrics: [
        '₹460 CPL',
        '20 Leads',
        '0.90% CTR',
        '1.37M Impressions',
        'Pos. 19 Avg. Keyword Rank',
        '₹2 Cr Revenue Influenced',
      ],
    },
    {
      title: 'Digital Marketing Executive · Intern',
      company: 'Deep Red Ink',
      location: 'Hyderabad',
      dateRange: 'Jul 2025 – Sep 2025',
      isCurrent: false,
      description:
        'Assisted in setting up and managing Meta and Google Ads campaigns, building proficiency in audience targeting, ad creation, and budget management across live client accounts.',
      metrics: ['Promoted to full-time in 3 months'],
    },
    {
      title: 'Digital Marketing Intern',
      company: 'SR Gauni Media Pvt Ltd',
      location: '',
      dateRange: 'Feb 2025 – Apr 2025',
      isCurrent: false,
      description:
        'Executed Meta Ads campaigns across 3+ industry verticals — retail, services, and lifestyle — managing custom audiences, lookalike audiences, and creative variations.',
      metrics: [],
    },
  ];

  const displayExperiences =
    experiences.length > 0
      ? experiences.map((exp) => ({
          title: exp.metadata?.job_title || exp.title,
          company: exp.metadata?.company || '',
          location: exp.metadata?.location || '',
          dateRange: exp.metadata?.date_range || '',
          isCurrent: Boolean(
            exp.metadata?.current_role === true ||
              getMetafieldValue(exp.metadata?.current_role) === 'true'
          ),
          description: exp.metadata?.description || '',
          metrics: normalizeMetrics(exp.metadata?.key_metrics),
        }))
      : fallbackExperiences;

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Work History
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience that delivers ROI
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-dark-700" />

            <div className="space-y-8">
              {displayExperiences.map((exp, i) => (
                <div key={i} className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                      exp.isCurrent
                        ? 'bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/30'
                        : 'bg-dark-800 border-dark-600'
                    }`}
                  />

                  <div className="card-glass p-6 hover:border-emerald-500/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {exp.title}
                        </h3>
                        <p className="text-emerald-400 text-sm font-medium">
                          {exp.company}
                          {exp.location ? `, ${exp.location}` : ''}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.isCurrent && (
                          <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                            Current Role
                          </span>
                        )}
                        <span className="text-xs text-dark-500">
                          {exp.dateRange}
                        </span>
                      </div>
                    </div>

                    <p className="text-dark-400 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {exp.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.metrics.map((metric, j) => (
                          <span
                            key={j}
                            className="text-xs bg-emerald-500/10 text-emerald-300 px-2.5 py-1 rounded-lg font-medium"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}
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