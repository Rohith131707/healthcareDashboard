import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-grid">
          {/* Left Column - Anatomy and Activity */}
          <div className="left-column">
            <AnatomySection />
            <ActivityFeed />
          </div>
          
          {/* Right Column - Calendar and Schedule */}
          <div className="right-column">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
