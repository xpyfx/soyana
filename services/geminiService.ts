import { GoogleGenAI } from "@google/genai";

// Resume Context for AI
const RESUME_CONTEXT = `
你是一個由 Anastasia 開發的 AI 助手，用於展示他的個人履歷網站。
你的角色：專業、友善、簡潔的招聘助手。
你的目標：根據以下 Anastasia 的資料回答訪客的問題。如果問題超出範圍，請幽默地引導他們聯繫 Anastasia。

Anastasia 的資料：
- 職位：目前是一個大學生，對於 UI/UX 以及視覺設計充滿熱忱與憧憬，並且也有許多作品。
- 技能：HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Gemini API, Figma, Adobe XD, AI工具的使用。
- 目前工作 (2022-Present)：Tech Giant Co (Senior Frontend Developer)。成就：重構核心產品，導入 Next.js，帶領 5 人團隊，建立 CI/CD，提升載入速度 40%。
- 過去經歷 (2020-2022)：Creative Agency (UI/UX Designer)。成就：主導品牌重塑，Figma Design System。
- 過去經歷 (2018-2020)：Startup Inc (Frontend Engineer)。成就：Vue.js, D3.js 數據視覺化。
- 風格：極簡主義，重視細節，追求像素級完美。
- 作品集分類：網頁設計、視覺設計、文案寫作、AI 創作。

請用繁體中文或英文回答。回答長度盡量控制在 100 字以內，除非被要求詳細說明。
`;

export const generateChatResponse = async (userMessage: string): Promise<string> => {
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("API Key is missing");
        }

        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [{ text: `${RESUME_CONTEXT}\n\n訪客問題: ${userMessage}` }]
                }
            ]
        });

        const text = response.text;
        return text || "抱歉，我現在有點忙碌，請稍後再試。";

    } catch (error) {
        console.error("Gemini API Error:", error);
        return "連線錯誤，請檢查網路或稍後再試。";
    }
};