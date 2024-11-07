"use client";

import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
    // Define the scrollDown function with proper typing
    const scrollDown = () => {
        window.scrollBy({
            top: 800, // Number of pixels to scroll
            behavior: 'smooth' // Smooth scrolling effect
        });
    };

    return (
        <div className="text-white font-bold py-36 text-center space-y-5 mb-24"> {/* Added mb-24 for extra spacing */}
            <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>The Best Platform To </h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-300 leading-snug">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Streamline Hiring",
                                "Screen Candidates",
                                "Automate Interviews",
                                "Optimize Recruitment",
                                "Enhance Talent Acquisition",
                                "Shortlist Applicants",
                                "Analyze Interviews",
                                "Identify Top Talent",
                                "Reduce Time-to-Hire",
                                "Eliminate Hiring Bias",
                                "Scan Resumes"
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div className="text-center text-sm md:text-xl font-light text-zinc-200">
                Making finding the perfect candidate to recruit easier than ever.
            </div>
            <div className="flex justify-center">
            <a href="https://calendly.com/marc-pashin/30min" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" className="justify-center items-center text-xl md:text-2xl p-6 md:p-8 rounded-full font-semibold text-blue-700">
        Schedule a demo
    </Button>
</a>

            </div>
        
            <a 
                onClick={scrollDown} 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mb-20"
                role="button" // Optional: helps with accessibility
                tabIndex={0} // Ensure this is a number, not a string
                style={{ cursor: 'pointer' }} // Optional: changes cursor to pointer
            >
                <ChevronDoubleDownIcon className="h-10 w-10 text-blue-700 animate-bounce" />
            </a>
        </div>
    );
};