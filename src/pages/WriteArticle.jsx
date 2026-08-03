import { useState, useEffect } from "react";
import {
  createArticle,
  updateArticle,
  getArticleForEdit,
} from "../api/article.api";
import toast from "react-hot-toast";
import { useEditor } from "@tiptap/react";
import { useNavigate, useParams, Link } from "react-router-dom";

import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import { TbArrowLeft, TbSend } from "react-icons/tb";

import TitleInput from "../components/editor/TitleInput";
import ContextInput from "../components/editor/ContextInput";
import Editor from "../components/editor/Editor";

function WriteArticle() {
  const navigate = useNavigate();

  const { id } = useParams();
  const isEditing = !!id;

  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [content, setContent] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),

      Placeholder.configure({
        placeholder: "Start writing your article...",
      }),
    ],

    autofocus: "end",

    content: "",

    editorProps: {
      attributes: {
        class: "editor-content",
      },
    },

    onUpdate({ editor }) {
      setContent(editor.getJSON());
    },
  });

  useEffect(() => {
    if (!isEditing || !editor) return;

    const fetchArticle = async () => {
      try {
        const response = await getArticleForEdit(id);

        const article = response.article;

        setTitle(article.article_title);
        setContext(article.article_context);

        editor.commands.setContent(article.article_content);

        setContent(article.article_content);
      } catch (error) {
        console.error(error);
        toast.error("failed to load Article")
      }
    };

    fetchArticle();
  }, [editor, id, isEditing]);

  const handlePublish = async () => {
    try {
      if (!title.trim()) {
        toast.error("Please enter a title.")
        return;
      }

      if (!context.trim()) {
        toast.error("Please enter a context.");
        return;
      }

      if (!content || !content.content || content.content.length === 0) {
        toast.error("Please write something.");
        return;
      }

      const payload = {
        article_title: title,
        article_context: context,
        article_content: content,
      };

      let response;

      if (isEditing) {
        response = await updateArticle(id, payload);
      } else {
        response = await createArticle(payload);
      }

      toast.success(response.message);

      navigate("/articles/mine");
    } catch (error) {
      console.error(error);

      toast.promise(
        error.response?.data?.message ||
          `Failed to ${isEditing ? "update" : "publish"} article.`,
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#11140D] text-[#E4E6DE]">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#6D8B4E]/10 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <header className="flex items-center justify-between py-8">
          <Link
            to="/articles/mine"
            className="flex items-center gap-2 text-[#8A9180] hover:text-white transition font-mono"
          >
            <TbArrowLeft size={20} />
            Exit Editor
          </Link>

          <button
            onClick={handlePublish}
            className="
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-lg
              bg-[#D8E2CB]
              text-[#11140D]
              hover:bg-white
              transition
              font-semibold
            "
          >
            {isEditing ? "Update Article" : "Publish"}

            <TbSend size={18} />
          </button>
        </header>

        {/* Hero */}
        <section className="pt-14 pb-8">
          <TitleInput title={title} setTitle={setTitle} />

          <ContextInput context={context} setContext={setContext} />
        </section>

        {/* Editor */}
        <section className="pb-20">
          <Editor editor={editor} />
        </section>
      </div>
    </main>
  );
}

export default WriteArticle;
