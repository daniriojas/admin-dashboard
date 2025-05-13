import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { BarChart } from '../charts/BarChart';
import { LineChart } from '../charts/LineChart';
import MetricCard from '../ui/MetricCard';
import { getMockData } from '../../data/mockData';

type OverviewSectionProps = {
  timeFrame: '1m' | '3m' | '6m' | '1y' | 'all';
};

const OverviewSection: React.FC<OverviewSectionProps> = ({ timeFrame }) => {
  const data = getMockData(timeFrame);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Usuarios Totales"
        value={data.totalUsers.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        change={data.totalUsersChange}
        icon={<TrendingUp size={18} />}
      />
      
      <MetricCard
        title="Inversionistas"
        value={data.totalInvestors.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        change={data.totalInvestorsChange}
        icon={<TrendingUp size={18} />}
      />
      
      <MetricCard
        title="Monto Invertido"
        value={`$${data.totalInvested.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
        change={data.totalInvestedChange}
        icon={<TrendingUp size={18} />}
        isCurrency
      />
      
      <MetricCard
        title="Tasa de Conversion"
        value={`${data.conversionRate}%`}
        change={data.conversionRateChange}
        icon={<TrendingUp size={18} />}
        isPercentage
      />
      
      <div className="col-span-1 md:col-span-2 lg:col-span-2 card p-4">
        <h4 className="font-medium mb-4">Monto Invertido</h4>
        <div className="h-64">
          <LineChart 
            labels={data.months}
            datasets={[
              {
                label: 'Investment Amount',
                data: data.monthlyInvestments,
                borderColor: '#FE7503',
                backgroundColor: 'rgba(254, 117, 3, 0.1)',
                tension: 0.3
              }
            ]}
            isCurrency
          />
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 lg:col-span-2 card p-4">
        <h4 className="font-medium mb-4"> Inversionistas vs Todos los Users</h4>
        <div className="h-64">
          <BarChart 
            labels={data.months}
            datasets={[
              {
                label: 'New Users',
                data: data.newUsers,
                backgroundColor: 'rgba(19, 12, 49, 0.7)',
              },
              {
                label: 'New Investors',
                data: data.newInvestors,
                backgroundColor: 'rgba(254, 117, 3, 0.7)',
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;