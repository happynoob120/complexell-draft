function ArticleCardSkeleton() {
  return (
    <div className="rounded-2xl px-6 py-7 animate-pulse">
      <div className="h-3 w-16 rounded bg-[#232820]" />

      <div className="mt-5 h-8 w-3/4 rounded bg-[#232820]" />

      <div className="mt-5 space-y-3">
        <div className="h-4 rounded bg-[#232820]" />
        <div className="h-4 rounded bg-[#232820]" />
        <div className="h-4 w-5/6 rounded bg-[#232820]" />
      </div>

      <div className="mt-7 h-px bg-[#232820]" />

      <div className="mt-5 flex justify-between">
        <div className="space-y-2">
          <div className="h-4 w-24 rounded bg-[#232820]" />
          <div className="h-4 w-32 rounded bg-[#232820]" />
        </div>

        <div className="h-6 w-6 rounded-full bg-[#232820]" />
      </div>
    </div>
  );
}

export default ArticleCardSkeleton;