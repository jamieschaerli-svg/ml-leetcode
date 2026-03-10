import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodePro — Learn Python for Data Science",
  description:
    "An adaptive learning platform to master Python and machine learning concepts through hands-on coding challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} min-h-screen antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
