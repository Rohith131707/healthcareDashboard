import React from 'react';
import './HealthStatusCards.css';

const HealthStatusCards = ({ cards }) => {
  return (
    <div className="health-status-cards">
      {cards.map((card) => (
        <div key={card.id} className="health-card">
          <div className="card-header">
            <div className="card-icon">
              {card.icon}
            </div>
            <div className="card-title">
              {card.title}
            </div>
          </div>
          
          <div className="card-content">
            <div 
              className="status-bar"
              style={{ backgroundColor: card.color }}
            ></div>
            <div className="card-date">
              {card.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
