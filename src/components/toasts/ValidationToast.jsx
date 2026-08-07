import React from "react";
import toast from "../../utils/toast";

export default function ValidationToast({ full, short }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(full);
      toast.success("Full details copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy details");
    }
  };

  const handleView = () => {
    toast.raw.custom(() => (
      <div className="max-w-lg px-4 py-3 text-sm text-[#E4E6DE]">
        <pre className="whitespace-pre-wrap">{full}</pre>
      </div>
    ), { duration: 20000 });
  };

  return (
    <div className="max-w-md px-4 py-3">
      <div className="text-sm text-[#E4E6DE]">{short}</div>
      {typeof full === "string" && full.length > 250 && (
        <div className="mt-2 flex gap-2">
          <button
            onClick={handleCopy}
            className="text-xs bg-[#11140D] border border-[#2A3025] px-3 py-1 rounded text-[#9FE6A0]"
          >
            Copy Details
          </button>

          <button
            onClick={handleView}
            className="text-xs bg-[#11140D] border border-[#2A3025] px-3 py-1 rounded text-[#9FE6A0]"
          >
            View Details
          </button>
        </div>
      )}
    </div>
  );
}
