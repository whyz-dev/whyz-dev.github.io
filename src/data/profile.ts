// 소개(/about) 페이지에 보이는 프로필 정보입니다.
// 값을 비워두면('') 해당 버튼·항목이 화면에 나타나지 않아요.

export const PROFILE = {
  name: 'whyz',
  realName: '',                 // 예: '조강준' — 비워두면 표시 안 함
  headline: 'Physical AI · Robotics · Computer Vision',
  intro: [
    '데이터 사이언스를 바탕으로 AI 모델과 머신러닝의 학습·추론 파이프라인 설계를 공부해 왔습니다.',
    '지금은 AI가 화면 바깥의 물리 세상에서 움직이도록 만드는 방법을 공부하고 있습니다.',
  ],
  interests: ['physical-ai', 'robotics', 'cv', 'ml', 'llm'],   // 주제 태그와 연결돼요
};

export const LINKS = {
  github: 'https://github.com/whyz-dev',
  dacon: 'https://dacon.io/myprofile/273311/home',
  kaggle: 'https://www.kaggle.com/aura02',
  linkedin: 'https://www.linkedin.com/in/gangjun-jo-95462525b/',
  emails: ['4ura02@gmail.com', '22011625@sju.ac.kr'],   // 여러 개 가능, 비우면 버튼 숨김
};

// 학력 (위에서부터 최근 순)
export const EDUCATION: { name: string; detail: string; period: string; logo: string }[] = [
  { name: '세종대학교', detail: '컴퓨터공학과', period: '2022 ~', logo: '/img/logos/sejong.png' },
  { name: '선린인터넷고등학교', detail: '정보보호과', period: '', logo: '/img/logos/sunrin.png' },
];

// 소속·활동 (팀, 연구실, 동아리 등 — 위에서부터 최근 순)
// where: 어디에서 한 활동인지 (비우면 표시 안 함) · logo: public/ 기준 경로 (비우면 첫 글자로 표시)
export const ACTIVITIES: { name: string; role?: string; where?: string; period: string; logo?: string }[] = [
  { name: 'Team Physic', role: 'Physical AI·로보틱스 대회 팀', period: '2026 ~', logo: '/img/logos/team-physic.png' },
  { name: 'VIPLAB', role: '학부연구생', where: '세종대학교', period: '2022', logo: '/img/logos/sejong.png' },
  { name: 'Unifox', role: '10기', where: '선린인터넷고등학교', period: '2018 ~ 2020', logo: '/img/logos/unifox.svg' },
  { name: '선린 정보올림피아드 대비반', role: '3기', where: '선린인터넷고등학교', period: '2019 ~ 2020', logo: '/img/logos/sunrin.png' },
  { name: 'Evolution', role: '1기', where: '선린인터넷고등학교', period: '2019' },
];

// 기술 스택 (GitHub·대회·프로젝트에서 실제로 쓴 것 기준)
export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C++', 'C'] },
  { group: 'AI / ML', items: ['PyTorch', 'scikit-learn', 'LightGBM', 'XGBoost', 'Hugging Face'] },
  { group: 'Vision', items: ['OpenCV', 'YOLO', 'EfficientNet'] },
  { group: 'Robotics', items: ['ROS 2', 'Gazebo', 'URDF / TF'] },
  { group: 'Tools', items: ['Docker', 'Git', 'Linux'] },
];
