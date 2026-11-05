# whyz.dev

[whyz-dev.github.io](https://whyz-dev.github.io) 블로그 소스입니다. [Astro](https://astro.build)로 만들고 GitHub Actions로 배포해요.

## 로컬에서 실행

```bash
npm install
npm run dev   # http://localhost:4321
```

## 자주 고치는 곳

| 무엇 | 파일 |
|---|---|
| 글 | `src/content/posts/*.md` (`category`, `tags`, `description`) |
| 카테고리·주제 태그 이름 | `src/taxonomy.ts` |
| 홈 상단 배너 | `src/content/announcements/*.md` (`_template.md` 참고) |
| 타임라인 | `src/data/timeline.ts` |
| 소개 페이지 (소개·링크·메일·학력·활동·기술) | `src/data/profile.ts` |

`master`에 푸시하면 자동으로 빌드되어 배포돼요. 예전 Hexo 사이트는 `legacy-hexo` 태그에 남아 있어요.
