import {
  TbArrowBackUp,
  TbArrowForwardUp,
  TbBold,
  TbItalic,
  TbH1,
  TbH2,
  TbH3,
  TbList,
  TbListNumbers,
  TbQuote,
  TbCode,
  TbMinus,
} from "react-icons/tb";

function EditorToolbar({ editor }) {
  if (!editor) return null;

  const execute = (callback) => (e) => {
    e.preventDefault();
    callback();
  };

  const base =
    "w-11 h-11 rounded-xl border transition-all duration-200 flex items-center justify-center";

  const normal =
    "bg-[#171B12] border-[#2A3025] text-[#DDE2D7] hover:border-[#6F8D54] hover:bg-[#1B2016]";

  const active = "bg-[#DCE6CF] border-[#DCE6CF] text-[#11140D]";

  return (
    <div
      className="
      sticky
      top-5
      z-50

      mb-10

      flex
      flex-wrap
      gap-2

      rounded-2xl

      border
      border-[#262C21]

      bg-[#15180F]/90

      backdrop-blur-xl

      p-3
    "
    >
      {/* Undo */}

      <button
        type="button"
        onMouseDown={execute(() => editor.chain().focus().undo().run())}
        className={`${base} ${normal}`}
      >
        <TbArrowBackUp size={20} />
      </button>

      {/* Redo */}

      <button
        type="button"
        onMouseDown={execute(() => editor.chain().focus().redo().run())}
        className={`${base} ${normal}`}
      >
        <TbArrowForwardUp size={20} />
      </button>

      <div className="w-px h-10 bg-[#2A3025] mx-2" />

      {/* Bold */}

      <button
        type="button"
        onMouseDown={execute(() => editor.chain().focus().toggleBold().run())}
        className={`${base} ${editor.isActive("bold") ? active : normal}`}
      >
        <TbBold size={20} />
      </button>

      {/* Italic */}

      <button
        type="button"
        onMouseDown={execute(() => editor.chain().focus().toggleItalic().run())}
        className={`${base} ${editor.isActive("italic") ? active : normal}`}
      >
        <TbItalic size={20} />
      </button>

      <div className="w-px h-10 bg-[#2A3025] mx-2" />

      {/* H1 */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run(),
        )}
        className={`${base} ${
          editor.isActive("heading", { level: 1 }) ? active : normal
        }`}
      >
        <TbH1 size={20} />
      </button>

      {/* H2 */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run(),
        )}
        className={`${base} ${
          editor.isActive("heading", { level: 2 }) ? active : normal
        }`}
      >
        <TbH2 size={20} />
      </button>

      {/* H3 */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run(),
        )}
        className={`${base} ${
          editor.isActive("heading", { level: 3 }) ? active : normal
        }`}
      >
        <TbH3 size={20} />
      </button>

      <div className="w-px h-10 bg-[#2A3025] mx-2" />

      {/* Bullet List */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().toggleBulletList().run(),
        )}
        className={`${base} ${editor.isActive("bulletList") ? active : normal}`}
      >
        <TbList size={20} />
      </button>

      {/* Ordered List */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().toggleOrderedList().run(),
        )}
        className={`${base} ${
          editor.isActive("orderedList") ? active : normal
        }`}
      >
        <TbListNumbers size={20} />
      </button>

      <div className="w-px h-10 bg-[#2A3025] mx-2" />

      {/* Quote */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().toggleBlockquote().run(),
        )}
        className={`${base} ${editor.isActive("blockquote") ? active : normal}`}
      >
        <TbQuote size={20} />
      </button>

      {/* Code Block */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().toggleCodeBlock().run(),
        )}
        className={`${base} ${editor.isActive("codeBlock") ? active : normal}`}
      >
        <TbCode size={20} />
      </button>

      {/* Horizontal Rule */}

      <button
        type="button"
        onMouseDown={execute(() =>
          editor.chain().focus().setHorizontalRule().run(),
        )}
        className={`${base} ${normal}`}
      >
        <TbMinus size={20} />
      </button>
    </div>
  );
}

export default EditorToolbar;
