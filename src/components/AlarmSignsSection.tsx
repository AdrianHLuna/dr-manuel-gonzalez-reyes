import { AlertTriangle, Phone } from "lucide-react";

interface AlarmSignsSectionProps {
  signs: string[];
  emergencyPhone?: string;
}

/** AISO v3.1 §3.8 — obligatoria en toda página de síntoma. Dirige a urgencias, nunca a WhatsApp. */
export default function AlarmSignsSection({ signs, emergencyPhone }: AlarmSignsSectionProps) {
  return (
    <section className="my-8 rounded-2xl border-2 border-red-500/60 bg-red-50 p-6 dark:bg-red-950/30">
      <h2 className="flex items-center gap-2 text-lg font-bold text-red-700 dark:text-red-400">
        <AlertTriangle className="shrink-0" aria-hidden="true" />
        Señales de alarma: acude a urgencias
      </h2>
      <p className="mt-2 text-sm text-red-700/90 dark:text-red-300/90">
        Si presentas cualquiera de lo siguiente, acude de inmediato a un servicio de urgencias o llama a
        emergencias. No esperes a agendar una consulta ni escribas por WhatsApp.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-red-800 dark:text-red-200">
        {signs.map((sign, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{sign}</span>
          </li>
        ))}
      </ul>
      {emergencyPhone && (
        <a
          href={`tel:${emergencyPhone}`}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Línea de Urgencias: {emergencyPhone}
        </a>
      )}
    </section>
  );
}
