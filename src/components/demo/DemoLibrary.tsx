import { useState } from 'react';
import { Demo } from '@/lib/demo-data';
import { Search } from 'lucide-react';
import { CategoryFilter } from './CategoryFilter';
import { DemoCard } from './DemoCard';
import { VideoPlayer } from './VideoPlayer';

interface DemoLibraryProps {
  demos: Demo[];
}

const CATEGORIES = ['All Demos', 'Warehouse', 'Office Security', 'Factory', 'Retail', 'Other'];

export function DemoLibrary({ demos }: DemoLibraryProps) {
  const [activeCategory, setActiveCategory] = useState('All Demos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);

  const filteredDemos = demos.filter(d => {
    const matchesCategory = activeCategory === 'All Demos' || d.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) || d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
        <CategoryFilter 
          categories={CATEGORIES} 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />
        <div className="relative w-full md:w-64 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            className="w-full bg-secondary/30 border border-border/50 text-foreground text-sm rounded-md focus:ring-primary focus:border-primary block pl-10 p-2 transition-colors placeholder:text-muted-foreground/70"
            placeholder="Search demos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {filteredDemos.length === 0 ? (
        <div className="py-20 text-center glass-panel rounded-lg">
          <h3 className="text-lg font-medium text-foreground">No demos found</h3>
          <p className="mt-2 text-muted-foreground">Check back later or try selecting a different category.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDemos.map(demo => (
            <DemoCard 
              key={demo.slug} 
              demo={demo} 
              onClick={() => setActiveDemo(demo)} 
            />
          ))}
        </div>
      )}

      <VideoPlayer demo={activeDemo} onClose={() => setActiveDemo(null)} />
    </div>
  );
}
