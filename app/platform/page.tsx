// app/platform/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#1A1F36] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-gray-900/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
      
      <LandingNavbar />
      
      <main className="relative pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Modern Patent Intelligence Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Transform Your
            <span className="text-blue-400"> IP Workflow</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            ArticleIP combines drafting, management, analytics, and strategic portfolio development in a secure environment that makes IP workflows faster, clearer, and more collaborative.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RequestDemoButton className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-blue-600/80 backdrop-blur-sm hover:bg-blue-700/80 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 border border-blue-500/30">
              Get Started →
            </RequestDemoButton>
            <Link href="#features" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 backdrop-blur-sm">
              Explore Features
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Comprehensive IP Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to protect, manage, and optimize your intellectual property portfolio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Patent Drafting */}
            <Link href="/platform/patent-drafting" className="group relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-blue-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  Patent Drafting
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Turn ideas into fully structured, USPTO-aligned drafts with minimal friction. Upload technical documentation and generate draft specifications automatically.
                </p>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* Patent Management */}
            <Link href="/platform/patent-management" className="group relative">
              <div className="absolute inset-0 bg-slate-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-slate-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-slate-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-slate-300 transition-colors">
                  Patent Management
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Centralized hub to build, organize, and expand your intellectual property portfolio with powerful breakdown analysis tools.
                </p>
                <div className="flex items-center text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* Analytics */}
            <Link href="/platform/analytics" className="group relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-blue-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  Analytics
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Evaluate inventions in the broader market landscape with competitive assessments and novelty risk analysis.
                </p>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* Bespoke Solutions */}
            <Link href="/platform/bespoke-solutions" className="group relative">
              <div className="absolute inset-0 bg-gray-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gray-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-gray-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gray-300 transition-colors">
                  Bespoke Solutions
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Custom machine learning pipelines for consultants and law firms with specialized client needs.
                </p>
                <div className="flex items-center text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative p-12 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Transform Your IP Workflow?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join innovative teams who trust ArticleIP to protect and manage their most valuable intellectual property.
              </p>
              <RequestDemoButton className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-blue-600/80 backdrop-blur-sm hover:bg-blue-700/80 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 border border-blue-500/30">
                Schedule Your Demo →
              </RequestDemoButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}