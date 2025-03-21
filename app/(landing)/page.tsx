import HomePageContent from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = ( ) => {
    return (
       <div className="h-full bg-[#feefd4]">
        
        <LandingNavbar />
        
        <LandingHero />
      
        <HomePageContent />
       </div>
    );
}

export default LandingPage;