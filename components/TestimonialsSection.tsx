import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400' : 'text-dark-700'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const fallbackTestimonials = [
    {
      name: 'Ravi K.',
      company: 'Real Estate Developer',
      role: 'Director',
      quote:
        'Adarsh delivered 20 qualified leads on just ₹9,200 spend — one of which converted to a ₹2 Cr booking. His data-driven approach to Meta Ads is exceptional.',
      rating: 5,
      photo: null as string | null,
    },
    {
      name: 'Sneha M.',
      company: 'Bridgegap Consulting',
      role: 'Founder',
      quote:
        'In just 4 months, our average keyword position jumped from 32 to 19. Adarsh understands SEO at a strategic level, not just the technical side.',
      rating: 5,
      photo: null as string | null,
    },
  ];

  const displayTestimonials =
    testimonials.length > 0
      ? testimonials.map((t) => ({
          name: t.metadata?.client_name || 'Client',
          company: t.metadata?.company || '',
          role: t.metadata?.role || '',
          quote: t.metadata?.quote || '',
          rating: t.metadata?.rating ?? 5,
          photo: t.metadata?.client_photo?.imgix_url || null,
        }))
      : fallbackTestimonials;

  if (displayTestimonials.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {displayTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="card-glass p-6 md:p-8 hover:border-emerald-500/20 transition-all duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="text-dark-200 leading-relaxed mt-4 mb-6 text-sm md:text-base italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                {testimonial.photo ? (
                  <img
                    src={`${testimonial.photo}?w=96&h=96&fit=crop&auto=format,compress`}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-dark-500 text-xs">
                    {testimonial.role}
                    {testimonial.company
                      ? ` at ${testimonial.company}`
                      : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}