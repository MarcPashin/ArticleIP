import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const LeadsBySource = () => {
    const data = {
        labels: ['LinkedIn', 'Monster', 'Career Builder', 'Talent Community'],
        datasets: [
            {
                data: [19, 20, 22, 44],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-white text-lg font-semibold">Leads by Source</h2>
            <Pie data={data} />
        </div>
    );
};

export default LeadsBySource;
