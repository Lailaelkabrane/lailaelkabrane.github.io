import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Laila El Kabrane | Data Analytics and AI Portfolio",
  description: "Interactive dashboard portfolio for data analyst roles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
