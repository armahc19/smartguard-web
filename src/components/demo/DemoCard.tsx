import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { Demo } from '@/lib/demo-data';

interface DemoCardProps {
  demo: Demo;
  onClick: () => void;
}

export function DemoCard({ demo, onClick }: DemoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {/* autoplay blocked */});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="glass-panel group cursor-pointer overflow-hidden flex flex-col h-full hover:border-primary/30 transition-colors"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black/60 border-b border-border/40">
        {demo.video ? (
          <>
            <video 
              ref={videoRef}
              className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-70'}`}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setLoaded(true)}
            >
              <source src={demo.video.replace('.mp4', '.webm')} type="video/webm" />
              <source src={demo.video} type="video/mp4" />
            </video>
            {/* Play overlay — hide on hover once loaded */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered && loaded ? 'opacity-0' : 'opacity-100'}`}>
              <div className="h-14 w-14 rounded-full bg-background/80 backdrop-blur border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Play className="h-6 w-6 ml-1" />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-[url('/pattern.svg')] bg-center">
            <Play className="h-6 w-6 mr-2" /> No video available
          </div>
        )}
        {demo.duration && (
          <div className="absolute bottom-2 right-2 px-2 py-1 text-[10px] font-mono bg-black/80 text-white rounded">
            {demo.duration}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs uppercase tracking-widest text-primary mb-2">{demo.category}</div>
        <h3 className="text-lg font-semibold group-hover:text-primary-glow transition-colors">{demo.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-grow">{demo.description}</p>
        <div className="mt-4 flex items-center gap-1 text-xs text-primary font-medium">
          Watch Demo
        </div>
      </div>
    </div>
  );
}
