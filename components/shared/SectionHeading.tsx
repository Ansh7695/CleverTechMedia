export function SectionEyebrow({ children }: { children: string }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHeading({ title, highlight }: { title: string; highlight: string }) {
  const parts = title.split(highlight);
  return (
    <h2 className="text-4xl md:text-5xl leading-none text-white">
      {parts[0]}
      <span className="gold-text">{highlight}</span>
      {parts[1]}
    </h2>
  );
}
