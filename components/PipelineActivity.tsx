import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PipelineActivity = () => {
    const data = {
        labels: ['Analyst', 'Developer Pipeline', 'Mobile Developer', 'Finance Manager', 'Project Manager'],
        datasets: [
            {
                label: 'Online Lead',
                data: [5, 6, 8, 3, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Sourced/Referrals',
                data: [8, 9, 5, 6, 3],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
            {
                label: 'Contacted',
                data: [4, 7, 6, 5, 2],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-white text-lg font-semibold">Pipeline Activity</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default PipelineActivity;
