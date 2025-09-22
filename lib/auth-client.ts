import { createAuthClient } from "better-auth/react";
const runtimeBaseUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : (process.env.NEXT_PUBLIC_BASE_URL as string | undefined);

export const authClient = createAuthClient({
  baseURL: runtimeBaseUrl,
});
