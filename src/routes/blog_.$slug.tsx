import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ChevronRight, Clock, Calendar } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/lib/blog-data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { seoTitle, seoDescription, ogTitle, ogDescription, title } = loaderData;
    return {
      meta: [
        { title: seoTitle || title },
        { name: "description", content: seoDescription },
        { property: "og:title", content: ogTitle || seoTitle || title },
        { property: "og:description", content: ogDescription || seoDescription },
        { property: "og:type", content: "article" },
      ],
    };
  },
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) {
      throw new Error("Article not found");
    }
    return article;
  },
  component: ArticlePage,
});

const generateId = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
  }
  if (Array.isArray(children)) {
    return children
      .map(c => typeof c === 'string' ? c : '')
      .join('')
      .toLowerCase()
      .replace(/[^\w]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  return '';
};

function extractHeadings(markdown: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(##|###)\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = generateId(text);
    headings.push({ id, text, level });
  }
  return headings;
}

function ArticlePage() {
  const article = Route.useLoaderData();
  const relatedArticles = getRelatedArticles(article);
  const headings = React.useMemo(() => extractHeadings(article.content), [article.content]);

  return (
    <SiteLayout>
      <div className="container-page py-8 pt-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-muted-foreground mb-12">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-border" />
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-border" />
          <span className="text-foreground truncate">{article.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Content */}
          <article className="lg:w-2/3 xl:w-3/4">
            <header className="mb-10 pb-10 border-b border-border/60">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{article.category}</div>
              <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/30">
                    {article.author.charAt(0)}
                  </span>
                  <span className="font-medium text-foreground">{article.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </header>

            <div className="mt-8">
              <p className="text-xl text-foreground font-medium leading-relaxed mb-12">
                {article.excerpt}
              </p>

              <div className="prose-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ node, ...props }) => <h2 id={generateId(props.children)} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground scroll-mt-28" {...props} />,
                    h3: ({ node, ...props }) => <h3 id={generateId(props.children)} className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground scroll-mt-28" {...props} />,
                    p: ({ node, ...props }) => <p className="text-muted-foreground text-lg leading-relaxed mb-6" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 text-muted-foreground text-lg space-y-2" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 text-muted-foreground text-lg space-y-2" {...props} />,
                    li: ({ node, ...props }) => <li {...props} />,
                    a: ({ node, ...props }) => <a className="text-primary hover:underline hover:text-primary-glow transition-colors" {...props} />,
                    strong: ({ node, ...props }) => <strong className="text-foreground font-semibold" {...props} />,
                    blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary pl-4 py-1 italic text-muted-foreground bg-primary/5 rounded-r-md" {...props} />,
                    code: ({ node, className, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '')
                      return !match ? (
                        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props} />
                      ) : (
                        <code className={className} {...props} />
                      )
                    }
                  }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 xl:w-1/4">
            <div className="sticky top-28 space-y-10">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="glass-panel p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                    Table of Contents
                  </h3>
                  <nav className="flex flex-col gap-3">
                    {headings.map((heading, idx) => (
                      <a
                        key={`${heading.id}-${idx}`}
                        href={`#${heading.id}`}
                        className={`text-sm hover:text-primary transition-colors ${
                          heading.level === 3 ? "pl-4 text-muted-foreground" : "text-foreground font-medium"
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="glass-panel p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                    Related Reading
                  </h3>
                  <div className="flex flex-col gap-5">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        to="/blog/$slug"
                        params={{ slug: rel.slug }}
                        className="group block"
                      >
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{rel.category}</div>
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
