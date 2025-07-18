// app/company/advisors/page.tsx

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { RequestDemoButton } from "@/components/request-demo-button";
import Link from "next/link";

export default function AdvisorsPage() {
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
            <span className="text-gray-300 text-sm">Advisors</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our Advisors
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              ArticleIP benefits from the guidance of a multidisciplinary advisory team with deep experience in venture capital, biotechnology, and clinical innovation.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-12">
              {/* Dr. Alexander Titus */}
              <section className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Dr. Alexander Titus
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Dr. Alexander Titus is a biotechnology leader who has served as Assistant Director of Biotechnology at the U.S. Department of Defense and as Vice President of AI and Machine Learning at Avidity Biosciences. He holds a PhD in machine learning and bioinformatics from Dartmouth College and has worked at Google driving cloud healthcare strategy.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Dr. Titus now serves as a Commissioner on the National Security Commission on Emerging Biotechnology and writes on technology and public policy. His expertise in the intersection of biotechnology, AI, and policy provides invaluable guidance for ArticleIP's strategic direction.
                </p>
              </section>

              {/* Dr. Sandro Diez Amigo */}
              <section className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Dr. Sandro Diez Amigo
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Dr. Sandro Diez Amigo holds a PhD in economics from MIT and is a certified Financial Risk Manager specializing in international development, finance, and risk. He is a member of the American Economic Association and serves on the Advisory Committee for the Sustainability and Climate Risk certificate.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Dr. Diez Amigo advises ventures at the intersection of technology and economic policy. His deep understanding of financial risk and economic strategy helps ArticleIP navigate the complex landscape of IP valuation and market dynamics.
                </p>
              </section>

              {/* Dr. Sophia Yen */}
              <section className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Dr. Sophia Yen
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Dr. Sophia Yen is a physician entrepreneur and advocate for women's health with over two decades of clinical experience in adolescent medicine. She is the Co-Founder and CEO of Pandia Health, a company dedicated to making birth control and menopause care more accessible.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Dr. Yen serves as Clinical Associate Professor in the Department of Pediatrics at Stanford University School of Medicine and is a Menopause Society Certified Practitioner. Her experience in healthcare innovation and entrepreneurship provides crucial insights into building scalable, impactful technology solutions.
                </p>
              </section>

              {/* Advisory Impact */}
              <section>
                <h2 className="text-3xl font-semibold text-white mb-6">Advisory Impact</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Our advisors bring complementary expertise that spans the critical domains where ArticleIP operates: cutting-edge biotechnology research, economic and financial strategy, and healthcare innovation. Their guidance helps us navigate complex regulatory environments, understand market dynamics, and build solutions that truly serve the needs of innovators across industries.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  This multidisciplinary perspective ensures that ArticleIP remains at the forefront of both technological capability and practical application, delivering solutions that are not only technically sophisticated but also strategically sound and market-ready.
                </p>
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Interested in our approach?
              </h3>
              <p className="text-gray-300 mb-6">
                Learn how our advisory-guided strategy can benefit your IP workflow.
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