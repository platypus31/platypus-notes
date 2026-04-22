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
    name: '投資',
    emoji: '📈',
    desc: '價值投資、估值方法、流派比較、長期複利',
    url: 'https://platypus-investing.pages.dev',
  },
  mountain: {
    name: '野外',
    emoji: '🏕️',
    desc: '登山、潛水、野溪溫泉、露營、其他戶外活動',
    url: 'https://platypus-mountain.pages.dev',
  },
  medicine: {
    name: '醫療',
    emoji: '🩺',
    desc: '臨床思考、決策科學、工作路上的觀察',
    url: 'https://platypus-medicine.pages.dev',
  },
  knowledge: {
    name: '知識',
    emoji: '🧠',
    desc: '會計、法律、中醫、第二大腦、筆記法、各式雜知識',
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
    return 'platypus 的個人筆記 — 投資、野外、醫療、知識、AI、生活。';
  }
  const t = TOPIC_META[SITE_MODE];
  return `platypus 的${t.name}筆記 — ${t.desc}`;
}
