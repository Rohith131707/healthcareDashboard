import React from 'react';
import { healthStatusData, healthCards } from '../data/healthData';
import HealthStatusCards from './HealthStatusCards';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        {/* Human Body Illustration */}
        <div className="anatomy-figure">
          <div className="human-body">
            {/* Simplified human body representation */}
            <div className="body-outline">
              <div className="head"></div>
              <div className="torso">
                <div className="chest"></div>
                <div className="abdomen"></div>
              </div>
              <div className="arms">
                <div className="arm left-arm"></div>
                <div className="arm right-arm"></div>
              </div>
              <div className="legs">
                <div className="leg left-leg"></div>
                <div className="leg right-leg"></div>
              </div>
            </div>
            
            {/* Health Status Indicators */}
            {healthStatusData.map((item) => (
              <div
                key={item.id}
                className={`health-indicator ${item.status}`}
                style={{
                  position: 'absolute',
                  ...item.position
                }}
              >
                <div className="indicator-dot"></div>
                {item.id === 'heart' && (
                  <div className="indicator-label healthy-heart">
                    <span className="indicator-icon">❤️</span>
                    <span className="indicator-text">{item.label}</span>
                  </div>
                )}
              </div>
            ))}
            
            {/* Healthy Leg indicator */}
            <div className="health-indicator healthy-leg">
              <div className="indicator-dot"></div>
              <div className="indicator-label">
                <span className="indicator-icon">🦵</span>
                <span className="indicator-text">Healthy Leg</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Health Status Cards */}
        <HealthStatusCards cards={healthCards} />
      </div>
    </div>
  );
};

export default AnatomySection;
