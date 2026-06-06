import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lumentech.africa"),
  title: {
    default: "Lumen Technologies | Business Automation, AI & Microsoft 365 Consulting",
    template: "%s | Lumen Technologies"
  },
  description:
    "Lumen Technologies helps organizations automate business processes, implement AI solutions, modernize operations, and maximize Microsoft 365 investments.",
  keywords: [
    "business process automation",
    "AI consulting",
    "Microsoft 365 consulting",
    "Power Automate",
    "SharePoint",
    "enterprise portals"
  ],
  openGraph: {
    title: "Lumen Technologies",
    description: "Automating Business. Amplifying Intelligence.",
    images: ["/images/logo.png", "/images/lumen-automation-dashboard.png"],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
