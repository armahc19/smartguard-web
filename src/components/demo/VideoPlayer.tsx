import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Demo } from '@/lib/demo-data';

interface VideoPlayerProps {
  demo: Demo | null;
  onClose: () => void;
}

export function VideoPlayer({ demo, onClose }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!demo) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-black border border-border/60 rounded-xl overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
          aria-label="Close video"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="aspect-video w-full bg-black border-b border-border/40 flex items-center justify-center">
          <video 
            ref={videoRef}
            className="w-full h-full max-h-[70vh] object-contain"
            controls
            autoPlay
            playsInline
          >
            <source src={demo.video.replace('.mp4', '.webm')} type="video/webm" />
            <source src={demo.video} type="video/mp4" />
          </video>
        </div>
        
        <div className="p-6 bg-card">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-1">{demo.category}</div>
              <h2 className="text-2xl font-bold">{demo.title}</h2>
              <p className="mt-2 text-muted-foreground">{demo.description}</p>
            </div>
            
            {demo.features && demo.features.length > 0 && (
              <div className="md:w-1/3 shrink-0 bg-background/50 p-4 rounded-lg border border-border/40">
                <h3 className="text-sm font-semibold mb-2">Key Features:</h3>
                <ul className="space-y-1.5">
                  {demo.features.map((f, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
