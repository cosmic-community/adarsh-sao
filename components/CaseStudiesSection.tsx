import type { CaseStudy } from '@/types';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({
  caseStudies,
}: CaseStudiesSectionProps) {
  const fallbackStudies = [
    {
      title: 'Ambience Beaumonde',
      clientName: 'Ambience Beaumonde',
      industry: 'Real Estate',
      objective:
        'Generate high-quality property enquiries for a premium residential project in Hyderabad. The goal was to reach serious buyers — not just clicks — while keeping cost per lead sustainable within a controlled monthly budget.',
      strategy:
        'Built a full-funnel Meta Ads campaign with layered audience segmentation: interest-based cold audiences, lookalike audiences from existing buyer data, and retargeting for warm traffic. Ran A/B tests on creative formats and implemented UTM tracking and GA4 event goals.',
      tools: 'Meta Ads, GA4, GTM, Meta Pixel, Canva',
      outcomes:
        '₹9,200 Total Ad Spend (Feb 2026), 20 Leads Qualified Form Submissions, ₹2 Cr Flat Booking from 1 Lead',
      slug: 'ambience-beaumonde',
      featuredImage: null as string | null,
      liveUrl: '',
    },
    {
      title: 'Bridgegap Consulting',
      clientName: 'Bridgegap Consulting',
      industry: 'B2B Consulting',
      objective:
        'Establish organic search presence for a B2B consulting firm in a highly competitive Hyderabad market. The client needed to rank for commercial-intent keywords attracting SMEs and family businesses seeking growth consultants.',
      strategy:
        'Conducted a thorough SERP gap analysis using Ahrefs and Google Search Console. Executed on-page optimisation across core service pages, restructured internal linking, and produced a 10+ blog series targeting commercial queries.',
      tools: 'Ahrefs, Google Search Console, GA4, Google Ads, GTM',
      outcomes:
        'Pos. 19 Avg. Keyword Position (from 32), 9/20 Target Keywords Ranked, 10+ SEO Blogs Published',
      slug: 'bridgegap-consulting',
      featuredImage: null as string | null,
      liveUrl: '',
    },
  ];

  const displayStudies =
    caseStudies.length > 0
      ? caseStudies.map((cs) => ({
          title: cs.title,
          clientName: cs.metadata?.client_name || cs.title,
          industry: cs.metadata?.industry || '',
          objective: cs.metadata?.objective || '',
          strategy: cs.metadata?.strategy || '',
          tools: cs.metadata?.tools_used || '',
          outcomes: cs.metadata?.outcomes || '',
          slug: cs.slug,
          featuredImage: cs.metadata?.featured_image?.imgix_url || null,
          liveUrl: cs.metadata?.live_url || '',
        }))
      : fallbackStudies;

  return (
    <section id="case-studies" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real projects. Measurable results.
          </h2>
        </div>

        <div className="space-y-10">
          {displayStudies.map((study, i) => (
            <div
              key={study.slug || i}
              className="card-glass overflow-hidden hover:border-emerald-500/30 transition-all duration-500 group"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image / Visual */}
                <div className="lg:col-span-2 relative bg-gradient-to-br from-emerald-900/20 to-dark-900 p-8 flex items-center justify-center min-h-[250px]">
                  {study.featuredImage ? (
                    <img
                      src={`${study.featuredImage}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={study.clientName}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-full absolute inset-0 opacity-60"
                    />
                  ) : null}
                  <div className="relative z-10 text-center">
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {study.clientName}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-6 md:p-8 space-y-5">
                  {/* Objective */}
                  <div>
                    <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
                      Objective
                    </h4>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.objective}
                    </p>
                  </div>

                  {/* Strategy */}
                  <div>
                    <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
                      Strategy & Execution
                    </h4>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.strategy}
                    </p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tools
                        .split(',')
                        .map((t: string) => t.trim())
                        .filter((t: string) => t.length > 0)
                        .map((tool: string, j: number) => (
                          <span
                            key={j}
                            className="text-xs bg-dark-800 text-dark-200 px-3 py-1.5 rounded-lg font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
                      Outcomes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {study.outcomes
                        .split(',')
                        .map((o: string) => o.trim())
                        .filter((o: string) => o.length > 0)
                        .map((outcome: string, j: number) => (
                          <div
                            key={j}
                            className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 text-center"
                          >
                            <p className="text-sm text-emerald-300 font-semibold">
                              {outcome}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <a
                      href="mailto:adarshsao94@gmail.com"
                      className="btn-secondary text-sm py-2 px-5"
                    >
                      Discuss Project
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}