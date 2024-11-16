"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const HomePageContent = () => {
  return (
    <section className="py-20 bg-[#feefd4]">
      <div className="max-w-6xl mx-auto text-center px-6 space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1f36]">
            Bridging the Gap Between Science and Patents
          </h2>
          <p className="text-lg sm:text-xl text-[#1a1f36]/90">
            Convert your research into comprehensive patent applications with
            our AI-powered platform. Save time, reduce costs, and protect your
            innovations with confidence.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Intelligent Document Conversion",
              description:
                "Transform scientific documents into patent-ready applications while maintaining technical accuracy.",
            },
            {
              title: "Prior Art Analysis",
              description:
                "Advanced AI screening of existing patents to strengthen your application.",
            },
            {
              title: "Educational Guidance",
              description:
                "Learn the patent process as you go with built-in explanations and resources.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#fdf4e3] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#4f4f4f]">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* For Scientists and Tech Transfer Offices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[
            {
              title: "For Scientists",
              points: [
                "Convert research documents into patent drafts",
                "Understand patent requirements",
                "Protect your discoveries affordably",
              ],
              cta: "Start Your Patent Journey",
            },
            {
              title: "For Tech Transfer Offices",
              points: [
                "Process multiple applications efficiently",
                "Maintain consistency across patents",
                "Track and manage patent portfolios",
              ],
              cta: "Schedule a Demo",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-[#fdf4e3] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold text-[#1a1f36] mb-4">
                {section.title}
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#4f4f4f]">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <Button
                variant="default"
                className="mt-4 w-full bg-[#1a1f36] text-white hover:bg-black"
              >
                {section.cta}
              </Button>
            </div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-[#1a1f36]">Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              "70% Time Savings in Patent Drafting",
              "Comprehensive Prior Art Analysis",
              "Educational Resources Included",
              "Secure and Confidential",
              "Expert Support Available",
              "Streamlined Workflow Tools",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#fdf4e3] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-[#1a1f36]"
              >
                <p className="text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageContent;
