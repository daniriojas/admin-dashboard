import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type LineChartProps = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension?: number;
    fill?: boolean;
  }[];
  isCurrency?: boolean;
};

export const LineChart: React.FC<LineChartProps> = ({ 
  labels, 
  datasets,
  isCurrency = false
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'start' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              if (isCurrency) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(context.parsed.y);
              } else {
                label += new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(context.parsed.y);
              }
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(153, 153, 153, 0.1)',
          drawBorder: false
        },
        ticks: {
          padding: 10,
          font: {
            size: 11
          },
          callback: function(value: any) {
            if (isCurrency) {
              return '$' + new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(value);
            }
            return new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(value);
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          padding: 5,
          font: {
            size: 11
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.8,
        to: 0.3,
      }
    }
  };

  const enhancedDatasets = datasets.map(dataset => ({
    ...dataset,
    fill: dataset.fill !== undefined ? dataset.fill : true,
    pointBackgroundColor: dataset.borderColor,
    pointBorderColor: '#fff',
    pointRadius: 3,
    pointHoverRadius: 5,
  }));

  const data = {
    labels,
    datasets: enhancedDatasets
  };

  return <Line options={options} data={data} />;
};