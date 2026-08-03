import { EditorContent } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorToolbar from "./EditorToolbar";
import {
  TbBold,
  TbItalic,
  TbUnderline,
  TbLink,
  TbHighlight,
} from "react-icons/tb";
import "./editor.css";

function Editor({ onReady, onChange, editor }){
  if (!editor) return null;

  return (
    <div className="editor-wrapper">
      <BubbleMenu
        editor={editor}
        tippyOptions={{
          duration: 150,
          placement: "top",
          animation: "shift-away",
        }}
        className="
      flex
      items-center
      gap-1

      rounded-2xl

      border
      border-[#2B3226]

      bg-[#171B12]/95

      backdrop-blur-xl

      p-2

      shadow-2xl
    "
      >
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
            editor.isActive("bold")
              ? "bg-[#DCE6CF] text-[#11140D]"
              : "text-[#DDE2D7] hover:bg-[#242A20]"
          }`}
        >
          <TbBold size={18} />
        </button>

        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
            editor.isActive("italic")
              ? "bg-[#DCE6CF] text-[#11140D]"
              : "text-[#DDE2D7] hover:bg-[#242A20]"
          }`}
        >
          <TbItalic size={18} />
        </button>
      </BubbleMenu>
      <EditorToolbar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
}

export default Editor;
