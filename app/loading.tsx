export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center bg-background min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        </div>
        <p className="text-sm font-black italic uppercase tracking-[0.2em] text-primary animate-pulse">
          Loading Soundscape...
        </p>
      </div>
    </div>
  );
}
