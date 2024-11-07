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
            <Link href="/" className="flex items-center bg-[#111827]">
            <div className="relative h-3 w-3 bg-[#111827]">
                
            </div>
                  <Image 
                    src="/HireAI logo -white.png" 
                    alt="HireAI Logo" 
                    width={150} 
                    height={50}  
                    priority      // Ensures the image is loaded quickly
                />
            </Link>

            <div className="flex items-center gap-x-2">
            <Link href="/sign-up">
                <Button variant="outline" className="rounded-full">
                    Get Started
                </Button>
                </Link>
            </div>
        </nav>
    )
}

