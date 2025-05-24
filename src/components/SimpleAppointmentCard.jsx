import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className={`simple-appointment-card ${appointment.type}`}>
      <div className="appointment-info">
        <div className="appointment-icon">
          {appointment.icon}
        </div>
        <div className="appointment-details">
          <div className="appointment-title">
            {appointment.title}
          </div>
          <div className="appointment-time">
            {appointment.time}
          </div>
        </div>
      </div>
      
      {appointment.type === 'completed' && (
        <div className="completion-indicator">
          <div className="check-mark">✓</div>
        </div>
      )}
    </div>
  );
};

export default SimpleAppointmentCard;
