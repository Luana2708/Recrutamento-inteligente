export type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  compatibility: number;
  applicants: number;
  area: string;
  description?: string;
  contactEmail?: string;
};

export type Candidate = {
  name: string;
  role: string;
  experience: string;
  location: string;
  company: string;
  availability: string;
  skills: string[];
  qualities: string[];
  compatibility: number;
  avatar: string;
  type: string;
  email?: string;
  phone?: string;
  education?: string;
  linkedin?: string;
  portfolio?: string;
  salaryExpectation?: string;
  summary?: string;
};
