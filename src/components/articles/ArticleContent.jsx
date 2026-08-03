import { useEditor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";

import StarterKit from "@tiptap/starter-kit";

import "../editor/editor.css";

function ArticleContent({ content }) {
  const editor = useEditor({
    editable: false,

    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],

    content,

    editorProps: {
      attributes: {
        class: "editor-content",
      },
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) return null;

  return (
    <div className="editor-wrapper">
      <EditorContent editor={editor} />
    </div>
  );
}

export default ArticleContent;