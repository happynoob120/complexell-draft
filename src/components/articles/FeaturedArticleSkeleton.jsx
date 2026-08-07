function FeaturedArticleSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-[#232820] p-8">
      <div className="h-3 w-24 rounded bg-[#2A3025]" />

      <div className="mt-6 h-10 w-3/4 rounded bg-[#2A3025]" />

      <div className="mt-6 space-y-3">
        <div className="h-4 rounded bg-[#2A3025]" />
        <div className="h-4 rounded bg-[#2A3025]" />
        <div className="h-4 w-5/6 rounded bg-[#2A3025]" />
      </div>

      <div className="mt-8 flex items-center gap-6">
        <div className="h-4 w-24 rounded bg-[#2A3025]" />
        <div className="h-4 w-20 rounded bg-[#2A3025]" />
      </div>

      <div className="mt-10 h-12 w-40 rounded-xl bg-[#2A3025]" />
    </div>
  );
}

export default FeaturedArticleSkeleton;