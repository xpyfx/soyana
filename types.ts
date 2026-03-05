export enum Page {
    Home = 'home',
    Portfolio = 'portfolio',
    Resume = 'resume'
}

export interface WorkItem {
    id: string;
    title: string;
    category: 'web' | 'visual' | 'ai' | 'copy';
    description: string;
    imageUrl: string;
    label?: string;
}

export interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
}

export interface ResumeItem {
    id: string;
    year: string;
    title: string;
    company: string;
    description: string;
    achievements?: string[];
}