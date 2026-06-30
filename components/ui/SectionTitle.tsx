interface SectionTitleProps {
  badge: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <span className="uppercase tracking-[6px] text-blue-400 text-sm">
        {badge}
      </span>

      <h2 className="mt-3 text-4xl md:text-5xl font-black">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-gray-400 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}