"use client";

import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from 'next/link';

export const LandingHero = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: 800,
            behavior: 'smooth'
        });
    };

    return (
        <section className="min-h-[90vh] relative flex flex-col items-center justify-center py-10" aria-labelledby="landing-hero-heading">
            {/* Background color */}
            <div className="absolute inset-0 bg-[#feefd4] -z-10" />

            {/* Main content container */}
            <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
                {/* Heading group */}
                <header className="space-y-4">
                    <motion.h1
                        id="landing-hero-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-none tracking-tight text-[#1a1f36]"
                    >
                        A Patent Generation Tool For
                    </motion.h1>

                    <div className="relative h-24 flex items-center justify-center">
                        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal relative text-[#1a1f36]">
                            <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Researchers")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Inventors")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Attorneys")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Everyone")
                                        .callFunction(() => {
                                            const cursor = document.querySelector(".Typewriter__cursor") as HTMLElement;
                                            if (cursor) {
                                                cursor.textContent = ".";
                                                cursor.style.animation = "none";
                                            }
                                        })
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 80,
                                    deleteSpeed: 50,
                                    cursor: "|",
                                }}
                            />
                        </div>
                    </div>
                </header>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl text-[#1a1f36]/90 max-w-3xl mx-auto font-normal mt-2"
                >
                    Streamline your patent search and innovation process with our powerful tools.
                </motion.p>

                {/* Call-to-action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
                >
                    <Link href="https://ezc76sua2m5.typeform.com/to/qUFqcb1G" passHref>
                        <Button
                            variant="articleip"
                            size="articleip"
                            className="group relative overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-[#1a1f36] text-[#1a1f36] hover:bg-[black] hover:text-white"
                            aria-label="Sign up for the waitlist"
                        >
                            Waitlist Sign-Up
                            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Button>
                    </Link>
                </motion.div>

                {/* Features list */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center"
                >
                    {['AI-Powered', 'Vetted by Top Lawyers', 'Backed by Pear VC', 'Trusted by Leading Biotech Startups'].map((feature, index) => (
                        <div key={index} className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1a1f36]" />
                            <span className="text-sm font-medium text-[#1a1f36]">{feature}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LandingHero;
