import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FormTracker = () => {
  // Dummy data for Form KPIs
  const kpiData = {
    responsesReceived: { value: 320, percentage: 75, pending: 80 },
    candidatesGraded: { value: 280, percentage: 70, toReview: 40 },
    interviewsScheduled: { value: 120, percentage: 30, unscheduled: 50 },
    candidatesScreened: { value: 220, percentage: 55 },
    formsOpen: { value: 4, daysRemaining: 7 }
  };

  // Line chart data for Responses and Candidates Graded
  const chartData = {
    labels: ['01-Sep', '02-Sep', '03-Sep', '04-Sep', '05-Sep', '06-Sep', '07-Sep'],
    datasets: [
      {
        label: 'Responses Received',
        data: [50, 70, 65, 80, 90, 100, 120],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      },
      {
        label: 'Candidates Graded',
        data: [40, 55, 60, 75, 85, 100, 110],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.1,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Form Activity Over Time',
        color: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-semibold mb-6">Form Tracker Dashboard</h2>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        {/* Responses Received */}
        <div className="text-center p-4 bg-gray-900 rounded-lg shadow">
          <h3 className="text-xl font-bold">{kpiData.responsesReceived.value}</h3>
          <p>Responses Received</p>
          <p>{kpiData.responsesReceived.percentage}%</p>
          <p>Pending: {kpiData.responsesReceived.pending}</p>
        </div>

        {/* Candidates Graded */}
        <div className="text-center p-4 bg-gray-900 rounded-lg shadow">
          <h3 className="text-xl font-bold">{kpiData.candidatesGraded.value}</h3>
          <p>Candidates Graded</p>
          <p>{kpiData.candidatesGraded.percentage}%</p>
          <p>To Review: {kpiData.candidatesGraded.toReview}</p>
        </div>

        {/* Interviews Scheduled */}
        <div className="text-center p-4 bg-gray-900 rounded-lg shadow">
          <h3 className="text-xl font-bold">{kpiData.interviewsScheduled.value}</h3>
          <p>Interviews Scheduled</p>
          <p>{kpiData.interviewsScheduled.percentage}%</p>
          <p>Unscheduled: {kpiData.interviewsScheduled.unscheduled}</p>
        </div>

        {/* Candidates Screened by AI */}
        <div className="text-center p-4 bg-gray-900 rounded-lg shadow">
          <h3 className="text-xl font-bold">{kpiData.candidatesScreened.value}</h3>
          <p>Candidates Screened by AI</p>
          <p>{kpiData.candidatesScreened.percentage}%</p>
        </div>

        {/* Forms Open */}
        <div className="text-center p-4 bg-gray-900 rounded-lg shadow">
          <h3 className="text-xl font-bold">{kpiData.formsOpen.value}</h3>
          <p>Forms Open</p>
          <p>Days Remaining: {kpiData.formsOpen.daysRemaining}</p>
        </div>
      </div>

      {/* Form Activity Chart */}
      <div className="bg-gray-900 p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Form Activity Over Time</h3>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Additional Information */}
      <div className="bg-gray-900 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Additional Metrics</h3>
        <ul className="text-gray-300 space-y-2">
          <li>Amount of forms open: {kpiData.formsOpen.value}</li>
          <li>Days until forms close: {kpiData.formsOpen.daysRemaining}</li>
        </ul>
      </div>
    </div>
  );
};

export default FormTracker;
