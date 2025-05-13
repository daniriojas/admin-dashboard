import React from 'react';
import { Users, UserCheck, UserX } from 'lucide-react';
import { PieChart } from '../charts/PieChart';
import { LineChart } from '../charts/LineChart';
import MetricCard from '../ui/MetricCard';
import { getMockData } from '../../data/mockData';

type UserSectionProps = {
  timeFrame: '1m' | '3m' | '6m' | '1y' | 'all';
};

const UserSection: React.FC<UserSectionProps> = ({ timeFrame }) => {
  const data = getMockData(timeFrame);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Usuarios Activos"
        value={data.activeUsers.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        change={data.activeUsersChange}
        icon={<UserCheck size={18} />}
      />
      
      <MetricCard
        title="Usuarios Inactivos"
        value={data.inactiveUsers.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        change={data.inactiveUsersChange}
        icon={<UserX size={18} />}
        isNegative
      />
      
      <MetricCard
        title="Tasa de Crecimiento de Usuarios"
        value={`${data.userGrowthRate.toFixed(2)}%`}
        change={data.userGrowthRateChange}
        icon={<Users size={18} />}
        isPercentage
      />
      
      <MetricCard
        title="Avg. Login Frequency"
        value={`${data.avgLoginFrequency} days`}
        change={data.avgLoginFrequencyChange}
        icon={<Users size={18} />}
      />
      
      <div className="col-span-1 md:col-span-2 card p-4">
        <h4 className="font-medium mb-4">Distribucion de Actividad de Usuarios</h4>
        <div className="h-64 flex items-center justify-center">
          <PieChart 
            labels={['Active Users', 'Inactive Users', 'New Users']}
            data={[data.activeUsers, data.inactiveUsers, data.newUsers[data.newUsers.length - 1]]}
            backgroundColor={['rgba(19, 12, 49, 0.8)', 'rgba(153, 153, 153, 0.8)', 'rgba(254, 117, 3, 0.8)']}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSection;