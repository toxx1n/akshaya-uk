export interface Project {
  title: string;
  tech: string[];
  description: string[];
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
}