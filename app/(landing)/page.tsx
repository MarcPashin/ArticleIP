// app/(landing)/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { PlatformSection } from "@/components/platform-section";
import { CompanySection } from "@/components/company-section";
import { ResourcesSection } from "@/components/resources-section";
import { StructuredData } from "@/components/structured-data";
import { AnimatedBackground } from "@/components/animated-background";

export const metadata = {
  title: "ArticleIP | AI-Powered Patent Generation Platform",
  description: "Generate professional patent applications in minutes with ArticleIP's advanced AI technology. Trusted by 10,000+ inventors, researchers, and IP attorneys worldwide. Start your free trial today.",
  keywords: [
    "AI patent generator",
    "automated patent writing",
    "patent application software",
    "intellectual property automation",
    "patent drafting tool",
    "AI legal technology",
    "patent attorney software",
    "innovation protection platform",
    "patent generation AI",
    "IP management tool"
  ],
  openGraph: {
    title: "ArticleIP | AI-Powered Patent Generation Platform",
    description: "Generate professional patent applications in minutes with AI. Trusted by 10,000+ inventors and IP attorneys worldwide.",
    url: "https://www.articleip.com",
    images: [
      {
        url: "/articleip_redesign.png",
        width: 1200,
        height: 630,
        alt: "ArticleIP - Transform Your Ideas Into Patents with AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArticleIP | AI-Powered Patent Generation Platform",
    description: "Generate professional patent applications in minutes with AI. Trusted by 10,000+ inventors worldwide.",
    images: ["/articleip_redesign.png"],
  },
  alternates: {
    canonical: "https://www.articleip.com",
  },
};

const LandingPage = () => {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData type="website" data={{}} />
      <StructuredData type="organization" data={{}} />
      <StructuredData type="product" data={{}} />

      {/* Main Container */}
      <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
        {/* Enhanced Animated Background */}
        <AnimatedBackground />

        <LandingNavbar />

        {/* Main Content */}
        <main className="flex-grow pt-32 px-6 pb-24">
          <LandingHero />
          <PlatformSection />
          <CompanySection />
          <ResourcesSection />
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} ArticleIP. All Rights Reserved.
        </footer>
      </div>
    </>
  );
};

export default LandingPage;