// components/footer.tsx

import Link from "next/link";
import { RequestDemoButton } from "./request-demo-button";

export const Footer = () => {
    return (
        <footer className="bg-[#0F1419] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-serif font-bold text-white mb-4 block">
                            ArticleIP
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Modern patent intelligence platform transforming how innovators protect and manage intellectual property.
                        </p>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#platform" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link href="#platform-drafting" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Patent Drafting
                                </Link>
                            </li>
                            <li>
                                <Link href="#platform-management" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Patent Management
                                </Link>
                            </li>
                            <li>
                                <Link href="#platform-analytics" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="#platform-bespoke" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Bespoke Solutions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/company" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/security-privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Security & Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/advisors" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Advisors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources & Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <RequestDemoButton className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Request a Demo
                                </RequestDemoButton>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 ArticleIP. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/company/security-privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/company/security-privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
