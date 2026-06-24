import { NextRequest, NextResponse } from "next/server";

// Next.js 16 : utiliser proxy.ts. Ce fichier est un passthrough.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}
