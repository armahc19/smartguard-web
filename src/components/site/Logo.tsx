import logoAsset from "@/assets/smartguard-logo.png.asset.json";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="SmartGuard — AI CCTV Monitoring"
      className={className}
      width={220}
      height={64}
    />
  );
}
