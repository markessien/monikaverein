const Anchor = ({ href, content = [], anchorText }: { href?: string; content?: string[]; anchorText?: number }) => {
  if (anchorText === undefined) anchorText = content.length - 1;

  return (
    <span className="">
      {content.map((text, idx) => {
        if (idx !== anchorText) return <span key={idx}> {text} </span>;

        return (
          <a href={href} target="_blank" className="text-error underline underline-offset-2" key={idx}>
            {text}
          </a>
        );
      })}
    </span>
  );
};

export default Anchor;
