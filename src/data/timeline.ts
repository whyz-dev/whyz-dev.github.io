// 블로그 "타임라인" 탭에 보이는 포트폴리오 항목입니다.
// 항목을 추가·수정하려면 이 배열만 고치면 됩니다. (최근 항목이 위로 정렬돼요)
//
// type      : 'contest'(대회) | 'project'(프로젝트)
// start/end : 'YYYY.MM' — end를 비우면 단일 시점, 'now'면 진행 중
// result    : 결과 한 줄 (예: '1위 / 28팀')
// award     : true면 결과를 강조 표시 (수상·상위권)
// post      : 관련 블로그 글 id (주소 /posts/<id>/ 의 <id>)
// link      : 대회 공식 페이지 (카드에 '대회 페이지 ↗'로 표시)
// image     : 카드에 보일 이미지 (public/img/timeline/ 에 넣고 경로 적기)
export type TimelineItem = {
  type: 'contest' | 'project';
  title: string;
  start: string;
  end?: string;
  org?: string;
  summary: string;
  points?: string[];
  result?: string;
  award?: boolean;
  tags?: string[];
  team?: string;
  repo?: string;
  post?: string;
  link?: string;      // 대회·프로젝트 공식 페이지
  image?: string;     // public/ 기준 경로 (예: /img/timeline/aic.jpg)
  imageAlt?: string;
  imageFit?: 'cover' | 'contain'; // contain: 이미지를 자르지 않고 전체 표시 (글자가 있는 로고용)
};

export const TIMELINE: TimelineItem[] = [
  {
    type: 'contest',
    title: 'Singapore Embodied AI Challenge for Manufacturing',
    org: 'NTU · A*STAR · National Robotics Programme',
    start: '2026.10', end: 'now',
    summary: '인식·추론·계획·물리 행동을 연결해 제조용 로봇 조립 시스템을 만드는 Embodied AI 대회입니다. 온라인 시뮬레이션 단계(2026.10~12)를 진행하고 있고, 결선은 2027년 3월 싱가포르 현장에서 열립니다.',
    result: '시뮬레이션 단계 진행 중',
    tags: ['physical-ai', 'robotics'],
    team: 'Team Physic',
    link: 'https://nrp.gov.sg/SGEAIchallenge/',
    image: '/img/timeline/sgeai.jpg',
    imageAlt: '양팔 로봇이 챔버를 조립하는 시뮬레이션 장면 (출처: 대회 공식 시연 영상)',
  },
  {
    type: 'contest',
    title: 'AI for Industry Challenge',
    org: 'Intrinsic',
    start: '2026.08', end: 'now',
    summary: '시뮬레이션에서 UR5e 로봇 팔이 케이블을 지정된 포트에 꽂는 산업 자동화 과제에 팀으로 참가했습니다.',
    points: [
      '카메라 3대와 힘/토크 센서로 포트 위치·자세를 추정하기 위한 img2pos 학습 데이터 자동 수집 파이프라인 설계',
      '거리·횡방향·카메라 각도 층화 샘플링, 근접 구간(50/10/5/2mm) 집중 샘플링',
      '카메라·controller·TF 타임스탬프 동기화, Gazebo 병렬 headless 수집',
    ],
    tags: ['physical-ai', 'robotics', 'ros2'],
    team: '2인 팀 · 주 개발',
    repo: 'https://github.com/Team-Physic/aic-physic',
    image: '/img/timeline/aic.jpg',
    imageAlt: 'Gazebo 시뮬레이션에서 UR5e 로봇 팔이 케이블을 포트로 옮기는 장면',
  },
  {
    type: 'contest',
    title: 'AI·SW중심대학 디지털 경진대회 : AI부문',
    org: 'AI·SW중심대학',
    start: '2026.04', end: '2026.07',
    summary: 'NLP·AI Agent 과제로 교내 대회에서 최우수상을 받고 전국 본선에 진출했습니다.',
    points: ['본선: mDeBERTa 베이스라인, Qwen 기반 번역 데이터셋 생성'],
    result: '교내 최우수상 · 본선 진출',
    award: true,
    tags: ['nlp', 'llm'],
    link: 'https://dacon.io/competitions/official/236694/overview/',
    image: '/img/timeline/dacon-236694.jpg',
    imageAlt: '대회 대표 이미지 (출처: Dacon)',
  },
  {
    type: 'project',
    title: 'Secern AI Workshop — 얼굴 위조 탐지',
    start: '2026.02', end: '2026.05',
    summary: '사진·영상을 이용한 얼굴 인증 위조 공격을 판별하는 라이브니스(Liveness) 탐지 모델을 개발했습니다.',
    points: [
      'MiniFASNetV2 사전학습 백본 + 이진 분류 헤드',
      'MSU-MFSD, Idiap Replay-Attack 데이터셋, 영상 프레임 샘플링',
      '이미지·영상·웹캠 추론 지원',
    ],
    tags: ['cv', 'ai'],
    image: '/img/timeline/secern-domain-gap.jpg',
    imageAlt: 'CelebA-Spoof, MSU-MFSD, Idiap Replay-Attack 데이터셋 간 도메인 차이를 비교한 히트맵',
    imageFit: 'contain',
  },
  {
    type: 'contest',
    title: '구조물 안정성 물리 추론 AI 경진대회',
    org: 'Dacon',
    start: '2026.03',
    summary: '두 시점의 구조물 이미지로 10초 안에 붕괴하는지 예측하는 시각 기반 물리 추론 대회에 팀으로 참가했습니다.',
    result: '66위 / 484팀',
    tags: ['physical-ai', 'cv'],
    repo: 'https://github.com/whyz-dev/structure-stability',
    image: '/img/timeline/dacon-236686.jpg',
    imageAlt: '대회 대표 이미지 (출처: Dacon)',
    link: 'https://dacon.io/competitions/official/236686/overview/',
  },
  {
    type: 'contest',
    title: 'Vesuvius Challenge – Surface Detection',
    org: 'Kaggle',
    start: '2026.03',
    summary: '화산재에 묻혀 탄화된 고대 두루마리의 CT 스캔에서 종이 표면을 찾아내, 두루마리를 가상으로 펼치기 위한 모델을 만드는 연구 대회입니다.',
    result: '484위 / 1391팀',
    tags: ['cv', 'ai'],
    link: 'https://www.kaggle.com/competitions/vesuvius-challenge-surface-detection',
    image: '/img/timeline/kaggle-vesuvius.jpg',
    imageAlt: '대회 대표 이미지 (출처: Kaggle)',
  },
  {
    type: 'contest',
    title: '세종 AI Challenge 2025F',
    org: '세종대 SW중심대학사업단',
    start: '2025.11',
    summary: '세종대 학생 대상 인공지능 문제 해결 경진대회입니다. 3시간 동안 Kaggle에서 3가지 문제 유형 중 선택해 푸는 방식으로, Q2 유형에서 1위를 했습니다.',
    points: ['2025.11.27 본시험 (3시간, 파이썬 트랙)', 'Q2 유형 리더보드 1위 / 28팀'],
    result: 'Q2 유형 1위 / 28팀',
    award: true,
    tags: ['ai', 'kaggle'],
    link: 'https://www.kaggle.com/competitions/2025F-sejong-ai-challenge-q2',
    image: '/img/timeline/kaggle-sejong-2025f.png',
    imageFit: 'contain',
    imageAlt: '대회 대표 이미지 (출처: Kaggle)',
  },
  {
    type: 'contest',
    title: 'HAI! Hecto AI Challenge (2025 상·하반기)',
    org: 'Dacon · 헥토',
    start: '2025.05', end: '2025.11',
    summary: '헥토 채용 연계 비전 분류 대회에 상반기·하반기 두 번 참가했습니다. 하반기는 딥페이크 판별 과제였습니다.',
    points: ['상반기: 이미지 분류 — 98위 / 748 (상위 13%)', '하반기: 딥페이크 분류 — 298위 / 458'],
    result: '상반기 98위 / 748 (상위 13%)',
    tags: ['cv', 'ai'],
    link: 'https://dacon.io/competitions/official/236628/overview/',
    image: '/img/timeline/dacon-236628.jpg',
    imageAlt: '대회 대표 이미지 (출처: Dacon)',
  },
  {
    type: 'contest',
    title: '제2회 Medical AI (MAI) 경진대회',
    org: 'Dacon',
    start: '2025',
    summary: '유전자 데이터를 다루는 의료 AI 대회입니다.',
    result: '12위 / 477 (상위 2.5%)',
    award: true,
    tags: ['ai', 'bio-data'],
    link: 'https://dacon.io/competitions/official/236630/overview/',
    image: '/img/timeline/dacon-236630.jpg',
    imageAlt: '대회 대표 이미지 (출처: Dacon)',
  },
  {
    type: 'contest',
    title: 'K리그-서울시립대 공개 AI 경진대회 Track1',
    org: 'Dacon',
    start: '2025',
    summary: '축구 경기 시계열 데이터를 다루는 스포츠 AI 대회입니다.',
    result: '79위 / 937 (상위 8.4%)',
    award: true,
    tags: ['ml'],
    link: 'https://dacon.io/competitions/official/236647/overview/',
    image: '/img/timeline/dacon-236647.jpg',
    imageAlt: '대회 대표 이미지 (출처: Dacon)',
  },
  {
    type: 'contest',
    title: '2024 생명연구자원 AI활용 경진대회',
    org: 'Dacon',
    start: '2024',
    summary: '유전체 변이 데이터로 암 종류를 분류하는 대회입니다.',
    points: ['외부 데이터(TCGA) 보강, SMOTE·ADASYN으로 클래스 불균형 처리', '논문에서 착안한 변이 피처 추가로 점수 0.119 → 0.502'],
    result: '17위 / 940 (상위 1.8%)',
    award: true,
    tags: ['ml', 'bio-data'],
    post: 'dacon-2024-생명연구자원-ai활용-경진대회-후기',
    image: '/img/timeline/dacon-236355.jpg',
    imageAlt: '대회 대표 이미지 (출처: Dacon)',
    link: 'https://dacon.io/competitions/official/236355/overview/',
  },
];

// ── helpers (타임라인 페이지와 홈 배너에서 같이 사용) ──
const sortKey = (i: TimelineItem) => (i.end === 'now' ? '9999' : i.end ?? i.start).padEnd(7, '.13');
export const sortedTimeline = () =>
  [...TIMELINE].sort((a, b) => sortKey(b).localeCompare(sortKey(a)) || b.start.localeCompare(a.start));
export const periodOf = (i: TimelineItem) => (i.end ? `${i.start} – ${i.end === 'now' ? '진행 중' : i.end}` : i.start);
export const yearOf = (i: TimelineItem) => (i.end && i.end !== 'now' ? i.end : i.start).slice(0, 4);
