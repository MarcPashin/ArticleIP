// app/(landing)/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { PlatformSection } from "@/components/platform-section";
import { CompanySection } from "@/components/company-section";
import { ResourcesSection } from "@/components/resources-section";

const LandingPage = () => {
  return (
    // 1. THE MAIN CONTAINER: This div is now a vertical flex column that
    //    is guaranteed to be at least the height of the screen.
    <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
        {/* Background Aurora Effect (no changes needed here) */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full">
            <div className="relative h-full w-full bg-[#1A1F36]">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>
        </div>

        <LandingNavbar />
        
        {/* 2. THE MAIN CONTENT: flex-grow tells this section to take up all
             available empty space, which shoves the footer down.
             The bottom padding (pb-24) ensures there is space above the footer.
        */}
        <main className="flex-grow pt-32 px-6 pb-24">
          <LandingHero />
          <PlatformSection />
          <CompanySection />
          <ResourcesSection />
        </main>

        {/* 3. THE FOOTER: Now pushed to the bottom of the screen.
             It has less vertical padding (py-8) for a tighter look.
        */}
        <footer className="w-full text-center py-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} ArticleIP. All Rights Reserved.
        </footer>
    </div>
  );
};

export default LandingPage;