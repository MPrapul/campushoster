import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campushoster - The Smart School ERP",
  description: "The all-in-one smart campus platform for modern educational institutions. Streamline administration, enhance teaching, and improve student outcomes.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 