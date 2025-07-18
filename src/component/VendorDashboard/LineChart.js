import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Price Movements',
        data: [47, 52, 67, 58, 9, 50],
        fill: false,
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: 'orange',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#444',
          font: {
            size: 13,
          },
        },
      },
      title: {
        display: true,
        text: 'Total Revenue & Price Movements',
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#222',
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#555',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#555',
        },
        grid: {
          color: '#eee',
        },
      },
    },
  };

  return (
    <div style={{ height: '280px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

