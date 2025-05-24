import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarData } from '../data/calendarData';
import { calendarAppointments } from '../data/appointmentsData';
import './CalendarView.css';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-nav">
          <div className="week-selector">
            <span className="week-label">{calendarData.currentWeek}</span>
            <ChevronLeft size={16} className="nav-arrow" />
          </div>
          <div className="month-nav">
            <ChevronLeft size={20} className="nav-arrow" />
            <h3 className="month-title">{calendarData.currentMonth}</h3>
            <ChevronRight size={20} className="nav-arrow" />
          </div>
        </div>
      </div>
      
      <div className="calendar-grid">
        <div className="calendar-days">
          {calendarData.days.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>
        
        <div className="calendar-dates">
          {calendarData.dates.map((dateInfo) => (
            <div key={dateInfo.date} className="date-cell">
              <div className="date-number">{dateInfo.date}</div>
              <div className="date-appointments">
                {dateInfo.appointments.map((time, index) => (
                  <div key={index} className="appointment-time">
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="calendar-appointments">
        {calendarAppointments.map((appointment) => (
          <div key={appointment.id} className={`appointment-card ${appointment.type}`}>
            <div className="appointment-header">
              <div className="appointment-title">{appointment.title}</div>
              <div className="appointment-time">{appointment.time}</div>
            </div>
            <div className="appointment-doctor">{appointment.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
