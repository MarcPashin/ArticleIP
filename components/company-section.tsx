"use client";

import { motion } from 'framer-motion';
import { UserGroupIcon } from '@heroicons/react/24/outline';

const advisors = [
     { name: 'Dr. Alexander Titus', desc: 'Biotechnology leader, former Asst. Director at U.S. DoD, PhD in ML & Bioinformatics.' },
     { name: 'Dr. Sandro Diez Amigo', desc: 'Financial Risk Manager, MIT PhD in Economics, expert in tech and economic policy.' },
     { name: 'Dr. Sophia Yen', desc: 'Physician entrepreneur, CEO of Pandia Health, Clinical Prof. at Stanford Medicine.' },
 ];

export const CompanySection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    
    return (
        <motion.section 
            id="company" 
            className="mt-32 max-w-7xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Built by Innovators, for Innovators</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Our mission is to close the gap between brilliant ideas and meaningful intellectual property protection.</p>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div className="p-8 h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                    <p className="text-gray-300 mb-6">Founded by Kristine Pashin, Kristin Smith, and Jordan Leung, ArticleIP was born from the frustration of a fragmented, costly patenting process. As experts in biotech, IP, and AI, we envisioned a platform to empower technical teams and turn innovation into defensible assets.</p>
                    <div className="mt-auto pt-6 border-t border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-3">Our Core Commitments</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Clarity:</b> Make the complex accessible.</span></li>
                            <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Security:</b> Uphold absolute confidentiality.</span></li>
                            <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Rigor:</b> Combine legal, scientific, and technical expertise.</span></li>
                        </ul>
                    </div>
                </div>

                 <div id="company-advisors" className="space-y-4">
                     <h3 className="text-2xl font-bold text-white mb-4 text-center lg:text-left">Guided by Industry Leaders</h3>
                     {advisors.map(advisor => (
                         <div key={advisor.name} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-x-4">
                             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                 <UserGroupIcon className="h-6 w-6 text-white/70"/>
                             </div>
                             <div>
                                 <h4 className="font-bold text-white">{advisor.name}</h4>
                                 <p className="text-sm text-gray-400">{advisor.desc}</p>
                             </div>
                         </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};