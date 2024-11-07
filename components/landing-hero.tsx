"use client";

import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const LandingHero = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: 800,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-[90vh] relative flex flex-col items-center justify-center py-10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 -z-10" />
            
            {/* Main content container */}
            <div className="max-w-7xl mx-auto text-center space-y-6 px-4"> {/* Reduced space-y from 12 to 6 */}
                {/* Heading group */}
                <div className="space-y-4"> {/* Reduced space-y from 8 to 4 */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-none tracking-tight text-[#1a1f36]" /* Added leading-none */
                    >
                        A Patent Tool For
                    </motion.h1>
                    
                    <div className="relative h-24 flex items-center justify-center"> {/* Reduced height from 32 to 24 */}
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif relative text-[#1a1f36]">
                            <TypewriterComponent
                                options={{
                                    strings: [
                                        "Inventors",
                                        "Attorneys",
                                        "Innovators",
                                        "Entrepreneurs",
                                        "Researchers",
                                        "Students",
                                        "Small Businesses",
                                        "Patent Agents",
                                        "Tech Startups",
                                        "IP Professionals",
                                        "Everyone"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl text-[#1a1f36]/90 max-w-3xl mx-auto font-normal mt-2" /* Added mt-2 */
                >
                    Streamline your patent search and innovation process with our powerful tools
                </motion.p>

                {/* Buttons container */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 pt-4" /* Reduced pt from 8 to 4 and gap from 6 to 4 */
                >
                    <Button 
                        variant="articleipSolid" 
                        size="articleip"
                        className="group relative overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-black text-white hover:bg-[#feefd4] hover:text-black border-2 border-black"
                    >
                        <span className="relative z-10">Get Started Free</span>
                    </Button>
                    
                    <Button 
                        variant="articleip" 
                        size="articleip"
                        className="group relative overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-[#1a1f36] text-[#1a1f36] hover:bg-[black] hover:text-white"
                    >
                        Schedule Demo
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                </motion.div>

                {/* Features list */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-8 pt-6" /* Reduced pt from 12 to 6 */
                >
                    {['AI-Powered', '24/7 Support', 'Trusted by 1000+'].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1a1f36]" />
                            <span className="text-sm font-medium text-[#1a1f36]">{feature}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LandingHero;