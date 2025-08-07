"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const advisors = [
    { 
        name: 'Dr. Alexander Titus', 
        desc: 'Former Assistant Director of Biotechnology at U.S. DoD, VP of AI/ML at Avidity Biosciences. PhD in ML & Bioinformatics from Dartmouth, ex-Google healthcare strategist.',
        image: '/advisors/AlexTitus.jpeg'
    },
    { 
        name: 'Dr. Sandro Diez Amigo', 
        desc: 'PhD in Economics from MIT, certified Financial Risk Manager. Specializes in international development, finance, and technology policy advisory.',
        image: '/advisors/sandrodiezamigo.jpg'
    },
    { 
        name: 'Dr. Sophia Yen', 
        desc: 'Physician entrepreneur, CEO of Pandia Health. Clinical Associate Professor at Stanford Medicine with 20+ years in adolescent medicine.',
        image: '/advisors/siphiayen.jpg'
    },
    { 
        name: 'Dr. Soohyun Bae', 
        desc: 'Founder of Podonos, Inaugural Google AI fellow, YC alum, ML PhD from Georgia Tech.',
        image: '/advisors/soohyun.jpeg'
    },
    
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
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Built by Innovators, for Innovators</h2>
                <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">Our mission is to close the gap between brilliant ideas and meaningful intellectual property protection.</p>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div className="space-y-20">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl mt-9">
                        <h3 className="text-2xl font-bold text-white mb-4">About ArticleIP</h3>
                        <p className="text-gray-300 mb-6">Founded by Kristine Pashin, Kristin Smith, and Jordan Leung, ArticleIP transforms how innovators protect intellectual property. Born from experiencing the fragmented, costly patenting process firsthand, we built a platform that makes patent workflows accessible and empowering for technical teams of all sizes.</p>
                        <div className="pt-6 border-t border-white/10">
                            <h4 className="text-lg font-semibold text-white mb-3">Our Values</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Clarity:</b> Transform complex legal processes into accessible workflows</span></li>
                                <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Security:</b> Uphold the highest standards of data protection and confidentiality</span></li>
                                <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Rigor:</b> Combine technology, law, and science with accuracy and transparency</span></li>
                                <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Collaboration:</b> Connect teams and make IP management effortless</span></li>
                                <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Innovation:</b> Deliver modern solutions without compromising reliability</span></li>
                                <li className="flex items-start gap-x-2"><span className="text-blue-300 mt-1">✓</span> <span><b className="text-gray-200">Accessibility:</b> Make professional IP services available to innovators at every stage</span></li>
                            </ul>
                        </div>
                    </div>
                    

                </div>

                 <div id="company-advisors" className="space-y-4">
                     <h3 className="text-2xl font-bold text-white mb-4 text-center lg:text-left">Guided by Industry Leaders</h3>
                     {advisors.map(advisor => (
                         <div key={advisor.name} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-x-4">
                             <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                                 <Image
                                     src={advisor.image}
                                     alt={advisor.name}
                                     width={64}
                                     height={64}
                                     className="w-full h-full object-cover"
                                 />
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