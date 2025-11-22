export enum Page {
    HOME = 'home',
    SKILLS = 'skills',
    PORTFOLIO = 'portfolio',
    RESUME = 'resume',
    CONTACT = 'contact'
}

export interface WorkItem {
    id: string;
    title: string;
    subtitle: string;
    category: 'web' | 'visual' | 'ai' | 'copy';
    imageText: string;
    bgColor?: string;
}

export interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    isTyping?: boolean;
}