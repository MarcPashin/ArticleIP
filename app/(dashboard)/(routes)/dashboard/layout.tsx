import React from 'react';
import { UserButton } from "@clerk/nextjs";
import Sidebar from '@/components/sidebar'; // Make sure the Sidebar component path is correct

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            {/* Sidebar Component */}
            <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] w-72">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <main className="md:ml-72 min-h-screen bg-gray-900">
                <div className="p-6 w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;
