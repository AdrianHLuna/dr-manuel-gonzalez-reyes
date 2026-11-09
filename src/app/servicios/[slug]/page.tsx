import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ClipboardList, ArrowRight } from "lucide-react";
import { diseases, services } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
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
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: service.name },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <header className="mb-6">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <CardImageHeader src={service.image} alt={service.name} aspect="16/10" />
              </div>
              <h1 className="font-heading text-3xl font-bold">{service.name}</h1>
              <div className="mt-3">
                <MedicalReviewByline lastReviewed={service.lastReviewed} />
              </div>
            </header>

            <section>
              <h2 className="font-heading text-xl font-semibold">¿En qué consiste {service.name.toLowerCase()}?</h2>
              <p className="mt-2 text-muted-foreground">{service.longDescription}</p>
            </section>

            {service.technicalSpecs && (
              <section className="mt-8">
                <h2 className="font-heading text-xl font-semibold">Datos Técnicos</h2>
                <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {Object.entries(service.technicalSpecs).map(([key, value]) => (
                    <div key={key} className="rounded-xl bg-muted/40 p-3">
                      <dt className="text-xs uppercase text-muted-foreground">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Beneficios</h2>
              <IconListGrid items={service.benefits} icon={CheckCircle2} />
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-xl font-semibold">Recomendaciones Postoperatorias</h2>
              <IconListGrid items={service.postOpRecommendations} icon={ClipboardList} />
            </section>

            {service.faqs && service.faqs.length > 0 && (
              <section className="mt-8">
                <h2 className="font-heading text-xl font-semibold">Preguntas Frecuentes</h2>
                <div className="mt-4">
                  <FaqAccordion faqs={service.faqs} />
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

          <DetailSidebar ctaSubject={service.name.toLowerCase()} />
        </div>
      </div>

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
