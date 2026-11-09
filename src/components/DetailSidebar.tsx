import { Phone, Clock, Hospital, AlertTriangle } from "lucide-react";
import { doctor } from "@/data";

interface DetailSidebarProps {
  /** Frase corta: "X" en "El Dr. atiende X" (ej. "cáncer de colon"). */
  ctaSubject: string;
}

/**
 * Sidebar sticky de las vistas de detalle — perfil+CTA, sede/horario,
 * urgencias (AGENTS.md §1, patrón validado post-2026-10-29). Nunca un único
 * CTA plano al fondo.
 */
export default function DetailSidebar({ ctaSubject }: DetailSidebarProps) {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quisiera agendar una valoración sobre ${ctaSubject}.`
  )}`;
  const primaryLocation = doctor.locations?.[0];

  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <div className="rounded-2xl border border-border bg-primary/5 p-5">
        <p className="font-semibold">
          {doctor.title} {doctor.name}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{doctor.specialistTitle}</p>
        <p className="mt-3 text-sm">
          Atiende {ctaSubject} en consulta y, cuando se requiere, con resolución quirúrgica.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
        >
          Agendar Valoración
        </a>
      </div>

      {primaryLocation && (
        <div className="rounded-2xl border border-border bg-background p-5">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Hospital className="h-4 w-4 text-primary" aria-hidden="true" />
            Sede principal
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{primaryLocation.address}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
            {doctor.schedule}
          </p>
        </div>
      )}

      <div className="rounded-2xl border border-red-500/40 bg-red-50 p-5 dark:bg-red-950/30">
        <p className="flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-400">
          <AlertTriangle className="h-4 w-4" aria-hidden="true" />
          ¿Es una urgencia?
        </p>
        <a
          href={`tel:${doctor.emergencyPhone}`}
          className="mt-3 flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-300"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {doctor.emergencyPhone}
        </a>
      </div>
    </aside>
  );
}
