import { describe, it, expect } from 'vitest';
import { INITIAL_GUIDES, GUIDE_LEVELS, estimateReadMinutes } from './guides.js';
import { INITIAL_SKILLS, INITIAL_QUESTS } from './gameData.js';

const BLOCK_TYPES = new Set(['h3', 'p', 'list', 'code', 'tip', 'pitfall', 'compare']);

describe('Grimórios integrity', () => {
  it('keeps the ids players already studied (they live in studiedGuides)', () => {
    const ids = INITIAL_GUIDES.map((g) => g.id);
    for (const legacy of ['async', 'flexbox', 'dom', 'hooks']) expect(ids).toContain(legacy);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('covers every skill of the trail with at least one guide', () => {
    const covered = new Set(INITIAL_GUIDES.map((g) => g.skillId).filter(Boolean));
    for (const skill of INITIAL_SKILLS) expect(covered.has(skill.id), skill.id).toBe(true);
  });

  it('points only at real skills and quests of the same skill', () => {
    const skills = new Set(INITIAL_SKILLS.map((s) => s.id));
    const quests = new Map(INITIAL_QUESTS.map((q) => [q.id, q]));
    for (const g of INITIAL_GUIDES) {
      if (g.skillId) expect(skills.has(g.skillId), g.id).toBe(true);
      for (const qid of g.questIds) {
        expect(quests.has(qid), `${g.id} → ${qid}`).toBe(true);
        expect(quests.get(qid).skillId, `${g.id} → ${qid}`).toBe(g.skillId);
      }
    }
  });

  it('has complete, well-formed content', () => {
    for (const g of INITIAL_GUIDES) {
      expect(g.title && g.description && g.mentorSummary, g.id).toBeTruthy();
      expect(GUIDE_LEVELS).toContain(g.level);
      expect(g.objectives.length, g.id).toBeGreaterThanOrEqual(3);
      expect(g.checklist.length, g.id).toBeGreaterThanOrEqual(3);
      expect(g.content.length, g.id).toBeGreaterThanOrEqual(5);
      for (const block of g.content) {
        expect(BLOCK_TYPES.has(block.type), `${g.id}: ${block.type}`).toBe(true);
        if (block.type === 'list') expect(block.items.length).toBeGreaterThan(0);
        else if (block.type === 'compare') expect(block.bad && block.good).toBeTruthy();
        else expect(block.text).toBeTruthy();
      }
      for (const ref of g.references) expect(ref.url).toMatch(/^https:\/\//);
      expect(g.readTime).toBe(`${estimateReadMinutes(g)} min`);
    }
  });
});
