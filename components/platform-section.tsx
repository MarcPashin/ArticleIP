"use client";

import { motion } from 'framer-motion';
import { 
    CpuChipIcon, 
    CircleStackIcon, 
    ChartBarIcon, 
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const platformFeatures = [
    { 
        id: 'platform-drafting', 
        icon: CpuChipIcon, 
        title: 'Patent Drafting', 
        desc: 'Transform ideas into USPTO-aligned drafts with AI-powered claim generation. Upload documents, diagrams, and collaborate in real-time to create ready-to-file applications.' 
    },
    { 
        id: 'platform-management', 
        icon: CircleStackIcon, 
        title: 'Patent Management', 
        desc: 'Centralized portfolio management with powerful analysis tools. Track patent families, manage continuations, and enable secure collaboration across legal, R&D, and executive teams.' 
    },
    { 
        id: 'platform-analytics', 
        icon: ChartBarIcon, 
        title: 'Analytics & Insights', 
        desc: 'Generate competitive assessments and identify market opportunities. Evaluate novelty risk and strategic value with retrieval-augmented search across global patent records.' 
    },
    { 
        id: 'platform-bespoke', 
        icon: WrenchScrewdriverIcon, 
        title: 'Custom Solutions', 
        desc: 'Deploy tailored ML models for specialized industries. Private deployments with custom tuning ensure maximum confidentiality and relevance for your unique needs.' 
    }
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