import toast from "./toast";

export const ShareArticle = async (article) => {
  const url = `${window.location.origin}/articles/${article._id}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: article.article_title,
        text: article.article_context,
        url,
      });

      return;
    } catch {
      return;
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    toast.success("Article link copied!");
  } catch {
    toast.error("Failed to copy link.");
  }
};
