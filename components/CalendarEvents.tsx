import React from 'react';

const CalendarEvents = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg space-y-4">
            <h2 className="text-white text-lg font-semibold">Upcoming Calendar Events</h2>
            <div className="space-y-2">
                <div className="bg-blue-500 text-white p-2 rounded">
                    Meeting with John <br /> 8 - 9am
                </div>
                <div className="bg-purple-500 text-white p-2 rounded">
                    Meeting with Hiring Team <br /> 9 - 9:45am
                </div>
                <div className="bg-red-500 text-white p-2 rounded">
                    Recruitment Postings <br /> 10am - 1pm
                </div>
                <div className="bg-blue-600 text-white p-2 rounded">
                    Lunch Break <br /> 1 - 2pm
                </div>
                <div className="bg-gray-600 text-white p-2 rounded">
                    LinkedIn Outreach <br /> 2 - 4pm
                </div>
                <div className="bg-blue-500 text-white p-2 rounded">
                    Meeting with Marc <br /> 4pm
                </div>
            </div>
        </div>
    );
};

export default CalendarEvents;
