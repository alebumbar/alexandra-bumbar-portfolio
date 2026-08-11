import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Alexandra Bumbar — Frontend & Full-stack Engineer",
    description:
      "London-based frontend and full-stack engineer building thoughtful digital products with React, Vue, TypeScript and Node.js.",
    openGraph: {
      title: "Alexandra Bumbar — Frontend & Full-stack Engineer",
      description: "Thoughtful digital products, engineered with an eye for detail.",
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Alexandra Bumbar, Frontend and Full-stack Engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Alexandra Bumbar — Frontend & Full-stack Engineer",
      description: "Thoughtful digital products, engineered with an eye for detail.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
