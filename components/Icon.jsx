import { cn } from "@/lib/utils";

export function Icon({ name, childClassName, className, children, ...props }) {
  if (children) {
    return (
      <span
        className={cn(`inline-flex items-center font gap-1.5`, childClassName)}
      >
        <Icon name={name} className={className} {...props} />
        {children}
      </span>
    );
  }
  return (
    <svg
      {...props}
      className={cn("inline self-center w-[1em] h-[1em]", className)}
    >
      <use href={`./icons/sprite.svg#${name}`} />
    </svg>
  );
}
