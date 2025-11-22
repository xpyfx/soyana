import { WorkItem } from './types';

export const RESUME_CONTEXT = `
你是一個由 Alex 開發的 AI 助手，用於展示他的個人履歷網站。
你的角色：專業、友善、簡潔的招聘助手。
你的目標：根據以下 Alex 的資料回答訪客的問題。如果問題超出範圍，請幽默地引導他們聯繫 Alex。

Alex 的資料：
- 職位：資深前端開發者 (Senior Frontend Developer) & UI/UX 設計師。
- 技能：HTML5, CSS3, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Gemini API, Figma, Adobe XD。
- 目前工作 (2022-Present)：Tech Giant Co (Senior Frontend Developer)。成就：重構核心產品，導入 Next.js，帶領 5 人團隊，建立 CI/CD，提升載入速度 40%。
- 過去經歷 (2020-2022)：Creative Agency (UI/UX Designer)。成就：主導品牌重塑，Figma Design System。
- 過去經歷 (2018-2020)：Startup Inc (Frontend Engineer)。成就：Vue.js, D3.js 數據視覺化。
- 風格：極簡主義，重視細節，追求像素級完美。
- 作品集分類：網頁設計、視覺設計、文案寫作、AI 創作。

請用繁體中文回答。回答長度盡量控制在 100 字以內，除非被要求詳細說明。
`;

export const WORKS: WorkItem[] = [
    {
        id: '1',
        title: 'Fintech Dashboard',
        subtitle: 'Web Design • React',
        category: 'web',
        imageText: 'Fintech Dashboard Interface'
    },
    {
        id: '2',
        title: '名片設計',
        subtitle: 'Visual Design • Photoshop',
        category: 'visual',
        imageText: 'Brand Identity Design',
        bgColor: 'bg-gray-800'
    },
    {
        id: '3',
        title: 'AI Concept Art',
        subtitle: 'The Use of AI Tools',
        category: 'ai',
        imageText: 'AI Concept Generator',
        bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50'
    },
    {
        id: '4',
        title: 'Campaign Slogans',
        subtitle: 'Copywriting • Storytelling',
        category: 'copy',
        imageText: '"Words that convert. Stories that connect."'
    }
];

export const TECH_STACK = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Gemini API"
];

export const DESIGN_STACK = [
    "Figma", "UI/UX", "Adobe XD", "Prototyping", "Motion", "LLM Integ."
];