import React from 'react';

type TimeFilterProps = {
  selected: '1m' | '3m' | '6m' | '1y' | 'all';
  onChange: (value: '1m' | '3m' | '6m' | '1y' | 'all') => void;
};

const TimeFilter: React.FC<TimeFilterProps> = ({ selected, onChange }) => {
  const options = [
    { value: '1m', label: '1 Month' },
    { value: '3m', label: '3 Months' },
    { value: '6m', label: '6 Months' },
    { value: '1y', label: '1 Year' },
    { value: 'all', label: 'All Time' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 bg-white dark:bg-navy-light rounded-lg p-1 shadow-sm border border-gray-100 dark:border-navy">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md transition-all whitespace-nowrap ${
            selected === option.value
              ? 'bg-orange text-white font-medium'
              : 'hover:bg-gray-100 dark:hover:bg-navy-lighter text-gray-700 dark:text-gray-200'
          }`}
          onClick={() => onChange(option.value as '1m' | '3m' | '6m' | '1y' | 'all')}
        >
          {window.innerWidth < 640 ? option.value : option.label}
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;