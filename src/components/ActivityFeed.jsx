import React from 'react';
import { activityData } from '../data/healthData';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.chartData.map(item => item.value));
  
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">{activityData.title}</h3>
        <p className="activity-subtitle">{activityData.subtitle}</p>
      </div>
      
      <div className="activity-chart">
        <div className="chart-container">
          {activityData.chartData.map((item, index) => (
            <div key={item.day} className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: index === 3 ? 'var(--secondary-blue)' : 'var(--primary-blue)'
                }}
              ></div>
              <div className="chart-label">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="activity-footer">
        <span className="activity-note">Setting</span>
      </div>
    </div>
  );
};

export default ActivityFeed;
