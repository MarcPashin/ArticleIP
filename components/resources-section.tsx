"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RequestDemoButton } from './request-demo-button';
import { 
    LockClosedIcon,
    ShieldCheckIcon,
    ScaleIcon,
    BuildingOfficeIcon
} from '@heroicons/react/24/outline';


export const ResourcesSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section
            id="resources"
            className="mt-32 max-w-7xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Get Started</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                    Empowering innovators starts with clarity. Navigate IP with confidence from development through commercialization.
                </p>
            </div>

            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl text-center">
                <LockClosedIcon className="h-12 w-12 text-white/80 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Security & Collaboration</h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                    Confidentiality and data security are core commitments at ArticleIP. Work with legal counsel under <b className="text-white">attorney-client privilege</b> while our enterprise-grade security ensures your most sensitive data stays protected.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-sm">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <LockClosedIcon className="h-6 w-6 text-green-300 mb-2 mx-auto" />
                        <p className="text-gray-300"><b className="text-white">Encrypted Environments:</b> All document processing and data transmission</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <ShieldCheckIcon className="h-6 w-6 text-green-300 mb-2 mx-auto" />
                        <p className="text-gray-300"><b className="text-white">Multi-Factor Auth:</b> Role-based access controls for team security</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <ScaleIcon className="h-6 w-6 text-green-300 mb-2 mx-auto" />
                        <p className="text-gray-300"><b className="text-white">Attorney-Client Privilege:</b> Protection when working with legal counsel</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <BuildingOfficeIcon className="h-6 w-6 text-green-300 mb-2 mx-auto" />
                        <p className="text-gray-300"><b className="text-white">Enterprise Compliance:</b> SOC 2 & ISO 27001 customized deployments</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                        <p className="text-gray-300"><b className="text-white">Proactive Strategy:</b> Analyze prior art and structure claims for future growth</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                        <p className="text-gray-300"><b className="text-white">Legal Integration:</b> Seamlessly work with your legal advisors</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                        <p className="text-gray-300"><b className="text-white">Portfolio Tracking:</b> Monitor your IP as your business evolves</p>
                    </div>
                </div>
            </div>

            {/* Request Demo Button - Outside the security section */}
            <div className="text-center mt-8">
                <RequestDemoButton className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                    Request a Demo <span className="ml-2">→</span>
                </RequestDemoButton>
            </div>
        </motion.section>
    );
};