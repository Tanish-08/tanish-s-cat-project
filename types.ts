
export enum Page {
  Vets = 'Vets',
  FoodAdvisor = 'Food Advisor',
  Community = 'Community',
}

export interface Vet {
  id: number;
  name: string;
  address: string;
  phone: string;
  specialty: string;
  image: string;
}

export interface CommunityPost {
    id: number;
    author: string;
    avatar: string;
    title: string;
    excerpt: string;
    replies: number;
    views: number;
}

export interface FoodRecommendation {
    brandName: string;
    foodName: string;
    type: 'Wet' | 'Dry' | 'Both';
    keyBenefits: string[];
    description: string;
}
