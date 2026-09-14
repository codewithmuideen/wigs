import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/providers/AppProvider";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.feyishopeluxe.com"),
  title: {
    default: "Fèyíshọpé Luxe | Premium Human Hair Wigs & Extensions, UK",
    template: "%s | Fèyíshọpé Luxe",
  },
  description:
    "Premium human hair wigs, HD lace fronts, bundles and extensions, crafted for confidence and delivered across the UK. Beauty in gratitude.",
  keywords: ["human hair wigs UK", "HD lace wigs", "hair extensions", "lace front wigs", "bundles"],
  openGraph: {
    title: "Fèyíshọpé Luxe | Premium Human Hair Wigs & Extensions",
    description: "Premium human hair wigs and extensions, crafted for confidence. UK delivery.",
    siteName: "Fèyíshọpé Luxe",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fèyíshọpé Luxe | Premium Human Hair Wigs & Extensions",
    description: "Premium human hair wigs and extensions, crafted for confidence. UK delivery.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <AppProvider>
          {children}
          <ComingSoonModal />
        </AppProvider>
      </body>
    </html>
  );
}
