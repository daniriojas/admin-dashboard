// Mock data with realistic values for a real estate investment platform

export const getMockData = (timeFrame: '1m' | '3m' | '6m' | '1y' | 'all') => {
  // Generate months based on timeframe
  const getMonths = (count: number) => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    
    return Array.from({ length: count }, (_, i) => {
      const monthIndex = (currentMonth - (count - 1) + i) % 12;
      return monthNames[monthIndex >= 0 ? monthIndex : monthIndex + 12];
    });
  };

  // Get month count based on timeframe
  const getMonthCount = () => {
    switch(timeFrame) {
      case '1m': return 1;
      case '3m': return 3;
      case '6m': return 6;
      case '1y': return 12;
      case 'all': return 24;
      default: return 6;
    }
  };

  const monthCount = getMonthCount();
  const months = getMonths(monthCount);

  // Generate data trend with some randomness
  const generateTrend = (
    startValue: number, 
    endValue: number, 
    count: number, 
    volatility: number = 0.1
  ) => {
    const step = (endValue - startValue) / (count - 1);
    return Array.from({ length: count }, (_, i) => {
      const baseValue = startValue + step * i;
      const randomFactor = 1 + (Math.random() * volatility * 2 - volatility);
      return Math.round(baseValue * randomFactor);
    });
  };

  // Generate percentage changes
  const generateChange = () => {
    return Number((Math.random() * 10 - 2).toFixed(1));
  };

  // User data
  const totalUsers = 12500 + (monthCount * 300);
  const totalUsersChange = 5.2;
  
  const totalInvestors = 4800 + (monthCount * 100);
  const totalInvestorsChange = 7.8;
  
  const activeUsers = Math.round(totalUsers * 0.75);
  const activeUsersChange = 3.5;
  
  const inactiveUsers = totalUsers - activeUsers;
  const inactiveUsersChange = -1.2;
  
  const userGrowthRate = 5.8 + (Math.random() * 2 - 1);
  const userGrowthRateChange = 0.6;
  
  const avgLoginFrequency = 7;
  const avgLoginFrequencyChange = -0.5;
  
  // Investment data
  const totalInvested = 45000000 + (monthCount * 1500000);
  const totalInvestedChange = 8.3;
  
  const avgInvestmentSize = Math.round(totalInvested / totalInvestors);
  const avgInvestmentSizeChange = 2.1;
  
  const currentMonthInvestment = 2700000 + (Math.random() * 500000);
  const currentMonthInvestmentChange = 6.4;
  
  const investorGrowthRate = 6.2 + (Math.random() * 2 - 1);
  const investorGrowthRateChange = 1.2;
  
  const avgUserReturns = 8.7 + (Math.random() * 2 - 1);
  const avgUserReturnsChange = 0.9;
  
  const conversionRate = Math.round((totalInvestors / totalUsers) * 100);
  const conversionRateChange = 1.5;

  // Property data
  const originalAssetValue = 65000000 + (monthCount * 2000000);
  const originalAssetValueChange = 5.6;
  
  const currentAssetValue = originalAssetValue * (1 + (avgUserReturns/100));
  const currentAssetValueChange = 9.2;
  
  const propertyAppreciation = Math.round((currentAssetValue/originalAssetValue - 1) * 100);
  const propertyAppreciationChange = 2.3;
  
  const propertiesCount = 95 + Math.floor(monthCount / 2);
  const propertiesCountChange = 5.9;

  // Generate trend data
  const newUsers = generateTrend(300, 500, monthCount, 0.3);
  const newInvestors = generateTrend(100, 180, monthCount, 0.3);
  const monthlyInvestments = generateTrend(1800000, 2800000, monthCount, 0.25);
  const cumulativeInvestments = monthlyInvestments.map((value, index, arr) => 
    arr.slice(0, index + 1).reduce((a, b) => a + b, 40000000)
  );
  const transactionsCount = generateTrend(180, 320, monthCount, 0.2);
  const monthlyActiveUsers = generateTrend(
    Math.round(activeUsers * 0.9), 
    activeUsers, 
    monthCount, 
    0.1
  );
  const monthlyInactiveUsers = generateTrend(
    Math.round(inactiveUsers * 0.9), 
    inactiveUsers, 
    monthCount, 
    0.15
  );
  const assetValueOriginalTrend = generateTrend(
    originalAssetValue - (monthCount * 1800000), 
    originalAssetValue, 
    monthCount, 
    0.05
  );
  const assetValueCurrentTrend = assetValueOriginalTrend.map(val => 
    Math.round(val * (1 + (avgUserReturns/100)))
  );

  return {
    months,
    // User metrics
    totalUsers,
    totalUsersChange,
    totalInvestors,
    totalInvestorsChange,
    activeUsers,
    activeUsersChange,
    inactiveUsers,
    inactiveUsersChange,
    userGrowthRate,
    userGrowthRateChange,
    avgLoginFrequency,
    avgLoginFrequencyChange,
    conversionRate,
    conversionRateChange,
    // Investment metrics
    totalInvested,
    totalInvestedChange,
    avgInvestmentSize,
    avgInvestmentSizeChange,
    currentMonthInvestment,
    currentMonthInvestmentChange,
    investorGrowthRate,
    investorGrowthRateChange,
    avgUserReturns,
    avgUserReturnsChange,
    // Asset metrics
    originalAssetValue,
    originalAssetValueChange,
    currentAssetValue,
    currentAssetValueChange,
    propertyAppreciation,
    propertyAppreciationChange,
    propertiesCount,
    propertiesCountChange,
    // Trends
    newUsers,
    newInvestors,
    monthlyInvestments,
    cumulativeInvestments,
    transactionsCount,
    monthlyActiveUsers,
    monthlyInactiveUsers,
    assetValueOriginalTrend,
    assetValueCurrentTrend
  };
};