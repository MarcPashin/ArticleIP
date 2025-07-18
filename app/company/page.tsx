// app/company/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#1A1F36] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-gray-900/30"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <LandingNavbar />
      
      <main className="relative pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-500/10 border border-slate-400/20 text-slate-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-slate-400 rounded-full mr-2 animate-pulse"></span>
            Our Story & Mission
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Bridging Science &
            <span className="text-blue-400"> Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            ArticleIP was founded to close the gap between scientific discovery and meaningful intellectual property protection, making patent workflows accessible for innovators everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-slate-600/10 to-blue-600/10 border border-white/20 backdrop-blur-sm">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Our Mission
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Our mission is to make patent workflows more accessible, efficient, and empowering for technical teams of all sizes. Kristine Pashin, Kristin Smith, and Jordan Leung launched ArticleIP after experiencing firsthand how fragmented, opaque, and costly the patenting process can be.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    As innovators working at the intersection of biotechnology, intellectual property, and AI automation, they envisioned a platform that could help both emerging inventors and large enterprises turn great ideas into protected assets.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                      <p className="text-gray-300">Transforming complex IP processes into accessible workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at ArticleIP
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-slate-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Empowerment Through Clarity
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We believe intellectual property shouldn't be opaque or intimidating. By transforming complex legal processes into accessible workflows, we help innovators protect their ideas with confidence.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Integrity & Confidentiality
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Trust is at the heart of our work. We uphold the highest standards of data security and respect for attorney-client privilege, ensuring every client's information remains private and secure.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Technical Rigor
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Born at the intersection of technology, law, and science. We're committed to accuracy, transparency, and continuous learning as we build tools for technical founders and legal teams.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-slate-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Collaboration Over Silos
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Great ideas deserve collective support. We design our platform to connect teams and make collaboration effortless for founders, attorneys, and IP managers alike.
                </p>
              </div>
            </div>

            {/* Value 5 */}
            <div className="group relative lg:col-start-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Innovation Without Compromise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't accept trade-offs between usability, security, and performance. ArticleIP delivers modern, intelligent patent solutions without sacrificing reliability or compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Learn More About Us
            </h2>
            <p className="text-lg text-gray-300">
              Dive deeper into our commitment to security and meet our advisory team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Link href="/company/security-privacy" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                  Security & Privacy
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Learn about our commitment to data security, confidentiality, and compliance standards that protect your most sensitive IP information.
                </p>
                <div className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            <Link href="/company/advisors" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-slate-300 transition-colors">
                  Our Advisors
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Meet our multidisciplinary advisory team with deep expertise in venture capital, biotechnology, and clinical innovation.
                </p>
                <div className="flex items-center text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                  Meet the Team <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/30 to-blue-600/30 rounded-3xl blur-2xl"></div>
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-slate-600/20 to-blue-600/20 border border-white/20 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Work With Us?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join innovative teams who trust ArticleIP to transform their intellectual property workflows and protect their most valuable innovations.
              </p>
              <RequestDemoButton className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
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