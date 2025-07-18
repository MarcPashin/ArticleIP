// components/landing-navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { RequestDemoModal } from "./request-demo-modal";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode; }) => (
    <Link href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
       {children}
    </Link>
);

const NavLinkDropdown = ({ title, children }: { title: string; children: React.ReactNode; }) => (
    <div className="relative group">
        <button className="inline-flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
            <span>{title}</span>
            <ChevronDownIcon className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        <div className="absolute left-0 top-full mt-3 w-56 p-2 rounded-xl bg-gradient-to-b from-[#2a304e] to-[#1e243f] border border-white/10 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {children}
        </div>
    </div>
);

const DropdownItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="block text-left px-4 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
       {children}
   </a>
);

export const LandingNavbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50">
                <nav className="mx-auto mt-4 max-w-7xl px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white">
                            ArticleIP
                        </Link>
                        <div className="hidden md:flex items-center gap-x-8">
                            <NavLinkDropdown title="Platform">
                                <DropdownItem href="/platform">Overview</DropdownItem>
                                <DropdownItem href="/platform/patent-drafting">Patent Drafting</DropdownItem>
                                <DropdownItem href="/platform/patent-management">Patent Management</DropdownItem>
                                <DropdownItem href="/platform/analytics">Analytics</DropdownItem>
                                <DropdownItem href="/platform/bespoke-solutions">Bespoke Model Solutions</DropdownItem>
                            </NavLinkDropdown>
                            <NavLinkDropdown title="Company">
                                <DropdownItem href="/company">About</DropdownItem>
                                <DropdownItem href="/company/security-privacy">Security & Privacy</DropdownItem>
                                <DropdownItem href="/company/advisors">Advisors</DropdownItem>
                            </NavLinkDropdown>
                            
                            {/* UPDATED LINKS */}
                            <NavLink href="/#resources">Resources</NavLink>
                            <NavLink href="/blog">Blog</NavLink>
                        </div>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                        >
                            Request a Demo <span className="ml-2">→</span>
                        </button>
                    </div>
                </nav>
            </header>
            
            <RequestDemoModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
};