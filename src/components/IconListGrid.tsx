import type { LucideIcon } from "lucide-react";

interface IconListGridProps {
  items: string[];
  icon: LucideIcon;
}

/** Grid de tarjetas con ícono contextual — reemplaza las listas <ul><li> planas (AGENTS.md §1). */
export default function IconListGrid({ items, icon: Icon }: IconListGridProps) {
  return (
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">{item}</p>
        </div>
      ))}
    </div>
  );
}
