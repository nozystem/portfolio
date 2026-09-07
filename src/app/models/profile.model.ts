export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export interface EducationItem {
  title: string;
  school: string;
  period: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  pending?: boolean;
}
