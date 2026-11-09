import type { Metadata } from "next";
import { Hospital, MapPin, Phone, Mail, Clock } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name} en sus 3 sedes de la Ciudad de México y Estado de México. Dirección, horario y mapa.`,
  alternates: { canonical: "/contacto" },
};

// Mapa real e interactivo desde la primera carga (AGENTS.md §7) de la sede
// principal, seguido de las 3 tarjetas reales — nunca superpuestas al mapa,
// nunca un formulario.
export default function ContactoPage() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} isDark={false} />

      <MapFacade address={doctor.address} whatsapp={doctor.whatsapp} />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-heading text-2xl font-bold">Nuestras 3 Sedes</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {doctor.title} {doctor.name} atiende en tres hospitales distintos en la Ciudad de México y el Estado de
          México. El mapa de arriba muestra la sede principal; cada tarjeta enlaza a su ubicación exacta en Google
          Maps.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {doctor.locations?.map((loc) => (
            <div key={loc.name} className="rounded-2xl border border-border bg-background p-6">
              <Hospital className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-3 font-semibold">{loc.name}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {loc.address}
              </p>
              {loc.phone && (
                <a
                  href={`tel:${loc.phone}`}
                  className="mt-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {loc.phone}
                </a>
              )}
              <a
                href={loc.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-medium text-primary underline"
              >
                Ver en Google Maps
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <h2 className="flex items-center gap-2 font-semibold">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              Horario
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{doctor.schedule}</p>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-semibold">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              Citas y Urgencias
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Citas: {doctor.phone}
              <br />
              Urgencias: {doctor.emergencyPhone}
            </p>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-semibold">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              Correo
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{doctor.email}</p>
          </div>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block rounded-2xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          Agendar Cita por WhatsApp
        </a>
      </div>
    </main>
  );
}
