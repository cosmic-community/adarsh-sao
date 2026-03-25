import type { Credential } from '@/types';
import { getMetafieldValue } from '@/types';

interface CredentialsSectionProps {
  credentials: Credential[];
}

export default function CredentialsSection({ credentials }: CredentialsSectionProps) {
  const fallbackCredentials = [
    {
      name: 'Google Ads Search Certification',
      org: 'Google Skillshop',
      type: 'Certification',
      year: 'Verified',
    },
    {
      name: 'HubSpot Digital Marketing Certification',
      org: 'HubSpot Academy',
      type: 'Certification',
      year: 'Verified',
    },
    {
      name: 'PGDM — Marketing & Business Analytics',
      org: 'Lexicon MILE, Pune',
      type: 'Education',
      year: '2023–2025',
    },
    {
      name: 'BSc — Agriculture',
      org: 'LNCT University, Bhopal',
      type: 'Education',
      year: '2019–2023',
    },
  ];

  const displayCredentials =
    credentials.length > 0
      ? credentials.map((c) => ({
          name: c.metadata?.credential_name || c.title,
          org: c.metadata?.issuing_organization || '',
          type: getMetafieldValue(c.metadata?.credential_type) || '',
          year: c.metadata?.year || '',
        }))
      : fallbackCredentials;

  return (
    <section id="credentials" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications & Education
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {displayCredentials.map((cred, i) => {
            const isCert = cred.type.toLowerCase().includes('cert');
            return (
              <div
                key={i}
                className="card-glass p-6 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isCert
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-blue-500/10 text-blue-400'
                    }`}
                  >
                    <span className="text-xl">{isCert ? '🏆' : '🎓'}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                      {cred.name}
                    </h3>
                    <p className="text-dark-400 text-sm">{cred.org}</p>
                    <p className="text-dark-500 text-xs mt-1">{cred.year}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}