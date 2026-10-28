export type Language = 'en' | 'pt';
export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  category: 'all' | 'fullstack' | 'backend' | 'ai' | 'web' | 'data';
  tagline: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  longDescription: {
    en: string;
    pt: string;
  };
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  year: string;
  architectureHighlights: {
    en: string[];
    pt: string[];
  };
}

export interface TechSkill {
  id: string;
  name: string;
  category: 'languages' | 'backend' | 'databases' | 'analytics' | 'tools' | 'specialties';
  level: string; // e.g., 'Core Strength', 'Advanced', 'Proficient'
  description: {
    en: string;
    pt: string;
  };
  projectRef?: string;
  iconName: string;
}

export interface Milestone {
  id: string;
  year: string;
  period: string;
  type: 'education' | 'engineering' | 'venture' | 'project';
  title: {
    en: string;
    pt: string;
  };
  organization: string;
  location: string;
  description: {
    en: string;
    pt: string;
  };
  highlights: {
    en: string[];
    pt: string[];
  };
}

export interface Certification {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  badge: {
    en: string;
    pt: string;
  };
  issuer: string;
  issueDate: string;
  credentialId?: string;
  description: {
    en: string;
    pt: string;
  };
  competencies: string[];
  certificateFile?: string;
  status: 'active' | 'verified';
}

export interface AnalyticalMetric {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  value: string;
  label: {
    en: string;
    pt: string;
  };
  category: string;
}
