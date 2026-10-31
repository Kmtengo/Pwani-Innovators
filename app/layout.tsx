import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/dm-serif-display/400-italic.css";
import "./globals.css";
import "./refinements.css";
import "./motion.css";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://pwani-innovators.mosesmtengo230495.chatgpt.site",
  ),
  title: "Pwani Innovators — Big ideas. Coastal roots.",
  description:
    "Build something you’re proud of. Holiday technology programmes for ages 8+ at Smartbrains Academy, Mombasa. Starts 9 November 2026. From KSh 1,000 per week.",
  openGraph: {
    title: "Pwani Innovators — Big ideas. Coastal roots.",
    description:
      "Holiday tech programmes at Smartbrains Academy, Mombasa. Learn. Build. Share. Keep growing.",
    images: [{ url: "/images/maker-scene.webp", width: 1400, height: 933 }],
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
