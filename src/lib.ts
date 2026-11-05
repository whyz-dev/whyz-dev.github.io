import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, tagLabel } from './taxonomy';
export { CATEGORIES, tagLabel };
export type Post = CollectionEntry<'posts'>;
export const getPosts = async () =>
  (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
export const fmt = (d: Date) => d.toISOString().slice(0, 10);
export const categoryOf = (p: Post) => p.data.category;
export const catInfo = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;
export const catLabel = (slug: string) => catInfo(slug).label;
export const countBy = (posts: Post[], key: (p: Post) => string[]) => {
  const m = new Map<string, number>();
  posts.forEach((p) => key(p).forEach((k) => m.set(k, (m.get(k) ?? 0) + 1)));
  return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};
// all categories in config order (including empty ones) with post counts
export const categories = (posts: Post[]) => CATEGORIES.map((c) => [c.slug, posts.filter((p) => p.data.category === c.slug).length] as [string, number]);
export const tags = (posts: Post[]) => countBy(posts, (p) => p.data.tags);
export const excerpt = (p: Post, n = 110) => {
  if (p.data.description) return p.data.description;
  const text = (p.body ?? '')
    .replace(/```[\s\S]*?```/g, ' ').replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ')
    .split('\n').map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#') && !l.startsWith('![') && !l.startsWith('|') && !l.startsWith('$$') && l !== p.data.title && !/^https?:\/\/\S+$/.test(l))
    .join(' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\$[^$]*\$/g, '').replace(/\\[\[\]()]?/g, '').replace(/[*_`>]/g, '').replace(/\s+/g, ' ').trim();
  return text.length > n ? text.slice(0, n).trim() + '…' : text;
};
export const getAnnouncements = async () => {
  const now = new Date();
  return (await getCollection('announcements'))
    .filter((a) => !a.data.draft && (!a.data.start || a.data.start <= now) && (!a.data.end || a.data.end >= now))
    .sort((a, b) => a.data.order - b.data.order);
};
export const catHref = (slug: string) => `/categories/${slug}/`;
export const tagHref = (t: string) => `/tags/${t}/`;
