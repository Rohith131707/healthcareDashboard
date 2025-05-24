import React, { useState } from 'react';
import { Plus, Calendar, Clock, User, Phone, Mail, MapPin, Edit, Trash2 } from 'lucide-react';
import './AppointmentsView.css';

const AppointmentsView = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [viewMode, setViewMode] = useState('day'); // day, week, month

  const appointmentsData = [
    {
      id: 1,
      time: '09:00',
      duration: 60,
      patient: 'Rohith',
      type: 'Cardiology Consultation',
      doctor: 'Rahul Varma',
      status: 'confirmed',
      phone: '+91 98765 43210',
      email: 'rohith@email.com',
      notes: 'Follow-up for blood pressure monitoring'
    },
    {
      id: 2,
      time: '10:30',
      duration: 45,
      patient: 'Vamshi',
      type: 'Dental Cleaning',
      doctor: 'Suresh Reddy',
      status: 'confirmed',
      phone: '+91 98765 43211',
      email: 'vamshi@email.com',
      notes: 'Regular cleaning and checkup'
    },
    {
      id: 3,
      time: '14:00',
      duration: 30,
      patient: 'Rahul',
      type: 'Eye Examination',
      doctor: 'Ramesh Reddy',
      status: 'pending',
      phone: '+91 98765 43212',
      email: 'rahul@email.com',
      notes: 'Vision test and prescription update'
    },
    {
      id: 4,
      time: '15:30',
      duration: 90,
      patient: 'Varun',
      type: 'Physical Therapy',
      doctor: 'Rahul Varma',
      status: 'confirmed',
      phone: '+91 98765 43213',
      email: 'varun@email.com',
      notes: 'Knee rehabilitation session'
    },
    {
      id: 5,
      time: '17:00',
      duration: 60,
      patient: 'Kiran',
      type: 'Dermatology Consultation',
      doctor: 'Suresh Reddy',
      status: 'cancelled',
      phone: '+91 98765 43214',
      email: 'kiran@email.com',
      notes: 'Skin condition evaluation'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'var(--success-green)';
      case 'pending':
        return 'var(--warning-orange)';
      case 'cancelled':
        return 'var(--error-red)';
      default:
        return 'var(--text-light)';
    }
  };

  const getEndTime = (startTime, duration) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + duration;
    const endHours = Math.floor(totalMinutes / 60);
    const endMins = totalMinutes % 60;
    return `${endHours.toString().padStart(2, '0')}:${endMins.toString().padStart(2, '0')}`;
  };

  return (
    <div className="appointments-view">
      <div className="appointments-header">
        <div className="header-content">
          <h1 className="appointments-title">Appointments</h1>
          <p className="appointments-subtitle">Manage patient appointments and schedules</p>
        </div>
        <button className="add-appointment-btn">
          <Plus size={20} />
          New Appointment
        </button>
      </div>

      <div className="appointments-controls">
        <div className="date-selector">
          <Calendar className="calendar-icon" size={20} />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-input"
          />
        </div>

        <div className="view-mode-selector">
          <button
            className={`mode-btn ${viewMode === 'day' ? 'active' : ''}`}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
          <button
            className={`mode-btn ${viewMode === 'week' ? 'active' : ''}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button
            className={`mode-btn ${viewMode === 'month' ? 'active' : ''}`}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
        </div>
      </div>

      <div className="appointments-content">
        <div className="appointments-list">
          {appointmentsData.map((appointment) => (
            <div key={appointment.id} className={`appointment-card ${appointment.status}`}>
              <div className="appointment-time">
                <div className="time-slot">
                  <Clock size={16} />
                  <span className="start-time">{appointment.time}</span>
                  <span className="duration">
                    - {getEndTime(appointment.time, appointment.duration)}
                  </span>
                </div>
                <div className="duration-badge">
                  {appointment.duration}min
                </div>
              </div>

              <div className="appointment-details">
                <div className="appointment-header-info">
                  <h3 className="appointment-type">{appointment.type}</h3>
                  <div
                    className="appointment-status"
                    style={{ color: getStatusColor(appointment.status) }}
                  >
                    {appointment.status}
                  </div>
                </div>

                <div className="patient-info">
                  <div className="info-row">
                    <User size={16} />
                    <span className="patient-name">{appointment.patient}</span>
                  </div>
                  <div className="info-row">
                    <User size={16} />
                    <span className="doctor-name">{appointment.doctor}</span>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-row">
                    <Phone size={14} />
                    <span>{appointment.phone}</span>
                  </div>
                  <div className="contact-row">
                    <Mail size={14} />
                    <span>{appointment.email}</span>
                  </div>
                </div>

                {appointment.notes && (
                  <div className="appointment-notes">
                    <p>{appointment.notes}</p>
                  </div>
                )}
              </div>

              <div className="appointment-actions">
                <button className="action-btn edit-btn">
                  <Edit size={16} />
                  Edit
                </button>
                <button className="action-btn delete-btn">
                  <Trash2 size={16} />
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="appointments-summary">
          <div className="summary-card">
            <h3>Today's Summary</h3>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Total Appointments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Confirmed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Cancelled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsView;
