import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function StockChart({ data }) {
  const chartData = {
    labels: data ? Object.keys(data['Close']) : [],
    datasets: [
      {
        label: 'Closing Price',
        data: data ? Object.values(data['Close']) : [],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

export default StockChart;
