// Multi-site build mode — 讀 build-time env var PLATYPUS_MODE
// 'hub' = 私人 index（列所有主題 + Cloudflare Access 保護）
// 其他 = 單主題公開站（首頁不 link 其他主題，保持隔離）

export type SiteMode =
  | 'hub'
  | 'investing'
  | 'mountain'
  | 'medicine'
  | 'knowledge'
  | 'ai'
  | 'life';

const raw = (process.env.PLATYPUS_MODE || 'hub').toLowerCase();
const VALID: SiteMode[] = ['hub', 'investing', 'mountain', 'medicine', 'knowledge', 'ai', 'life'];
export const SITE_MODE: SiteMode = (VALID.includes(raw as SiteMode) ? raw : 'hub') as SiteMode;

export interface TopicInfo {
  name: string;
  emoji: string;
  desc: string;
  url: string;
}

export const TOPIC_META: Record<Exclude<SiteMode, 'hub'>, TopicInfo> = {
  investing: {
    name: '價值投資',
    emoji: '📈',
    desc: '護城河、安全邊際、估值、長期複利',
    url: 'https://platypus-investing.pages.dev',
  },
  mountain: {
    name: '登山',
    emoji: '⛰️',
    desc: '百岳、海外高峰、裝備與經驗',
    url: 'https://platypus-mountain.pages.dev',
  },
  medicine: {
    name: '醫療',
    emoji: '🩺',
    desc: '臨床思考、決策科學、工作路上的觀察',
    url: 'https://platypus-medicine.pages.dev',
  },
  knowledge: {
    name: '知識管理',
    emoji: '🧠',
    desc: 'Obsidian、第二大腦、AI 整合',
    url: 'https://platypus-knowledge.pages.dev',
  },
  ai: {
    name: 'AI 與分身',
    emoji: '🤖',
    desc: '個人 AI、workflow、prompt engineering',
    url: 'https://platypus-ai.pages.dev',
  },
  life: {
    name: '生活',
    emoji: '🌱',
    desc: '咖啡、音樂、電影、書、日常觀察',
    url: 'https://platypus-life.pages.dev',
  },
};

export const TOPIC_ORDER: Array<Exclude<SiteMode, 'hub'>> = [
  'investing',
  'knowledge',
  'medicine',
  'mountain',
  'ai',
  'life',
];

export function siteTitle(): string {
  if (SITE_MODE === 'hub') return 'platypus.notes';
  return `platypus · ${TOPIC_META[SITE_MODE].name}`;
}

export function siteDescription(): string {
  if (SITE_MODE === 'hub') {
    return 'platypus 的個人筆記 — 投資、登山、醫療、知識管理、AI。';
  }
  const t = TOPIC_META[SITE_MODE];
  return `platypus 的${t.name}筆記 — ${t.desc}`;
}
