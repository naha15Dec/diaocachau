export type JobPosition = 'Chuyên viên kinh doanh' | 'Phó phòng kinh doanh' | 'Trưởng phòng kinh doanh';

export interface PositionDetail {
  id: string;
  title: JobPosition;
  level: string;
  badge: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  note: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string;
}

export interface ApplicationFormData {
  fullName: string;
  phone: string;
  email: string;
  position: JobPosition;
  experience: string;
  message: string;
  cvFile: File | null;
  agreedToPolicy: boolean;
}

export interface FormValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  position?: string;
  experience?: string;
  cvFile?: string;
  agreedToPolicy?: string;
}
