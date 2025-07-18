"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/outline';


export const ResourcesSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
         <motion.section 
            id="resources" 
            // CORRECTED: Removed bottom margin (mb-12). Spacing is now
            // controlled by the parent <main> tag for better consistency.
            className="mt-24 max-w-5xl mx-auto text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="p-10 rounded-3xl bg-gradient-to-b from-[#2a304e] to-[#1e243f] border border-white/10 shadow-xl">
                {/* ... (rest of the component is the same) */}
                <LockClosedIcon className="h-10 w-10 text-white/80 mx-auto mb-4"/>
                <h2 className="text-3xl font-bold text-white">Secure Collaboration is Paramount</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                    We integrate seamlessly into your strategic workflow. Work done with legal counsel can be protected by <b className="text-white">attorney-client privilege</b>, and our enterprise-grade security features ensure your most sensitive data is always safe.
                </p>
                <div className="mt-8">
                     <Link href="https://ezc76sua2m5.typeform.com/to/qUFqcb1G" passHref>
                        <Button size="lg" className="bg-white text-[#1A1F36] font-bold h-12 px-8 rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Request a Guided Walkthrough
                        </Button>
                     </Link>
                </div>
            </div>
        </motion.section>
    );
};