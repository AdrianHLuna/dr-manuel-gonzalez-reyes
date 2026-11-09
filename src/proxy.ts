import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mientras el dominio final no esté asignado, el sitio vive en un subdominio
// *.vercel.app que Google puede rastrear e indexar sin que nada lo impida
// (AGENTS.md §4, hallazgo real en aldo-antonio-morales-vleeschower). Se basa
// en el host real de la petición, no en una variable de entorno, para que
// deje de aplicar automáticamente en cuanto Vercel sirva el dominio final.
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  if (request.nextUrl.hostname.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}
