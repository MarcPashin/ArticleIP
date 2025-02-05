"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const LandingNavbar = 
() => {
    

    return (
        <nav className="bg-[#111827] p-4 bg-transparent flex items-center justify-between">
    <Link href="/" className="flex items-center">
        <div className="text-4xl font-serif font-bold text-black tracking-tight">
            ArticleIP
        </div>
    </Link>

    <div className="flex items-center gap-x-2">
    <a href="https://journalpatent.web.app/login">
        <Button 
            variant="articleipSolid" 
            className="group relative overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-black text-white hover:bg-[#feefd4] hover:text-black border-2 border-black h-12 px-8 text-lg font-medium"
        >
            Get Started
        </Button>
    </Link>
</div>
        </nav>
    )
}

//<div className="flex items-center gap-x-2">
           
//
//

