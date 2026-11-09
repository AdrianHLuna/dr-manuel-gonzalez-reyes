import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Microscope, ArrowRight } from "lucide-react";
import { doctor, diseases, symptoms } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import DetailSidebar from "@/components/DetailSidebar";
import IconListGrid from "@/components/IconListGrid";
import FaqAccordion from "@/components/FaqAccordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Síntomas", href: "/sintomas" },
          { label: symptom.name },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <header className="mb-6">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <CardImageHeader src={symptom.image} alt={symptom.name} aspect="16/10" />
              </div>
              <h1 className="font-heading text-3xl font-bold">{symptom.name}</h1>
              <div className="mt-3">
                <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
              </div>
            </header>

            <section>
              <h2 className="font-heading text-xl font-semibold">¿Qué es {symptom.name.toLowerCase()}?</h2>
              <p className="mt-2 text-muted-foreground">{symptom.description}</p>
            </section>

            <AlarmSignsSection signs={symptom.alarmSigns} emergencyPhone={doctor.emergencyPhone} />

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Causas Posibles</h2>
              <IconListGrid items={symptom.causes} icon={Microscope} />
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">¿Por qué consultar?</h2>
              <p className="mt-2 text-muted-foreground">{symptom.whyConsult}</p>
            </section>

            {symptom.faqs && symptom.faqs.length > 0 && (
              <section className="mt-8">
                <h2 className="font-heading text-xl font-semibold">Preguntas Frecuentes</h2>
                <div className="mt-4">
                  <FaqAccordion faqs={symptom.faqs} />
                </div>
              </section>
            )}

            {relatedConditions.length > 0 && (
              <section className="mt-8">
                <h2 className="font-heading text-xl font-semibold">Relacionados</h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {relatedConditions.map((d) => (
                    <Link
                      key={d.id}
                      href={`/enfermedades/${d.slug}`}
                      className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                    >
                      {d.name} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          <DetailSidebar ctaSubject={symptom.name.toLowerCase()} />
        </div>
      </div>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
