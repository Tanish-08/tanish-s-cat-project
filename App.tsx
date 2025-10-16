
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import VetFinder from './components/VetFinder';
import FoodAdvisor from './components/FoodAdvisor';
import Community from './components/Community';
import { Page } from './types';
import { PawPrint } from './components/Icons';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.FoodAdvisor);

  const renderPage = useCallback(() => {
    switch (activePage) {
      case Page.Vets:
        return <VetFinder />;
      case Page.FoodAdvisor:
        return <FoodAdvisor />;
      case Page.Community:
        return <Community />;
      default:
        return <FoodAdvisor />;
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-brand-light text-brand-text font-sans">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <footer className="text-center py-6 text-brand-secondary">
        <div className="flex justify-center items-center gap-2">
           <PawPrint className="w-5 h-5" />
           <p>Purrfect Care &copy; 2024</p>
           <PawPrint className="w-5 h-5" />
        </div>
      </footer>
    </div>
  );
};

export default App;
