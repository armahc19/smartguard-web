
interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(c => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeCategory === c 
              ? 'bg-primary text-primary-foreground font-medium' 
              : 'bg-background/40 border border-border/60 text-muted-foreground hover:text-foreground'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
