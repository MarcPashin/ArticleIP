// app/platform/patent-management/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function PatentManagementPage() {
    return (
        <div className="min-h-screen bg-[#1A1F36]">
            <LandingNavbar />

            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <Link href="/platform" className="text-blue-400 hover:text-blue-300 text-sm">
                            Platform
                        </Link>
                        <span className="text-gray-500 mx-2">/</span>
                        <span className="text-gray-300 text-sm">Patent Management</span>
                    </nav>

                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Patent Management
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            The platform provides a centralized hub to build, organize, and expand your intellectual property portfolio.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-lg prose-invert max-w-none">
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">
                                    Portfolio Development
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Whether you are drafting continuations and divisionals or analyzing how existing patents fit into your larger strategy, ArticleIP helps you strengthen protection over time. Our platform provides the tools and insights needed to build a comprehensive IP portfolio that grows with your innovation.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">
                                    Advanced Analysis Tools
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    In-house counsel can use powerful breakdown analysis tools to deconstruct large portfolios into clear components such as claims, citations, and patent families, making it easier to prioritize maintenance and enforcement. Our analytical capabilities help you understand the full scope and value of your intellectual property assets.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-4">
                                    Secure Collaboration
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Secure collaboration features support role-based permissions and workflow integrations across legal, R&D, and executive teams. Our platform ensures that the right people have access to the right information while maintaining the highest standards of confidentiality and security.
                                </p>
                            </section>

                            <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h2 className="text-2xl font-semibold text-white mb-4">
                                    Management Capabilities
                                </h2>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        Centralized portfolio organization and tracking
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        Continuation and divisional application management
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        Portfolio breakdown analysis tools
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        Claims, citations, and patent family mapping
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        Role-based permissions and access control
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        Cross-team workflow integrations
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        Maintenance and enforcement prioritization
                                    </li>
                                </ul>
                            </section>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Ready to optimize your patent portfolio?
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Discover how ArticleIP can help you build and manage a stronger IP portfolio.
                            </p>
                            <RequestDemoButton className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                                Request a Demo →
                            </RequestDemoButton>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}