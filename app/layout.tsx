import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "VanzzDigital | High-End Web & AR/VR Specialist",
  description: "Enterprise Web & VR Portfolio showcasing high-performance digital products like Government CMS and Industrial VR Simulations.",
  keywords: ["Web Developer Indonesia", "VR Developer", "AR Simulation", "Next.js Specialist", "Tuban"],
  openGraph: {
    title: "VanzzDigital | High-End Web & AR/VR Specialist",
    description: "Enterprise Web & VR Portfolio",
    url: "https://yourdomain.com",
    siteName: "VanzzDigital",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}