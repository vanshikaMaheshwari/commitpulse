export interface BadgeLabels {
  CURRENT_STREAK: string;
  ANNUAL_SYNC_TOTAL: string;
  PEAK_STREAK: string;
  COMMITS_THIS_MONTH: string;
  VS_LAST_MONTH: string;
  // Wrapped / Year-in-Review badge labels
  TOTAL_CONTRIBUTIONS: string;
  TOP_LANGUAGE: string;
  WEEKEND_GRIND: string;
  PEAK_DAY: string;
  BUSIEST_MONTH: string;
}

export const labels: Record<string, BadgeLabels> = {
  en: {
    CURRENT_STREAK: 'CURRENT_STREAK',
    ANNUAL_SYNC_TOTAL: 'ANNUAL_SYNC_TOTAL',
    PEAK_STREAK: 'PEAK_STREAK',
    COMMITS_THIS_MONTH: 'COMMITS THIS MONTH',
    VS_LAST_MONTH: 'vs last month',
    TOTAL_CONTRIBUTIONS: 'TOTAL CONTRIBUTIONS',
    TOP_LANGUAGE: 'TOP LANGUAGE',
    WEEKEND_GRIND: 'WEEKEND GRIND',
    PEAK_DAY: 'PEAK DAY',
    BUSIEST_MONTH: 'BUSIEST MONTH',
  },
  zh: {
    CURRENT_STREAK: '当前连续记录',
    ANNUAL_SYNC_TOTAL: '年度总计',
    PEAK_STREAK: '最长连续记录',
    COMMITS_THIS_MONTH: '本月提交次数',
    VS_LAST_MONTH: '较上个月',
    TOTAL_CONTRIBUTIONS: '总贡献数',
    TOP_LANGUAGE: '主要语言',
    WEEKEND_GRIND: '周末奋斗',
    PEAK_DAY: '最高单日',
    BUSIEST_MONTH: '最忙月份',
  },
  es: {
    CURRENT_STREAK: 'RACHA_ACTUAL',
    ANNUAL_SYNC_TOTAL: 'TOTAL_ANUAL',
    PEAK_STREAK: 'RACHA_MÁXIMA',
    COMMITS_THIS_MONTH: 'COMMITS ESTE MES',
    VS_LAST_MONTH: 'vs mes anterior',
    TOTAL_CONTRIBUTIONS: 'CONTRIBUCIONES',
    TOP_LANGUAGE: 'IDIOMA PRINCIPAL',
    WEEKEND_GRIND: 'FIN DE SEMANA',
    PEAK_DAY: 'DÍA PICO',
    BUSIEST_MONTH: 'MES MÁS ACTIVO',
  },
  hi: {
    CURRENT_STREAK: 'वर्तमान_स्ट्रीक',
    ANNUAL_SYNC_TOTAL: 'वार्षिक_कुल',
    PEAK_STREAK: 'अधिकतम_स्ट्रीक',
    COMMITS_THIS_MONTH: 'इस महीने के कमिट्स',
    VS_LAST_MONTH: 'पिछले महीने की तुलना में',
    TOTAL_CONTRIBUTIONS: 'कुल योगदान',
    TOP_LANGUAGE: 'मुख्य भाषा',
    WEEKEND_GRIND: 'वीकेंड ग्राइंड',
    PEAK_DAY: 'सर्वोच्च दिन',
    BUSIEST_MONTH: 'सबसे व्यस्त माह',
  },
  pt: {
    CURRENT_STREAK: 'SÉRIE_ATUAL',
    ANNUAL_SYNC_TOTAL: 'TOTAL_ANUAL',
    PEAK_STREAK: 'SÉRIE_MÁXIMA',
    COMMITS_THIS_MONTH: 'COMMITS ESTE MÊS',
    VS_LAST_MONTH: 'vs mês passado',
    TOTAL_CONTRIBUTIONS: 'CONTRIBUIÇÕES',
    TOP_LANGUAGE: 'LINGUAGEM PRINCIPAL',
    WEEKEND_GRIND: 'FOCO NO FIM DE SEMANA',
    PEAK_DAY: 'DIA DE PICO',
    BUSIEST_MONTH: 'MÊS MAIS ATIVO',
  },
  ko: {
    CURRENT_STREAK: '현재_연속',
    ANNUAL_SYNC_TOTAL: '연간_총계',
    PEAK_STREAK: '최고_연속',
    COMMITS_THIS_MONTH: '이번 달 커밋',
    VS_LAST_MONTH: '지난달 대비',
    TOTAL_CONTRIBUTIONS: '총 기여 수',
    TOP_LANGUAGE: '주요 언어',
    WEEKEND_GRIND: '주말 작업',
    PEAK_DAY: '최고 활동일',
    BUSIEST_MONTH: '가장 바쁜 달',
  },
  ja: {
    CURRENT_STREAK: '現在のストリーク',
    ANNUAL_SYNC_TOTAL: '年間合計',
    PEAK_STREAK: '最高ストリーク',
    COMMITS_THIS_MONTH: '今月のコミット数',
    VS_LAST_MONTH: '先月比',
    TOTAL_CONTRIBUTIONS: '総コントリビューション',
    TOP_LANGUAGE: 'メイン言語',
    WEEKEND_GRIND: '週末の活動',
    PEAK_DAY: 'ピーク日',
    BUSIEST_MONTH: '最も忙しい月',
  },
  fr: {
    CURRENT_STREAK: 'SÉRIE_ACTUELLE',
    ANNUAL_SYNC_TOTAL: 'TOTAL_ANNUEL',
    PEAK_STREAK: 'SÉRIE_MAXIMALE',
    COMMITS_THIS_MONTH: 'COMMITS CE MOIS',
    VS_LAST_MONTH: 'vs mois dernier',
    TOTAL_CONTRIBUTIONS: 'CONTRIBUTIONS',
    TOP_LANGUAGE: 'LANGAGE PRINCIPAL',
    WEEKEND_GRIND: 'TRAVAIL DU WEEKEND',
    PEAK_DAY: 'JOUR DE POINTE',
    BUSIEST_MONTH: 'MOIS LE PLUS ACTIF',
  },
  ta: {
    CURRENT_STREAK: 'தற்போதைய_தொடர்',
    ANNUAL_SYNC_TOTAL: 'ஆண்டு_மொத்தம்',
    PEAK_STREAK: 'உச்ச_தொடர்',
    COMMITS_THIS_MONTH: 'இம்மாத கமிட்கள்',
    VS_LAST_MONTH: 'கடந்த மாதத்துடன்',
    TOTAL_CONTRIBUTIONS: 'மொத்த பங்களிப்புகள்',
    TOP_LANGUAGE: 'முக்கிய மொழி',
    WEEKEND_GRIND: 'வார இறுதி உழைப்பு',
    PEAK_DAY: 'உச்ச நாள்',
    BUSIEST_MONTH: 'மிக பரபரப்பான மாதம்',
  },
  de: {
    CURRENT_STREAK: 'AKTUELLE_SERIE',
    ANNUAL_SYNC_TOTAL: 'JAHRES_GESAMT',
    PEAK_STREAK: 'SPITZEN_SERIE',
    COMMITS_THIS_MONTH: 'COMMITS DIESEN MONAT',
    VS_LAST_MONTH: 'im Vgl. zum Vormonat',
    TOTAL_CONTRIBUTIONS: 'BEITRÄGE GESAMT',
    TOP_LANGUAGE: 'HAUPTSPRACHE',
    WEEKEND_GRIND: 'WOCHENEND-ARBEIT',
    PEAK_DAY: 'SPITZENTAG',
    BUSIEST_MONTH: 'AKTIVSTER MONAT',
  },
};

export const supportedLanguages = Object.keys(labels) as [
  keyof typeof labels,
  ...(keyof typeof labels)[],
];

export function getLabels(lang: string = 'en'): BadgeLabels {
  return labels[lang.toLowerCase()] || labels['en'];
}
