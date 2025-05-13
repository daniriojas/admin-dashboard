import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, PieChart, ArrowUpRight, Building, Clock } from 'lucide-react';
import OverviewSection from './sections/OverviewSection';
import UserSection from './sections/UserSection';
import InvestmentSection from './sections/InvestmentSection';
import PropertySection from './sections/PropertySection';
import TimeFilter from './TimeFilter';

const Dashboard: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<'1m' | '3m' | '6m' | '1y' | 'all'>('1m');

  const handleTimeFrameChange = (value: '1m' | '3m' | '6m' | '1y' | 'all') => {
    setTimeFrame(value);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <TimeFilter selected={timeFrame} onChange={handleTimeFrameChange} />
      </div>

      <div className="dashboard-grid grid-cols-1 gap-6">
        <section>
          <h3 className="flex items-center text-lg font-medium mb-4">
            <BarChart3 size={18} className="mr-2 text-orange" />
            General Overview
          </h3>
          <OverviewSection timeFrame={timeFrame} />
        </section>

        <section>
          <h3 className="flex items-center text-lg font-medium mb-4">
            <Users size={18} className="mr-2 text-orange" />
            User Metrics
          </h3>
          <UserSection timeFrame={timeFrame} />
        </section>

        <section>
          <h3 className="flex items-center text-lg font-medium mb-4">
            <DollarSign size={18} className="mr-2 text-orange" />
            Investment Analytics
          </h3>
          <InvestmentSection timeFrame={timeFrame} />
        </section>

        <section>
          <h3 className="flex items-center text-lg font-medium mb-4">
            <Building size={18} className="mr-2 text-orange" />
            Property Portfolio
          </h3>
          <PropertySection timeFrame={timeFrame} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;