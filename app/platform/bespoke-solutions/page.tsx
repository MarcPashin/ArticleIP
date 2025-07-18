// app/platform/bespoke-solutions/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function BespokeSolutionsPage() {
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
            <span className="text-gray-300 text-sm">Bespoke Model Solutions</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Bespoke Model Solutions for Consultants
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Consultants and law firms can deploy custom machine learning pipelines to meet specialized client needs.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Custom ML Pipelines
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  ArticleIP offers tailored retrieval and classification models for industries such as synthetic biology and advanced materials, designed to meet the unique challenges of specialized technical domains. Our custom solutions are built to understand the nuances of your specific industry and client requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Private Deployments
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We provide private deployments to maintain the strictest confidentiality standards required by consulting engagements. Your client data remains completely isolated and secure, with dedicated infrastructure that meets the highest compliance requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Ongoing Support & Optimization
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ongoing model tuning and workflow integration support ensure that each engagement reflects the unique challenges of your clients' portfolios. Our team works closely with you to continuously improve performance and adapt to evolving client needs.
                </p>
              </section>

              <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Specialized Industries
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Synthetic Biology</h4>
                    <p className="text-gray-300 text-sm">
                      Custom models trained on biological sequences, protein structures, and bioengineering patents.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Advanced Materials</h4>
                    <p className="text-gray-300 text-sm">
                      Specialized classification for materials science, nanotechnology, and chemical compositions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Medical Devices</h4>
                    <p className="text-gray-300 text-sm">
                      Regulatory-aware models for medical device patents and FDA compliance considerations.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Software & AI</h4>
                    <p className="text-gray-300 text-sm">
                      Models optimized for software patents, AI algorithms, and emerging technology classifications.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Solution Features
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Custom machine learning model development
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Industry-specific retrieval and classification
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Private, isolated deployment environments
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Ongoing model tuning and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Workflow integration support
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Dedicated technical support team
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Compliance with enterprise security standards
                  </li>
                </ul>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready for a custom solution?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how ArticleIP can create a bespoke solution for your consulting practice.
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