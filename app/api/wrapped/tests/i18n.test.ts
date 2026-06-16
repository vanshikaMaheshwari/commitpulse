// app/api/wrapped/tests/i18n.test.ts
import { describe, it, expect } from 'vitest';
import { wrappedParamsSchema } from '@/lib/validations';
import { getLabels } from '@/lib/i18n/badgeLabels';

// ---------------------------------------------------------------------------
// 1. wrappedParamsSchema – lang field validation & defaulting
// ---------------------------------------------------------------------------

describe('wrappedParamsSchema – lang param', () => {
  it('defaults lang to "en" when omitted', () => {
    const result = wrappedParamsSchema.safeParse({ user: 'octocat' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.lang).toBe('en');
    }
  });

  it('accepts every supported locale', () => {
    const locales = ['en', 'zh', 'es', 'hi', 'pt', 'ko', 'ja', 'fr', 'ta', 'de'];
    for (const lang of locales) {
      const result = wrappedParamsSchema.safeParse({ user: 'octocat', lang });
      expect(result.success, `locale "${lang}" should be valid`).toBe(true);
      if (result.success) {
        expect(result.data.lang).toBe(lang);
      }
    }
  });

  it('falls back to "en" for an unsupported locale (catch behaviour)', () => {
    const result = wrappedParamsSchema.safeParse({ user: 'octocat', lang: 'klingon' });
    // .catch('en') means the schema still succeeds but coerces to 'en'
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.lang).toBe('en');
    }
  });
});

// ---------------------------------------------------------------------------
// 2. getLabels – wrapped-specific keys are present and non-empty
// ---------------------------------------------------------------------------

const WRAPPED_KEYS = [
  'TOTAL_CONTRIBUTIONS',
  'TOP_LANGUAGE',
  'WEEKEND_GRIND',
  'PEAK_DAY',
  'BUSIEST_MONTH',
] as const;

describe('getLabels – wrapped keys exist for all locales', () => {
  const locales = ['en', 'zh', 'es', 'hi', 'pt', 'ko', 'ja', 'fr', 'ta', 'de'];

  for (const lang of locales) {
    it(`locale "${lang}" has all wrapped keys as non-empty strings`, () => {
      const l = getLabels(lang);
      for (const key of WRAPPED_KEYS) {
        expect(typeof l[key], `${lang}.${key} should be a string`).toBe('string');
        expect(l[key].length, `${lang}.${key} should not be empty`).toBeGreaterThan(0);
      }
    });
  }
});

// ---------------------------------------------------------------------------
// 3. Spot-check translations for a handful of non-English locales
// ---------------------------------------------------------------------------

describe('getLabels – wrapped key translations (spot-check)', () => {
  it('returns correct Hindi labels', () => {
    const l = getLabels('hi');
    expect(l.TOTAL_CONTRIBUTIONS).toBe('कुल योगदान');
    expect(l.TOP_LANGUAGE).toBe('मुख्य भाषा');
    expect(l.WEEKEND_GRIND).toBe('वीकेंड ग्राइंड');
    expect(l.PEAK_DAY).toBe('सर्वोच्च दिन');
    expect(l.BUSIEST_MONTH).toBe('सबसे व्यस्त माह');
  });

  it('returns correct Japanese labels', () => {
    const l = getLabels('ja');
    expect(l.TOTAL_CONTRIBUTIONS).toBe('総コントリビューション');
    expect(l.TOP_LANGUAGE).toBe('メイン言語');
    expect(l.WEEKEND_GRIND).toBe('週末の活動');
    expect(l.PEAK_DAY).toBe('ピーク日');
    expect(l.BUSIEST_MONTH).toBe('最も忙しい月');
  });

  it('returns correct French labels', () => {
    const l = getLabels('fr');
    expect(l.TOTAL_CONTRIBUTIONS).toBe('CONTRIBUTIONS');
    expect(l.TOP_LANGUAGE).toBe('LANGAGE PRINCIPAL');
    expect(l.WEEKEND_GRIND).toBe('TRAVAIL DU WEEKEND');
    expect(l.PEAK_DAY).toBe('JOUR DE POINTE');
    expect(l.BUSIEST_MONTH).toBe('MOIS LE PLUS ACTIF');
  });

  it('falls back to English for unknown lang', () => {
    const l = getLabels('xx');
    expect(l.TOTAL_CONTRIBUTIONS).toBe('TOTAL CONTRIBUTIONS');
    expect(l.TOP_LANGUAGE).toBe('TOP LANGUAGE');
  });
});
