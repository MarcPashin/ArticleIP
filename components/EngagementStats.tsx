import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const EngagementStats = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-4 text-center rounded">
                <h3 className="text-white text-lg">Not Progressed <CheckCircle className="inline-block text-green-500" /></h3>
                <p className="text-blue-500 text-3xl">8</p>
            </div>
            <div className="bg-gray-900 p-4 text-center rounded">
                <h3 className="text-white text-lg">Pending Profile Reviews <Circle className="inline-block text-yellow-500" /></h3>
                <p className="text-blue-500 text-3xl">29</p>
            </div>
            <div className="bg-gray-900 p-4 text-center rounded col-span-2">
                <h3 className="text-white text-lg">Engagement Score</h3>
                <p className="text-blue-500 text-4xl">76%</p>
                <p className="text-green-500">↑ 11% vs Q1</p>
            </div>
            <div className="bg-gray-900 p-4 text-center rounded col-span-2">
                <h3 className="text-white text-lg">Profiles Accepted</h3>
                <p className="text-green-500 text-3xl">84%</p>
            </div>
        </div>
    );
};

export default EngagementStats;
