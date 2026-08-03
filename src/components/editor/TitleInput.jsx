function TitleInput({ title, setTitle }) {
  return (
    <textarea
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      rows={1}
      placeholder="Untitled Article"
      className="
        w-full
        bg-transparent
        resize-none
        overflow-hidden
        outline-none
        border-none

        font-sans
        font-black

        text-5xl
        md:text-6xl
        lg:text-7xl

        leading-[0.95]
        tracking-[-0.05em]

        text-[#F4F6F1]
        placeholder:text-[#4B5147]
      "
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
    />
  );
}

export default TitleInput;
