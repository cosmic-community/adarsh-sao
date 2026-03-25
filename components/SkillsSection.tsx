import type { Skill } from '@/types';

interface SkillsSectionProps {
  skills: Skill[];
}

// Changed: Normalize skills list to array to avoid split() on non-strings
function normalizeSkillItems(items: unknown): string[] {
  if (Array.isArray(items)) {
    return items.map((item) => String(item).trim()).filter((item) => item.length > 0);
  }
  if (typeof items === 'string') {
    return items
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }
  return [];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const fallbackSkills = [
    {
      emoji: '📱',
      category: 'Paid Social — Meta Ads',
      items: [
        'Campaign Budget Optimisation',
        'Custom Audiences',
        'Lookalike Audiences',
        'Retargeting',
        'A/B Creative Testing',
        'Lead Gen Forms',
      ],
    },
    {
      emoji: '🔍',
      category: 'Paid Search — Google Ads',
      items: [
        'Search Campaigns',
        'Keyword Strategy',
        'Negative Keyword Pruning',
        'Match Type Optimisation',
        'Conversion Tracking',
        'Quality Score',
      ],
    },
    {
      emoji: '📊',
      category: 'SEO Strategy',
      items: [
        'Keyword Research',
        'On-Page Optimisation',
        'SERP Analysis',
        'Internal Linking',
        'SEO Content Writing',
        'Ahrefs',
      ],
    },
    {
      emoji: '📈',
      category: 'Analytics & Tracking',
      items: [
        'GA4',
        'Google Tag Manager',
        'Google Search Console',
        'UTM Tracking',
        'Performance Reporting',
        'Funnel Analysis',
      ],
    },
    {
      emoji: '✍️',
      category: 'Content & Strategy',
      items: [
        'SEO Blog Writing',
        'Content Calendars',
        'Campaign Copywriting',
        'High-Intent Content',
        'Brand Messaging',
      ],
    },
    {
      emoji: '🛠️',
      category: 'Tools & Platforms',
      items: [
        'Meta Business Suite',
        'Google Ads Manager',
        'HubSpot',
        'Canva',
        'Notion',
        'Google Workspace',
      ],
    },
  ];

  const displaySkills =
    skills.length > 0
      ? skills.map((s) => ({
          emoji: s.metadata?.icon_emoji || '🛠️',
          category: s.metadata?.category_name || s.title,
          items: normalizeSkillItems(s.metadata?.skill_items),
        }))
      : fallbackSkills;

  return (
    <section id="skills" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Core Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tools that drive real results
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displaySkills.map((skill, i) => (
            <div
              key={i}
              className="card-glass p-6 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-3xl mb-4 block">{skill.emoji}</span>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-emerald-400 transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span
                    key={j}
                    className="text-xs bg-dark-800 text-dark-300 px-2.5 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}