"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export const LandingHero = () => {
  return (
    <section className="text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Vetted by Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4 inline-flex items-center gap-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
        >
           <SparklesIcon className="h-5 w-5 text-yellow-300"/>
           <span className="text-sm font-medium text-gray-200">Vetted by Top Lawyers, Backed by StartX</span> 
        </motion.div>

        {/* CORRECTED: Text gradient for high contrast */}
         <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight tracking-tight"
        >
            The Hub for Modern <br/>Intellectual Property
        </motion.h1>

        {/* Subtitle */}
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
        >
            Turn technological discovery into protected assets. ArticleIP streamlines drafting, management, and strategy with an intelligent, secure platform built for innovators.
        </motion.p>
        
        {/* Buttons */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
             {/* CORRECTED: White button with dark text */}
             <Link href="https://ezc76sua2m5.typeform.com/to/qUFqcb1G" passHref>
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#1A1F36] font-bold h-12 px-8 rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                    Request a Demo
                </Button>
             </Link>
             
             {/* CORRECTED: Dark "glassy" outline button */}
             <Link href="https://app.articleip.com" passHref>
                 <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-xl bg-white/5 border-white/20 text-white hover:bg-white/10 transition-colors">
                     Waitlist Sign-Up
                </Button>
             </Link>
        </motion.div>
    </section>
  );
};