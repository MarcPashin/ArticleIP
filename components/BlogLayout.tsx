// app/blog/components/BlogLayout.tsx

import { LandingNavbar } from '@/components/landing-navbar';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    // This structure uses flexbox to ensure the footer sticks to the bottom,
    // just like your main landing page.
    <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
        {/* The same background effect from your landing page */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full">
            <div className="relative h-full w-full bg-[#1A1F36]">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>
        </div>

        {/* Re-using your main site's navbar for consistency */}
        <LandingNavbar />

        {/* The main content area where your blog pages will be rendered */}
        <main className="flex-grow">
            {children}
        </main>

        {/* Re-using your main site's footer */}
        <footer className="w-full text-center py-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} ArticleIP. All Rights Reserved.
        </footer>
    </div>
  );
}