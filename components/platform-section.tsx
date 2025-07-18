"use client";

import { motion } from 'framer-motion';
import { 
    CpuChipIcon, 
    CircleStackIcon, 
    ChartBarIcon, 
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const platformFeatures = [
    { id: 'platform-drafting', icon: CpuChipIcon, title: 'Patent Drafting', desc: 'Transform documents and ideas into USPTO-aligned drafts with AI-assisted claim generation and co-authoring.' },
    { id: 'platform-management', icon: CircleStackIcon, title: 'Patent Management', desc: 'Centralize your portfolio. Track families, manage continuations, and collaborate across teams with role-based access.' },
    { id: 'platform-analytics', icon: ChartBarIcon, title: 'Analytics & Insights', desc: 'Evaluate market landscapes, assess patentability, and uncover whitespace opportunities with data-driven reports.' },
    { id: 'platform-bespoke', icon: WrenchScrewdriverIcon, title: 'Bespoke Solutions', desc: 'Deploy custom-tuned models for specialized industries like biotech, ensuring maximum relevance and confidentiality.' }
];

export const PlatformSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section 
            id="platform" 
            className="mt-32 max-w-7xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="text-center mb-12">
                 {/* CORRECTED: High-contrast heading */}
                 <h2 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Your IP Command Center</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">From initial draft to portfolio strategy, ArticleIP integrates every step of the patent lifecycle.</p>
            </div>

            {/* CORRECTED: Dark "glassy" cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platformFeatures.map(item => (
                     <motion.div 
                        key={item.id} 
                        id={item.id} 
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
                        variants={cardVariants}
                     >
                        <item.icon className="h-8 w-8 text-blue-300 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};