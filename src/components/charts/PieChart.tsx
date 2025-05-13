import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type PieChartProps = {
  labels: string[];
  data: number[];
  backgroundColor: string[];
};

export const PieChart: React.FC<PieChartProps> = ({ 
  labels, 
  data,
  backgroundColor
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          padding: 20
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor: backgroundColor.map(color => color.replace(/[^,]+(?=\))/, '1')),
        borderWidth: 1,
      }
    ]
  };

  return <Pie options={options} data={chartData} />;
};