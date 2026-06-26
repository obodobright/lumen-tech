import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { createPageMetadata, localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology consulting",
  ...createPageMetadata({
    title:
      "LumenTech Africa | AI, Software, Automation & Digital Transformation",
    description:
      "LumenTech Africa helps African businesses transform, automate, and scale with AI solutions, business automation, custom software, websites, Microsoft 365, and digital transformation consulting.",
    path: "/"
  })
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
