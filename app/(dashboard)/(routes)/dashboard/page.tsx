"use client";

import CalendarEvents from '@/components/CalendarEvents';
import PipelineActivity from '@/components/PipelineActivity';
import LeadsBySource from '@/components/LeadsBySource';
import FormTracker from '@/components/form-tracker';
import EngagementStats from '@/components/EngagementStats';
import WelcomeUser from "@/components/welcome-message";

const DashboardPage = () => {
  return (
    <div className="min-h-screen h-full relative overflow-hidden bg-gray-900 text-white">
      {/* Main Content */}
      <main className="p-4">
        {/* Top Section: Welcome Message */}
        <div className="flex justify-between items-center mb-4">
          <WelcomeUser />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Calendar */}
          <div className="col-span-12 xl:col-span-3 bg-gray-800 p-2 rounded-lg shadow-md">
            <CalendarEvents />
          </div>

          {/* Pipeline Activity */}
          <div className="col-span-12 xl:col-span-5 bg-gray-800 p-2 rounded-lg shadow-md">
            <PipelineActivity />
          </div>

          {/* Leads by Source */}
          <div className="col-span-12 xl:col-span-2 bg-gray-800 p-2 rounded-lg shadow-md">
            <LeadsBySource />
          </div>

          {/* Engagement Stats */}
          <div className="col-span-12 xl:col-span-2 bg-gray-800 p-2 rounded-lg shadow-md">
            <EngagementStats />
          </div>

          {/* Email Campaign */}
          <div className="col-span-20 xl:col-span-6 bg-gray-800 p-2 rounded-lg shadow-md">
            <FormTracker />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
