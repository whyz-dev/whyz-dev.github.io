// ── 축 1: 글의 성격 (글마다 하나) ─────────────────────────────
// 새 카테고리는 여기에만 추가하면 헤더 탭·사이드바·페이지에 반영됩니다.
export const CATEGORIES = [
  { slug: 'project', label: '프로젝트', description: '대회·프로젝트의 과정과 결과를 정리합니다.' },
  { slug: 'paper',   label: '논문',     description: '읽은 논문과 저널을 정리하고 리뷰합니다.' },
  { slug: 'ps',      label: '문제 풀이', description: '알고리즘 문제 풀이를 기록합니다.' },
  { slug: 'notes',   label: '노트',     description: '공부 기록과 생각을 정리합니다.' },
] as const;
export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

// ── 축 2: 주제 태그 (글마다 여러 개) ──────────────────────────
// frontmatter에는 소문자-하이픈으로 적고(physical-ai), 화면 표기는 여기서 정합니다.
// 여기 없는 태그는 적은 그대로 보입니다.
export const TAG_LABELS: Record<string, string> = {
  ai: 'AI', ml: 'ML', 'physical-ai': 'Physical AI', robotics: 'Robotics', cv: 'CV', nlp: 'NLP', llm: 'LLM',
  ros2: 'ROS 2',
  boj: 'BOJ', dp: 'DP', koi: 'KOI', lca: 'LCA', dacon: 'Dacon', kaggle: 'Kaggle',
};
export const tagSlug = (t: string) => t.trim().toLowerCase().replace(/[\s_]+/g, '-');
export const tagLabel = (t: string) => TAG_LABELS[t] ?? t;
