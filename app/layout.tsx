import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteForge – Your Ultimate Notes Companion",
  description:
    "Create, edit, and organize beautifully formatted notes with powerful rich text editing and secure authentication.",
  metadataBase: new URL("https://noteforge-rushikesh.vercel.app"),
  alternates: {
    canonical: "https://noteforge-rushikesh.vercel.app",
  },
  openGraph: {
    title: "NoteForge – Your Ultimate Notes Companion",
    description:
      "Create, organize, and style your notes with ease. Experience secure login, rich formatting, and a smooth user interface — all in dark or light mode.",
    url: "https://noteforge-rushikesh.vercel.app",
    siteName: "NoteForge",
    images: [
      {
        url: "/opengraph-img.png",

        alt: "NoteForge App Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
