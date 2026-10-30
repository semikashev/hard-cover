import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/utils/misc', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/utils/misc')>()),
  isCJKEnv: vi.fn(() => false),
}));

import { DEFAULT_BOOK_FONT, SANS_SERIF_FONTS } from '@/services/constants';
import { mountAdditionalFonts } from '@/styles/fonts';

// hard-cover reads Cyrillic books in Golos Text by default. Guards the fork
// default against upstream merges that touch the font constants.
describe('Golos Text as the default reading font', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  it('is the default sans-serif font and the default family', () => {
    expect(DEFAULT_BOOK_FONT.sansSerifFont).toBe('Golos Text');
    expect(DEFAULT_BOOK_FONT.defaultFont).toBe('Sans-serif');
  });

  it('is offered first in the sans-serif font list', () => {
    expect(SANS_SERIF_FONTS[0]).toBe('Golos Text');
  });

  it('is loaded from Google Fonts with the variable weight axis', async () => {
    await mountAdditionalFonts(document);
    const hrefs = [...document.head.querySelectorAll('link[href*="fonts.googleapis.com"]')].map(
      (link) => link.getAttribute('href') ?? '',
    );
    expect(hrefs.some((href) => href.includes('family=Golos%20Text:wght@400..900'))).toBe(true);
  });
});
