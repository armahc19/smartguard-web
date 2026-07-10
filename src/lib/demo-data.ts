import fm from 'front-matter';

export interface Demo {
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  thumbnail: string;
  video: string;
  features: string[];
  content: string;
}

// Vite's import.meta.glob to load all markdown files at build/runtime
const mdFiles = import.meta.glob('/src/content/demos/*.md', { query: '?raw', import: 'default', eager: true });

let cachedDemos: Demo[] | null = null;

export function getAllDemos(): Demo[] {
  if (cachedDemos) return cachedDemos;
  
  const demos: Demo[] = [];
  
  for (const path in mdFiles) {
    const rawContent = mdFiles[path] as string;
    const { attributes, body } = fm<Record<string, any>>(rawContent);
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    demos.push({
      slug,
      title: attributes.title || '',
      description: attributes.description || '',
      category: attributes.category || '',
      duration: attributes.duration || '',
      thumbnail: attributes.thumbnail || '',
      video: attributes.video || '',
      features: attributes.features || [],
      content: body,
    });
  }
  
  cachedDemos = demos;
  return cachedDemos;
}

export const demoItems = getAllDemos();

export function getDemoBySlug(slug: string): Demo | undefined {
  return getAllDemos().find((d) => d.slug === slug);
}
