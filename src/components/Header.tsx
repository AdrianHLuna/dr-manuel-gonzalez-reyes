import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * StickyHeader — AISO v3.1 §3.1. La barra de COFEPRIS/cédulas solo se ve en
 * escritorio e iPad; el menú nunca rompe en 2 renglones (AGENTS.md §6).
 * Formato de credenciales (aprendido de las páginas ya en producción, no del
 * manual): "Céd Prof: NNNNNNNN (SIGLAS)" por cada cédula, "cofepris:NNNN" sin
 * espacio. La cédula de subespecialidad solo se muestra si existe.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur relative">
      <div className="hidden md:block bg-primary/5 px-4 py-1 text-center text-xs text-muted-foreground">
        {formatCredentials(doctor)}
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label={`${doctor.title} ${doctor.name}`}>
          {/* Isotipo real recortado del sello circular (icon-mark-color.png) —
              el nombre va como texto HTML real, nunca incrustado en la imagen,
              para que siempre sea legible sin importar el tamaño de render
              (AGENTS.md §6, patrón "logotipo vertical apilado"). */}
          <Image
            src="/icon-mark-color.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 md:h-11 md:w-11"
            priority
          />
          <span className="font-heading whitespace-nowrap text-base leading-tight font-bold text-primary md:text-lg">
            {doctor.title} {doctor.name}
          </span>
        </Link>
        <nav aria-label="Principal" className="hidden md:flex items-center gap-6">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap shrink-0 rounded-full bg-[#25D366] px-4 py-2 text-xs font-medium text-white"
        >
          WhatsApp
        </a>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
