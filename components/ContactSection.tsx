import type { SiteSettings } from '@/types';

interface ContactSectionProps {
  settings: SiteSettings | null;
}

export default function ContactSection({ settings }: ContactSectionProps) {
  const email = settings?.metadata?.email || 'adarshsao94@gmail.com';
  const linkedin =
    settings?.metadata?.linkedin_url || 'https://linkedin.com/in/adarsh-sao';
  const phone = settings?.metadata?.phone || '+91 62638 17699';
  const heading =
    settings?.metadata?.contact_heading || "Let's Grow Your Business Together.";
  const subtext =
    settings?.metadata?.contact_subtext ||
    'Whether you need a performance marketer to run your ads, grow your organic presence, or both — I build campaigns that generate real revenue, not just reports.';

  return (
    <section id="contact" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {heading}
          </h2>
          <p className="text-dark-400 leading-relaxed mb-10">
            {subtext}
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <a
              href={`mailto:${email}`}
              className="card-glass p-5 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium break-all">
                {email}
              </p>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass p-5 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">LinkedIn</p>
            </a>

            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="card-glass p-5 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">{phone}</p>
            </a>
          </div>

          {/* Primary CTA */}
          <a
            href={`mailto:${email}`}
            className="btn-primary text-base px-10 py-4"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}