import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS, tagSlug } from './taxonomy';
const list = z.union([z.string(), z.array(z.string())]).optional()
  .transform((v) => (v == null ? [] : Array.isArray(v) ? v : [v]));
export const collections = {
  announcements: defineCollection({
    // files starting with "_" (e.g. _template.md) are ignored
    loader: glob({ pattern: '[^_]*.md', base: './src/content/announcements' }),
    schema: z.object({
      kind: z.enum(['default', 'timeline', 'profile']).default('default'), // timeline: 타임라인 미리보기 · profile: 프로필 사진 + 장식 배경 (image = 프로필 사진)
      title: z.string(),
      description: z.string().optional(),
      label: z.string().default('공지'),
      image: z.string().optional(),
      badges: z.array(z.string()).default([]),   // profile 배너에서 사진 주위에 떠 있는 태그
      link: z.string().optional(),
      linkLabel: z.string().default('자세히 보기'),
      order: z.number().default(0),
      start: z.coerce.date().optional(),
      end: z.coerce.date().optional(),
      draft: z.boolean().default(false),
    }),
  }),
  posts: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/posts' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.enum(CATEGORY_SLUGS),                                   // 축 1: 글의 성격
      tags: list.transform((ts) => [...new Set(ts.map(tagSlug))]),       // 축 2: 주제
      description: z.string().optional(),
      thumbnailImage: z.string().optional(),
    }),
  }),
};
