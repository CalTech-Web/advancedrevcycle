import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Advanced RevCycle | Post-Acute Revenue Cycle Management",
    template: "%s | Advanced RevCycle",
  },
  description:
    "Tech-Enabled. Human-Driven. Revenue Optimized. Advanced RevCycle exclusively serves hospice, home health, and palliative care agencies with a 99%+ collection rate and $5B+ collected.",
  openGraph: {
    siteName: "Advanced RevCycle",
    url: "https://advancedrevcycle.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
