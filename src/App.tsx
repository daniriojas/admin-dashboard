import React, { useEffect, useState } from 'react';
import { Sun, Moon, Building2, User } from 'lucide-react';
import Dashboard from './components/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white-off dark:bg-navy">
      <header className="bg-white dark:bg-navy-light border-b border-gray-200 dark:border-navy">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 size={24} className="text-orange" />
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">InvestEstate Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-lighter text-gray-700 dark:text-gray-200 cursor-pointer"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white">
                <User size={16} />
              </div>
              <span className="text-sm font-medium hidden md:inline-block">Nombre de Usuario</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <Dashboard />
      </main>

      <footer className="bg-white dark:bg-navy-light border-t border-gray-200 dark:border-navy py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} InvestEstate Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;