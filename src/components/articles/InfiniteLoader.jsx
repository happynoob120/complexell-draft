import { TbLoader2 } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function InfiniteLoader({
  hasMore,
  loading,
  onLoadMore,
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && hasMore && !loading) {
      onLoadMore();
    }
  }, [inView, hasMore, loading, onLoadMore]);

  if (!hasMore) return null;

  return (
    <div
      ref={ref}
      className="flex justify-center py-12"
    >
      {loading && (
        <TbLoader2
          size={28}
          className="animate-spin text-[#8BE17B]"
        />
      )}
    </div>
  );
}

export default InfiniteLoader;