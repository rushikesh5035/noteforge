import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Force Node.js runtime and disable static optimization for this auth route
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const { POST, GET } = toNextJsHandler(auth);
