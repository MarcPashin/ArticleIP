// app/platform/analytics/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function AnalyticsPage() {
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
            <span className="text-gray-300 text-sm">Analytics</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Analytics
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              ArticleIP equips users to evaluate their inventions in the broader market landscape.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Market Intelligence
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The analytics suite makes it simple to generate competitive assessments, identify whitespace opportunities, and understand novelty and obviousness risk using retrieval-augmented search across global patent records. Our comprehensive analysis helps you make informed decisions about your IP strategy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Strategic Reporting
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The platform provides clear, structured reports to help estimate the strategic value of existing IP assets and guide portfolio investment decisions. Our reporting capabilities transform complex patent data into actionable insights that drive business strategy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Global Patent Search
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Leverage advanced retrieval-augmented search technology to explore global patent databases with unprecedented accuracy and speed. Our search capabilities help you understand the competitive landscape and identify opportunities for innovation.
                </p>
              </section>

              <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Analytics Features
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Competitive landscape assessments
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Whitespace opportunity identification
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Novelty and obviousness risk analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Global patent database search
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Strategic value estimation reports
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Portfolio investment guidance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Market patentability evaluation
                  </li>
                </ul>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to unlock market insights?
              </h3>
              <p className="text-gray-300 mb-6">
                See how ArticleIP's analytics can guide your IP strategy and investment decisions.
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