export interface Option {
    value: number;
    text: string;
  }
  
  export interface Question {
    id: string;
    text: string;
    options: Option[];
    category: string;
  }
  
  export interface Result {
    score: number;
    maxScore: number;
    level: 'low' | 'moderate' | 'high' | 'severe';
    message: string;
    advice: string[];
  }