import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshi Verma | Full Stack Developer & AIML Student",
  description: "Portfolio of Himanshi Verma, a Full Stack Developer and AIML student specializing in scalable web applications and AI-powered solutions.",
  keywords: ["Himanshi Verma", "Full Stack Developer", "AIML Student", "Portfolio", "Next.js", "React", "Node.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
