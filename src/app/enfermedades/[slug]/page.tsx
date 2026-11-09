import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Activity, Microscope, AlertCircle, HeartPulse, Stethoscope, ArrowRight } from "lucide-react";
import { diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import DetailSidebar from "@/components/DetailSidebar";
import IconListGrid from "@/components/IconListGrid";
import FaqAccordion from "@/components/FaqAccordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Enfermedades", href: "/enfermedades" },
          { label: disease.name },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <header className="mb-6">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <CardImageHeader src={disease.image} alt={disease.name} aspect="16/10" />
              </div>
              <h1 className="font-heading text-3xl font-bold">{disease.name}</h1>
              {disease.colloquialNames && disease.colloquialNames.length > 0 && (
                <p className="mt-1 text-sm text-muted-foreground">
                  También conocida como: {disease.colloquialNames.join(", ")}
                </p>
              )}
              <div className="mt-3">
                <MedicalReviewByline lastReviewed={disease.lastReviewed} />
              </div>
            </header>

            <section>
              <h2 className="font-heading text-xl font-semibold">¿Qué es {disease.name.toLowerCase()}?</h2>
              <p className="mt-2 text-muted-foreground">{disease.description}</p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Síntomas</h2>
              <IconListGrid items={disease.symptoms} icon={Activity} />
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Causas</h2>
              <IconListGrid items={disease.causes} icon={Microscope} />
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Factores de Riesgo</h2>
              <IconListGrid items={disease.riskFactors} icon={AlertCircle} />
            </section>

            {disease.mexicoStats && (
              <section className="mt-8 rounded-2xl bg-muted/40 p-5">
                <h2 className="font-heading text-xl font-semibold">Estadísticas en México</h2>
                <p className="mt-2 text-muted-foreground">{disease.mexicoStats}</p>
              </section>
            )}

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Complicaciones</h2>
              <IconListGrid items={disease.complications} icon={HeartPulse} />
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Tratamientos</h2>
              <IconListGrid items={disease.treatments} icon={Stethoscope} />
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Preguntas Frecuentes</h2>
              <div className="mt-4">
                <FaqAccordion faqs={disease.faqs} />
              </div>
            </section>

            {(relatedServices.length > 0 || relatedSymptoms.length > 0) && (
              <section className="mt-8">
                <h2 className="font-heading text-xl font-semibold">Relacionados</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.id}
                      href={`/servicios/${s.slug}`}
                      className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                    >
                      {s.name} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                  {relatedSymptoms.map((s) => (
                    <Link
                      key={s.id}
                      href={`/sintomas/${s.slug}`}
                      className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                    >
                      {s.name} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {disease.sources && disease.sources.length > 0 && (
              <section className="mt-8 text-sm text-muted-foreground">
                <h2 className="font-semibold text-foreground">Fuentes</h2>
                <ul className="mt-1 list-inside list-disc">
                  {disease.sources.map((src, i) => (
                    <li key={i}>{src}</li>
                  ))}
                </ul>
              </section>
            )}
          </article>

          <DetailSidebar ctaSubject={disease.name.toLowerCase()} />
        </div>
      </div>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
