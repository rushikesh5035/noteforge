import { createAuthClient } from "better-auth/react";
// Resolve base URL at runtime on the client. Fallback to env during SSR/build.
const runtimeBaseUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : (process.env.NEXT_PUBLIC_BASE_URL as string | undefined);

export const authClient = createAuthClient({
  baseURL: runtimeBaseUrl,
});
