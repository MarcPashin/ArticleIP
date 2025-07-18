"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export const SubtleBackers = () => {
    const backers = [
        {
            name: "NVIDIA Inception",
            logo: "/logos/nvidia-inception.png",
            alt: "NVIDIA Inception Program"
        },
        {
            name: "Google for Startups",
            logo: "/logos/google-startups.png",
            alt: "Google for Startups"
        },
        {
            name: "StartX",
            logo: "/logos/startx.png",
            alt: "StartX Stanford Accelerator"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 mb-8"
        >
            <div className="text-center">
                <p className="text-xs text-gray-500 mb-6 font-medium tracking-wide">
                    Backed by
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                    {backers.map((backer, index) => (
                        <motion.div
                            key={backer.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                            className="flex items-center justify-center hover:scale-105 transition-transform duration-300"
                        >
                            <div className="relative h-8 w-24 sm:h-10 sm:w-32">
                                <Image
                                    src={backer.logo}
                                    alt={backer.alt}
                                    fill
                                    className="object-contain filter brightness-0 invert opacity-60 hover:opacity-80 transition-opacity duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};