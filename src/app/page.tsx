import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  CreditCard,
  Landmark,
  ShieldCheck,
  Smartphone,
  Hospital,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import CardImageHeader from "@/components/CardImageHeader";

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  Transferencia: Landmark,
  "Tarjeta de débito": CreditCard,
  "Tarjeta de crédito (Visa, MasterCard, American Express)": CreditCard,
  "Pagos móviles NFC (Apple Pay / Google Pay)": Smartphone,
  Cheques: Landmark,
  "Seguros médicos": ShieldCheck,
};

export default function Home() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero asimétrico — retrato a la derecha con anillo decorativo cálido
          en movimiento continuo y sutil, franja de 3 sedes + CTAs duales a
          la izquierda. Composición propia de este sitio (AGENTS.md §1): sin
          gradiente centrado genérico. */}
      <section className="relative min-h-screen overflow-hidden bg-secondary text-secondary-foreground">
        <div
          aria-hidden="true"
          className="motion-safe:animate-[spin_60s_linear_infinite] absolute -right-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full border-[48px] border-warm/15 md:h-[620px] md:w-[620px]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-28 md:grid-cols-[1.1fr_0.9fr] md:py-32">
          <div>
            <p className="text-sm font-medium tracking-wide text-warm uppercase">
              {doctor.specialistTitle} · {doctor.subspecialty}
            </p>
            <h1 className="font-heading mt-4 text-4xl font-bold md:text-5xl">
              {doctor.title} {doctor.name}
            </h1>
            <p className="mt-5 max-w-lg text-secondary-foreground/85">{doctor.philosophy}</p>
            <p className="mt-6 text-xs text-secondary-foreground/70">{formatCredentials(doctor)}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-warm px-6 py-3.5 text-sm font-semibold text-warm-foreground shadow-lg transition-transform hover:scale-105"
              >
                Agendar Cita por WhatsApp
              </a>
              <a
                href={`tel:${doctor.emergencyPhone}`}
                className="rounded-2xl border border-secondary-foreground/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary-foreground/10"
              >
                Línea de Urgencias
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary-foreground/75">
              {doctor.locations?.map((loc) => (
                <li key={loc.name} className="flex items-center gap-1.5">
                  <Hospital className="h-4 w-4 text-warm" aria-hidden="true" />
                  {loc.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] bg-secondary-foreground/10">
            <Image
              src={doctor.photo}
              alt={`${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`}
              fill
              preload
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
        </div>
      </section>

      {/* Barra de confianza — sin cifras inventadas: cuando falta un dato
          (pacientes atendidos), se reconstruye con hechos reales y
          verificables en vez de omitirse (AGENTS.md §1). */}
      <section aria-label="Datos de confianza" className="border-b border-border bg-muted/50 px-4 py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          <div>
            <p className="font-heading text-2xl font-bold text-primary">+11</p>
            <p className="mt-1 text-xs text-muted-foreground">Años de Experiencia</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-primary">+10,000</p>
            <p className="mt-1 text-xs text-muted-foreground">Procedimientos Realizados</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-primary">{doctor.locations?.length ?? 1}</p>
            <p className="mt-1 text-xs text-muted-foreground">Sedes Hospitalarias</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-primary">3</p>
            <p className="mt-1 text-xs text-muted-foreground">Cédulas Profesionales Verificadas</p>
          </div>
        </div>
      </section>

      {/* Sobre el doctor */}
      <section aria-labelledby="about-heading" className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-muted md:mx-0">
            <Image
              src="/images/aboutme.jpeg"
              alt={`${doctor.title} ${doctor.name} en consulta`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div>
            <h2 id="about-heading" className="font-heading text-2xl font-bold">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-4 text-muted-foreground">{doctor.bio}</p>
            <p className="mt-4 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
          </div>
        </div>
      </section>

      {/* Certificaciones y formación — insignia circular con iniciales como
          respaldo (sin logo institucional oficial confirmado por fuente). */}
      <section aria-labelledby="certifications-heading" className="bg-muted/40 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 id="certifications-heading" className="font-heading text-2xl font-bold">
            Certificaciones y Formación
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...doctor.certifications, ...doctor.education.map((e) => ({ name: e.degree, institution: e.institution }))].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.institution
                      .replace(/[().]/g, "")
                      .split(" ")
                      .filter((w) => w === w.toUpperCase() && w.length <= 5)
                      .join("")
                      .slice(0, 4) || item.institution.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Servicios — carrusel horizontal (solo permitido como preview de Home, AGENTS.md §2). */}
      <section aria-labelledby="services-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 id="services-heading" className="font-heading text-2xl font-bold">
              Servicios Quirúrgicos
            </h2>
            <Link href="/servicios" className="flex items-center gap-1 text-sm font-medium text-primary">
              Ver todos <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 -mx-4 flex gap-5 overflow-x-auto px-4 pb-2">
            {services.slice(0, 5).map((service) => (
              <article key={service.id} className="w-72 shrink-0 overflow-hidden rounded-2xl border border-border bg-background">
                <CardImageHeader src={service.image} alt={service.name} aspect="4/3" />
                <div className="p-5">
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <Link href={`/servicios/${service.slug}`} className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Ver Ficha <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enfermedades — filas con miniatura de imagen, tratamiento distinto al
          carrusel de servicios y al grid de síntomas. */}
      <section aria-labelledby="diseases-heading" className="bg-muted/40 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 id="diseases-heading" className="font-heading text-2xl font-bold">
            Enfermedades Oncológicas que Atendemos
          </h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background">
            {diseases.slice(0, 5).map((disease) => (
              <Link
                key={disease.id}
                href={`/enfermedades/${disease.slug}`}
                className="flex items-center gap-4 p-5 transition-colors hover:bg-muted/50"
              >
                <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-xl bg-muted sm:w-36">
                  <Image
                    src={disease.image}
                    alt={disease.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, 144px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{disease.name}</p>
                  <p className="mt-1 truncate text-sm text-muted-foreground">{disease.description.slice(0, 110)}...</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/enfermedades" className="text-sm font-medium text-primary">
              Ver las {diseases.length} enfermedades →
            </Link>
          </div>
        </div>
      </section>

      {/* Síntomas — grid compacto de chips de alarma. */}
      <section aria-labelledby="symptoms-heading" className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 id="symptoms-heading" className="font-heading text-2xl font-bold">
                Señales de Alarma a Vigilar
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Si presentas alguno de estos síntomas de forma persistente, conviene una valoración oportuna.
              </p>
            </div>
            <Link href="/sintomas" className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary">
              Ver todos <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.slice(0, 5).map((symptom) => (
              <Link
                key={symptom.id}
                href={`/sintomas/${symptom.slug}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <div className="relative aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={symptom.image}
                    alt={symptom.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <span className="min-w-0 flex-1 leading-snug">{symptom.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestras sedes — las 3 reales, nunca aproximadas a una sola. */}
      <section aria-labelledby="locations-heading" className="bg-muted/40 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 id="locations-heading" className="font-heading text-2xl font-bold">
            Nuestras Sedes
          </h2>
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
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {loc.phone}
                  </p>
                )}
                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  Ver en Google Maps <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precio y forma de pago — misma jerarquía visual que el precio, con íconos. */}
      <section aria-labelledby="price-heading" className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="price-heading" className="font-heading text-2xl font-bold">
            Precio de Consulta
          </h2>
          <p className="font-heading mt-4 text-4xl font-bold text-primary">${doctor.consultationPrice} MXN</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {doctor.paymentMethods.map((method) => {
              const Icon = paymentIcons[method] ?? Banknote;
              return (
                <span
                  key={method}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {method}
                </span>
              );
            })}
          </div>
          {doctor.insurances && doctor.insurances.length > 0 && (
            <p className="mt-6 text-sm text-muted-foreground">{doctor.insurances.join(", ")}</p>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-secondary px-4 py-20 text-center text-secondary-foreground">
        {/* Mismo anillo lento del Hero (motion-safe:animate-[spin_60s...]),
            reaparece aquí más pequeño — continuidad de marca propia del
            sitio, no el mismo adorno de ningún sitio hermano (AGENTS.md §1,
            feedback 2026-10-30: verificar siempre contra sitios construidos
            el mismo día antes de dar un adorno por bueno). */}
        <div
          aria-hidden="true"
          className="motion-safe:animate-[spin_60s_linear_infinite] pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border-[32px] border-warm/10"
        />
        <div className="relative">
          <h2 id="cta-heading" className="font-heading text-2xl font-bold">
            No dejes pasar tu salud
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-secondary-foreground/85">
            Agenda tu valoración con {doctor.title} {doctor.name} y recibe un diagnóstico claro desde la primera consulta.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-2xl bg-warm px-8 py-4 font-semibold text-warm-foreground shadow-lg transition-transform hover:scale-105"
          >
            Agendar Cita Ahora
          </a>
        </div>
      </section>
    </>
  );
}
