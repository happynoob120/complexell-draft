function ArticleCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-[#232820] p-6">
      <div className="h-3 w-20 rounded bg-[#232820]" />

      <div className="mt-5 h-8 w-4/5 rounded bg-[#232820]" />

      <div className="mt-6 space-y-3">
        <div className="h-3 rounded bg-[#232820]" />
        <div className="h-3 w-11/12 rounded bg-[#232820]" />
      </div>

      <div className="mt-8 h-px bg-[#232820]" />

      <div className="mt-5 flex justify-between">
        <div className="space-y-2">
          <div className="h-3 w-24 rounded bg-[#232820]" />
          <div className="h-3 w-40 rounded bg-[#232820]" />
        </div>

        <div className="h-6 w-6 rounded bg-[#232820]" />
      </div>
    </div>
  );
}

export default ArticleCardSkeleton;