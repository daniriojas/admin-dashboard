import React from 'react';
import { Building, TrendingUp, ArrowUpRight } from 'lucide-react';
import { LineChart } from '../charts/LineChart';
import { DoughnutChart } from '../charts/DoughnutChart';
import MetricCard from '../ui/MetricCard';
import { getMockData } from '../../data/mockData';

type PropertySectionProps = {
  timeFrame: '1m' | '3m' | '6m' | '1y' | 'all';
};

const PropertySection: React.FC<PropertySectionProps> = ({ timeFrame }) => {
  const data = getMockData(timeFrame);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Valor Original"
        value={`$${data.originalAssetValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
        change={data.originalAssetValueChange}
        icon={<Building size={18} />}
        isCurrency
      />
      
      <MetricCard
        title="Valor Actual"
        value={`$${data.currentAssetValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
        change={data.currentAssetValueChange}
        icon={<Building size={18} />}
        isCurrency
      />
      
      <MetricCard
        title="Retorno Generado (Plusvalia)"
        value={`${data.propertyAppreciation}%`}
        change={data.propertyAppreciationChange}
        icon={<TrendingUp size={18} />}
        isPercentage
      />
      
      <MetricCard
        title="Conteo de Propiedades"
        value={data.propertiesCount.toString()}
        change={data.propertiesCountChange}
        icon={<Building size={18} />}
      />
      
      <div className="col-span-1 md:col-span-2 card p-4">
        <h4 className="font-medium mb-4">Crecimento de Portafolio</h4>
        <div className="h-64">
          <LineChart 
            labels={data.months}
            datasets={[
              {
                label: 'Original Value',
                data: data.assetValueOriginalTrend,
                borderColor: '#130C31',
                backgroundColor: 'rgba(19, 12, 49, 0.1)',
                tension: 0.3
              },
              {
                label: 'Current Value',
                data: data.assetValueCurrentTrend,
                borderColor: '#FE7503',
                backgroundColor: 'rgba(254, 117, 3, 0.1)',
                tension: 0.3
              }
            ]}
            isCurrency
          />
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-2 card p-4">
        <h4 className="font-medium mb-4">Activos por Campaña</h4>
        <div className="h-64 flex items-center justify-center">
          <DoughnutChart 
            labels={['Campaña 1', 'Campaña 2', 'Campaña 3', 'Campaña 4']}
            data={[45, 30, 15, 10]}
            backgroundColor={[
              'rgba(19, 12, 49, 0.8)', 
              'rgba(254, 117, 3, 0.8)', 
              'rgba(153, 153, 153, 0.8)',
              'rgba(19, 12, 49, 0.5)'
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertySection;