import fm from 'front-matter';

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  content: string;
}

// Vite's import.meta.glob to load all markdown files at build/runtime
const mdFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

let cachedArticles: BlogArticle[] | null = null;

export function getAllArticles(): BlogArticle[] {
  if (cachedArticles) return cachedArticles;
  
  const articles: BlogArticle[] = [];
  
  for (const path in mdFiles) {
    const rawContent = mdFiles[path] as string;
    const { attributes, body } = fm<Record<string, any>>(rawContent);
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    articles.push({
      slug,
      title: attributes.title || '',
      category: attributes.category || '',
      excerpt: attributes.excerpt || '',
      author: attributes.author || '',
      date: attributes.date || '',
      readTime: attributes.readTime || '',
      relatedSlugs: attributes.relatedSlugs || [],
      seoTitle: attributes.seoTitle || '',
      seoDescription: attributes.seoDescription || '',
      ogTitle: attributes.ogTitle || '',
      ogDescription: attributes.ogDescription || '',
      content: body,
    });
  }
  
  // Sort by date descending
  cachedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return cachedArticles;
}

// Keep the old variable name for compatibility if used elsewhere, though we should transition to function
export const blogArticles = getAllArticles();

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  if (!article.relatedSlugs || !Array.isArray(article.relatedSlugs)) return [];
  return article.relatedSlugs
    .map((s) => getAllArticles().find((a) => a.slug === s))
    .filter((a): a is BlogArticle => !!a);
}
