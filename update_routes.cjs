const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === '__root.tsx') continue;
  
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace imports
  content = content.replace(/import\s+{([^}]*)}\s+from\s+["']@tanstack\/react-router["'];?/g, (match, imports) => {
    if (imports.includes('Link')) {
      return 'import { Link } from "react-router-dom";';
    }
    return '';
  });

  // For blog_.$slug.tsx, remove loader dependencies from tanstack
  if (file === 'blog_.$slug.tsx') {
    content = content.replace(/import { createFileRoute, Link } from "@tanstack\/react-router";/, 'import { Link, useParams } from "react-router-dom";');
    content = content.replace(/const article = Route.useLoaderData\(\);/, 'const { slug } = useParams();\n  const article = React.useMemo(() => getArticleBySlug(slug || ""), [slug]);\n  if (!article) return <div className="p-8 text-center">Article not found</div>;');
  }

  // Remove Route definition
  content = content.replace(/export const Route = createFileRoute\([^)]+\)\(\{[\s\S]*?component:\s*([A-Za-z0-9_]+),?\s*\}\);/, '');

  // Export the component as default
  content = content.replace(/function\s+([A-Za-z0-9_]+)\s*\(/g, (match, name) => {
    if (['HomePage', 'BlogPage', 'ArticlePage', 'ContactPage', 'DemoPage', 'FeaturesPage', 'IndustriesPage', 'PricingPage'].includes(name)) {
      return `export default function ${name}(`;
    }
    return match;
  });

  // Fix Link to params for react-router-dom
  // <Link to="/blog/$slug" params={{ slug: p.slug }}> -> <Link to={`/blog/${p.slug}`}>
  content = content.replace(/<Link\s+key=\{([^\}]+)\}\s+to="\/blog\/\$slug"\s+params=\{\{\s*slug:\s*([^\}]+)\s*\}\}/g, '<Link key={$1} to={`/blog/${$2}`}');

  fs.writeFileSync(filePath, content);
}
