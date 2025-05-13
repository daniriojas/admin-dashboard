import React, { ReactNode } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

type MetricCardProps = {
  title: string;
  value: string;
  change: number;
  icon: ReactNode;
  isCurrency?: boolean;
  isPercentage?: boolean;
  isNegative?: boolean;
};

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  icon,
  isCurrency = false,
  isPercentage = false,
  isNegative = false
}) => {
  const isPositiveChange = change >= 0;
  const displayChange = isPositiveChange ? `+${change}%` : `${change}%`;
  const changeClasses = isNegative 
    ? (!isPositiveChange ? 'text-green-500' : 'text-red-500')
    : (isPositiveChange ? 'text-green-500' : 'text-red-500');
  
  return (
    <div className="metric-card animate-fade-in hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <span className="metric-title">{title}</span>
        <span className="w-8 h-8 rounded-full bg-orange/10 dark:bg-orange/20 flex items-center justify-center text-orange">
          {icon}
        </span>
      </div>
      <div className="metric-value text-navy dark:text-white">{value}</div>
      <div className={`metric-change ${changeClasses}`}>
        {isPositiveChange ? (
          <ArrowUpRight size={14} className="mr-1" />
        ) : (
          <ArrowDownRight size={14} className="mr-1" />
        )}
        <span>{displayChange} from last period</span>
      </div>
    </div>
  );
};

export default MetricCard;