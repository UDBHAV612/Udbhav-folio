import type { Metadata } from "next";
import { Navigation } from "@/components/interactions";
import { portfolio } from "@/lib/portfolio";
import "./globals.css";
const title = "Udbhav Chabbra | AI & Full-Stack Engineering";
const description =
  "Computer Science and Data Science student building practical full-stack and AI-powered software. Explore projects, HCLTech internship experience, and technical skills.";
export const metadata: Metadata = {
  title: { default: title, template: "%s | Udbhav Chabbra" },
  description,
  ...(portfolio.siteUrl ? { metadataBase: new URL(portfolio.siteUrl) } : {}),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    ...(portfolio.siteUrl ? { url: portfolio.siteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
