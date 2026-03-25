import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ResultsSection from '@/components/ResultsSection';
import CredentialsSection from '@/components/CredentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import {
  getSiteSettings,
  getCaseStudies,
  getSkills,
  getWorkExperience,
  getCredentials,
  getTestimonials,
} from '@/lib/cosmic';

export const revalidate = 60;

export default async function HomePage() {
  const [settings, caseStudies, skills, experiences, credentials, testimonials] =
    await Promise.all([
      getSiteSettings(),
      getCaseStudies(),
      getSkills(),
      getWorkExperience(),
      getCredentials(),
      getTestimonials(),
    ]);

  return (
    <>
      <Navbar />
      <ScrollAnimator />

      <main>
        <HeroSection settings={settings} />

        <div className="animate-on-scroll">
          <AboutSection settings={settings} />
        </div>

        <div className="animate-on-scroll">
          <ExperienceSection experiences={experiences} />
        </div>

        <div className="animate-on-scroll">
          <CaseStudiesSection caseStudies={caseStudies} />
        </div>

        <div className="animate-on-scroll">
          <SkillsSection skills={skills} />
        </div>

        <div className="animate-on-scroll">
          <ResultsSection />
        </div>

        <div className="animate-on-scroll">
          <CredentialsSection credentials={credentials} />
        </div>

        <div className="animate-on-scroll">
          <TestimonialsSection testimonials={testimonials} />
        </div>

        <div className="animate-on-scroll">
          <ContactSection settings={settings} />
        </div>
      </main>

      <Footer />
    </>
  );
}