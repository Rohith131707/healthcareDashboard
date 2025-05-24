import React from 'react';
import { upcomingAppointments } from '../data/appointmentsData';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      
      <div className="schedule-content">
        {upcomingAppointments.map((daySchedule) => (
          <div key={daySchedule.day} className="day-schedule">
            <h4 className="day-title">On {daySchedule.day}</h4>
            <div className="day-appointments">
              {daySchedule.appointments.map((appointment) => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
