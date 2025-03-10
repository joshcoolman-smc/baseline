interface HomeBadgeProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function HomeBadge({ title, subtitle, className = "" }: HomeBadgeProps) {
  return (
    <div
      className={`-mt-20 bg-neutral-100 dark:bg-neutral-800 p-4 pb-5 px-8 rounded-lg shadow-lg border text-muted-foreground ${className}`}
    >
      <h1 className="text-2xl text-neutral-600 dark:text-neutral-300 font-bold">
        {title}
      </h1>

      <p className="text-xs text-neutral-950 dark:text-muted-foreground dark:font-semibold">
        {subtitle}
      </p>
    </div>
  );
}
