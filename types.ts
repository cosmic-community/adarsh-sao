export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface StatItem {
  label?: string;
  value?: string;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    hero_headline?: string;
    hero_subheading?: string;
    hero_cta_text?: string;
    hero_cta_link?: string;
    about_heading?: string;
    about_content?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin_url?: string;
    phone?: string;
    contact_heading?: string;
    contact_subtext?: string;
    stats?: StatItem[];
  };
}

// Changed: tools_used and outcomes match Cosmic array structures
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    client_name?: string;
    industry?: string;
    objective?: string;
    strategy?: string;
    tools_used?: string[] | string;
    outcomes?: Array<{ value: string; label: string }> | string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    live_url?: string;
    order?: number;
  };
}

// Changed: skill_items is an array in Cosmic
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    category_name?: string;
    skill_items?: string[] | string;
    icon_emoji?: string;
    order?: number;
  };
}

// Changed: key_metrics is a JSON array in Cosmic
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title?: string;
    company?: string;
    location?: string;
    date_range?: string;
    current_role?: boolean | string;
    description?: string;
    key_metrics?: Array<{ value: string; label: string }> | string;
    order?: number;
  };
}

export interface Credential extends CosmicObject {
  type: 'credentials';
  metadata: {
    credential_name?: string;
    issuing_organization?: string;
    credential_type?: string;
    year?: string;
    order?: number;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    role?: string;
    quote?: string;
    rating?: number;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}