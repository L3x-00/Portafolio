import type { StackItem } from '../types';

export const stack: StackItem[] = [
  // ==========================================
  // --- FRONTEND ---
  // ==========================================
  { name: 'React',       icon: '/icons/react-color.svg',       level: 'Básico', color: '#61dafb', category: 'Frontend' },
  { name: 'TypeScript',  icon: '/icons/typescript-color.svg',  level: 'Intermedio', color: '#3178c6', category: 'Frontend' },
  { name: 'JavaScript',  icon: '/icons/javascript-color.svg',  level: 'Básico', color: '#f7df1e', category: 'Frontend' },
  { name: 'Next.js',     icon: '/icons/nextdotjs-color.svg',   level: 'Intermedio', color: '#f5f5f5', category: 'Frontend' },
  { name: 'Astro',       icon: '/icons/astro-color.svg',       level: 'Básico', color: '#ff5d01', category: 'Frontend' },
  { name: 'Three.js',    icon: '/icons/threedotjs-color.svg',  level: 'Básico', color: '#00f0ff', category: 'Frontend' },
  { name: 'Tailwind',    icon: '/icons/tailwindcss-color.svg', level: 'Intermedio', color: '#38bdf8', category: 'Frontend' },
  { name: 'GSAP',        icon: '/icons/gsap-color.svg',        level: 'Básico', color: '#88ce02', category: 'Frontend' },
  { name: 'Vite',        icon: '/icons/vite-color.svg',        level: 'Básico', color: '#646cff', category: 'Frontend' },
  { name: 'CSS',         icon: '/icons/css-color.svg',         level: 'Intermedio', color: '#264de4', category: 'Frontend' },
  { name: 'HTML',        icon: '/icons/html-color.svg',        level: 'Intermedio', color: '#e34c26', category: 'Frontend' },
  { name: 'Flutter',     icon: '/icons/flutter-color.svg',     level: 'Intermedio', color: '#02569b', category: 'Frontend' },
  { name: 'Bootstrap',   icon: '/icons/bootstrap-color.svg',   level: 'Básico',     color: '#563d7c', category: 'Frontend' },
  // Sugerencias Frontend: Vue.js, Svelte

  // ==========================================
  // --- BACKEND & BASES DE DATOS ---
  // ==========================================
  { name: 'Node.js',     icon: '/icons/nodedotjs-color.svg',   level: 'Intermedio', color: '#6da55f', category: 'Backend' },
  { name: 'Python',      icon: '/icons/python-color.svg',      level: 'Básico',     color: '#3776ab', category: 'Backend' },
  { name: 'MySQL',       icon: '/icons/mysql-color.svg',       level: 'Intermedio', color: '#4479a1', category: 'Backend' },
  { name: 'PostgreSQL',  icon: '/icons/PostgresSQL-color.svg', level: 'Intermedio', color: '#336791', category: 'Backend' },
  { name: 'Postman',     icon: '/icons/postman-color.svg',     level: 'Básico',     color: '#ff6c37', category: 'Backend' },
  { name: 'Insomnia',    icon: '/icons/Insomnia-color.svg',    level: 'Básico',     color: '#5849be', category: 'Backend' },
  { name: 'Git',         icon: '/icons/git-color.svg',         level: 'Intermedio', color: '#f05032', category: 'Backend' },
  { name: 'Swagger',     icon: '/icons/swaggerhub-color.svg',  level: 'Básico',     color: '#85ea2d', category: 'Backend' },
  { name: 'Thunder Client', icon: '/icons/thunderclient-color.svg', level: 'Básico', color: '#7e57c2', category: 'Backend' },
  // Sugerencias Backend: NestJS, Express, Laravel, Docker, Prisma

  // ==========================================
  // --- DISEÑO Y EDICIÓN ---
  // ==========================================
  { name: 'Figma',       icon: '/icons/figma-color.svg',       level: 'Básico', color: '#f24e1e', category: 'Diseño' },
  // Sugerencias Diseño: Adobe Premiere, After Effects, Photoshop, Illustrator

  // ==========================================
  // --- IA DE APOYO ---
  // ==========================================
  { name: 'ChatGPT',         icon: '/icons/chatgpt-color.svg',   level: 'Intermedio', color: '#10a37f', category: 'IA' },
  { name: 'Claude',          icon: '/icons/claude-color.svg',    level: 'Intermedio',     color: '#d97757', category: 'IA' },
  { name: 'GitHub Copilot',  icon: '/icons/githubcopilot-color.svg',   level: 'Básico', color: '#2da44e', category: 'IA' },
  { name: 'Gemini',          icon: '/icons/gemini-color.svg',    level: 'Avanzado',     color: '#8e44ad', category: 'IA' },
  { name: 'DeepSeek',        icon: '/icons/deepseek-color.svg',  level: 'Avanzado',     color: '#4d6bfe', category: 'IA' },
  { name: 'Z.ai',            icon: '/icons/zai-color.svg',       level: 'Avanzado',     color: '#00d4ff', category: 'IA' },
  // Sugerencias IA: Midjourney, RunwayML, Stable Diffusion
];