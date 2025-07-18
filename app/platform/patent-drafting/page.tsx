// app/platform/patent-drafting/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function PatentDraftingPage() {
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
            <span className="text-gray-300 text-sm">Patent Drafting</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Patent Drafting
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              ArticleIP enables users to turn ideas into fully structured, USPTO-aligned drafts with minimal friction.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Streamlined Document Processing
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  You can upload technical documentation, scientific disclosures, or whitepapers, and the platform automatically extracts relevant claims language and generates draft specifications. Our intelligent system understands the nuances of patent language and helps transform your technical content into legally sound patent applications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Visual Integration
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Diagrams and JPEGs can be uploaded directly, and the system tags and references visual data to integrate seamlessly into your drafts. Our platform understands the importance of visual elements in patent applications and ensures proper integration and referencing throughout your documentation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Collaborative Workspace
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The drafting workspace allows teams to co-author documents in real time, track changes, and export ready-to-file applications. Built for modern IP teams, our collaboration features ensure that everyone stays aligned while maintaining the highest standards of confidentiality and security.
                </p>
              </section>

              <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Automatic claims language extraction from technical documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    USPTO-aligned draft generation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Direct upload and integration of diagrams and images
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Real-time collaborative editing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Change tracking and version control
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Export ready-to-file applications
                  </li>
                </ul>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to streamline your patent drafting?
              </h3>
              <p className="text-gray-300 mb-6">
                See how ArticleIP can transform your technical documentation into patent-ready applications.
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