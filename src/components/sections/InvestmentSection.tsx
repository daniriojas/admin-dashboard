import React from 'react';
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';
import { LineChart } from '../charts/LineChart';
import { BarChart } from '../charts/BarChart';
import MetricCard from '../ui/MetricCard';
import { getMockData } from '../../data/mockData';

type InvestmentSectionProps = {
  timeFrame: '1m' | '3m' | '6m' | '1y' | 'all';
};

const InvestmentSection: React.FC<InvestmentSectionProps> = ({ timeFrame }) => {
  const data = getMockData(timeFrame);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Valor Promedio Invertido por Usuario"
        value={`$${data.avgInvestmentSize.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
        change={data.avgInvestmentSizeChange}
        icon={<DollarSign size={18} />}
        isCurrency
      />
      
      <MetricCard
        title="Numero de Transacciones"
        value={data.transactionsCount[data.transactionsCount.length - 1].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        change={data.currentMonthInvestmentChange}
        icon={<DollarSign size={18} />}
      />
      
      <MetricCard
        title="Tasa de Crecimiento de Inversionistas"
        value={`${data.investorGrowthRate.toFixed(2)}%`}
        change={data.investorGrowthRateChange}
        icon={<TrendingUp size={18} />}
        isPercentage
      />
      
      <MetricCard
        title="Retorno/Plusvalia promedio por Usuario"
        value={`${data.avgUserReturns.toFixed(2)}%`}
        change={data.avgUserReturnsChange}
        icon={<ArrowUpRight size={18} />}
        isPercentage
      />
      
      <div className="col-span-1 md:col-span-2 card p-4">
        <h4 className="font-medium mb-4">Crecimiento de Transacciones</h4>
        <div className="h-64">
          <BarChart 
            labels={data.months}
            datasets={[
              {
                label: 'Numero de Transacciones',
                data: data.transactionsCount,
                backgroundColor: 'rgba(19, 12, 49, 0.7)',
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;