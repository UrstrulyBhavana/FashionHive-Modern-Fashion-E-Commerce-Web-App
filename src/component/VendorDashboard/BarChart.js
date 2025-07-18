import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Recent Orders',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pending Payments',
        data: [47, 52, 67, 58, 9, 50],
        backgroundColor: 'rgba(255, 165, 0, 0.7)',
        borderColor: 'orange',
        borderWidth: 1,
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
          font: { size: 13 },
        },
      },
      title: {
        display: true,
        text: 'Order & Payment Overview',
        color: '#222',
        font: { size: 16, weight: 'bold' },
        padding: { top: 10, bottom: 10 },
      },
    },
    scales: {
      x: {
        ticks: { color: '#666' },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#666' },
        grid: { color: '#eee' },
      },
    },
  };

  return (
    <div style={{ height: '280px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

