import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import HistoryView from './components/HistoryView';
import CalendarView from './components/CalendarView';
import AppointmentsView from './components/AppointmentsView';
import StatisticsView from './components/StatisticsView';
import TestsView from './components/TestsView';
import SupportView from './components/SupportView';
import SettingsView from './components/SettingsView';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigationChange = (viewId) => {
    setActiveView(viewId);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardMainContent />;
      case 'history':
        return <HistoryView />;
      case 'calendar':
        return <CalendarView standalone={true} />;
      case 'appointments':
        return <AppointmentsView />;
      case 'statistics':
        return <StatisticsView />;
      case 'tests':
        return <TestsView />;
      case 'support':
        return <SupportView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardMainContent />;
    }
  };

  return (
    <div className="app">
      <Header
        onMobileMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        activeView={activeView}
      />
      <div className="app-body">
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuClose={() => setIsMobileMenuOpen(false)}
          activeView={activeView}
          onNavigationChange={handleNavigationChange}
        />
        <div className="main-content-wrapper">
          {renderMainContent()}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
