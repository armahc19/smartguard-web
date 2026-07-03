export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="SmartGuard — AI CCTV Monitoring"
      className={className}
      width={220}
      height={68}
    />
  );
}
