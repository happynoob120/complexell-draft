function ContextInput({ context, setContext }) {
  return (
    <textarea
      value={context}
      onChange={(e) => setContext(e.target.value)}
      rows={2}
      placeholder="Write a short description that encourages people to read your article..."
      className="
        mt-10
        w-full

        resize-none
        overflow-hidden

        bg-transparent
        outline-none
        border-none

        text-lg
        md:text-xl

        leading-9

        text-[#9EA59A]
        placeholder:text-[#5A6156]
      "
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
    />
  );
}

export default ContextInput;
