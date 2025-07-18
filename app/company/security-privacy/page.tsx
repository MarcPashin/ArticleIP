// app/company/security-privacy/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function SecurityPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1A1F36]">
      <LandingNavbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/company" className="text-blue-400 hover:text-blue-300 text-sm">
              Company
            </Link>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-300 text-sm">Security & Privacy</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Security and Privacy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Confidentiality and data security are core commitments at ArticleIP.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Encrypted Processing Environment
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  All document processing occurs in encrypted environments, ensuring that your sensitive intellectual property information is protected at every stage of the workflow. Our infrastructure is designed with security-first principles to maintain the confidentiality of your innovations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Access Controls & Authentication
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Clients can rely on strict multi-factor authentication and role-based access controls to safeguard sensitive information. Our granular permission system ensures that team members only have access to the information they need, when they need it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Enterprise Compliance
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  For teams with advanced compliance requirements, including SOC 2 or ISO 27001 standards, ArticleIP offers customized deployments that ensure full alignment with enterprise security policies. We work closely with your security teams to meet your specific compliance needs.
                </p>
              </section>

              <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Security Features
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    End-to-end encryption for all document processing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Multi-factor authentication (MFA) required
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Role-based access controls and permissions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    SOC 2 and ISO 27001 compliance options
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Customized enterprise deployments
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Attorney-client privilege protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    Regular security audits and monitoring
                  </li>
                </ul>
              </section>

              <section className="bg-blue-600/10 p-6 rounded-xl border border-blue-500/20">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Attorney-Client Privilege
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  When you use ArticleIP in collaboration with your legal counsel, the work you do on the platform can be covered under attorney-client privilege, helping preserve confidentiality and protect sensitive disclosures. We strongly recommend working closely with your legal advisors to integrate ArticleIP into your broader IP strategy and compliance practices.
                </p>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Questions about security?
              </h3>
              <p className="text-gray-300 mb-6">
                Our team is happy to discuss our security measures and compliance capabilities in detail.
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