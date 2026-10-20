import assert from 'node:assert/strict';
import { test } from 'node:test';
import { newsItems, mediaCoverage } from '../src/data/news.ts';
import { profile, seo } from '../src/settings.ts';

test('site settings describe the SustainAI Lab', () => {
  assert.equal(profile.fullName, 'SustainAI Lab');
  assert.equal(profile.research_areas.length, 5);
  assert.ok(seo.default_title.includes('SustainAI'));
});

test('news data is populated', () => {
  assert.ok(newsItems.length > 0);
  assert.ok(mediaCoverage.length > 0);
  for (const item of newsItems) {
    assert.ok(item.date && item.description);
  }
});
