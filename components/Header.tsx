
import React from 'react';
import { Page } from '../types';
import { Cat } from './Icons';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavLink: React.FC<{
  pageName: Page;
  activePage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ pageName, activePage, onClick, children }) => {
  const isActive = pageName === activePage;
  const activeClasses = 'text-brand-primary border-brand-primary';
  const inactiveClasses = 'text-brand-text hover:text-brand-primary border-transparent';
  return (
    <button
      onClick={() => onClick(pageName)}
      className={`px-3 py-2 text-lg font-bold transition-colors duration-200 border-b-2 ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Cat className="h-10 w-10 text-brand-primary" />
          <h1 className="text-3xl font-extrabold text-brand-dark">Purrfect Care</h1>
        </div>
        <div className="flex items-center gap-6">
          <NavLink pageName={Page.FoodAdvisor} activePage={activePage} onClick={setActivePage}>
            Food Advisor
          </NavLink>
          <NavLink pageName={Page.Vets} activePage={activePage} onClick={setActivePage}>
            Find Vets
          </NavLink>
          <NavLink pageName={Page.Community} activePage={activePage} onClick={setActivePage}>
            Community
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
