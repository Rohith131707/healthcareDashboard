import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, User, FileText, Download } from 'lucide-react';
import './HistoryView.css';

const HistoryView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const historyData = [
    {
      id: 1,
      type: 'appointment',
      title: 'Cardiology Consultation',
      patient: 'Rohith',
      doctor: 'Rahul Varma',
      date: '2024-01-15',
      time: '10:30 AM',
      status: 'completed',
      notes: 'Regular checkup, blood pressure normal'
    },
    {
      id: 2,
      type: 'test',
      title: 'Blood Test Results',
      patient: 'Vamshi',
      doctor: 'Suresh Reddy',
      date: '2024-01-14',
      time: '2:15 PM',
      status: 'completed',
      notes: 'All values within normal range'
    },
    {
      id: 3,
      type: 'appointment',
      title: 'Dental Cleaning',
      patient: 'Rahul',
      doctor: 'Ramesh Reddy',
      date: '2024-01-13',
      time: '9:00 AM',
      status: 'completed',
      notes: 'Routine cleaning, no issues found'
    },
    {
      id: 4,
      type: 'prescription',
      title: 'Medication Prescribed',
      patient: 'Varun',
      doctor: 'Rahul Varma',
      date: '2024-01-12',
      time: '11:45 AM',
      status: 'active',
      notes: 'Antibiotics for respiratory infection'
    },
    {
      id: 5,
      type: 'test',
      title: 'X-Ray Examination',
      patient: 'Kiran',
      doctor: 'Suresh Reddy',
      date: '2024-01-11',
      time: '3:30 PM',
      status: 'completed',
      notes: 'Chest X-ray, no abnormalities detected'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'appointment':
        return <Calendar size={20} />;
      case 'test':
        return <FileText size={20} />;
      case 'prescription':
        return <User size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'var(--success-green)';
      case 'active':
        return 'var(--primary-blue)';
      case 'pending':
        return 'var(--warning-orange)';
      default:
        return 'var(--text-light)';
    }
  };

  const filteredHistory = historyData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="history-view">
      <div className="history-header">
        <h1 className="history-title">Medical History</h1>
        <p className="history-subtitle">View and manage patient medical records</p>
      </div>

      <div className="history-controls">
        <div className="search-filter-row">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search patients, doctors, or procedures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-container">
            <Filter className="filter-icon" size={20} />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Records</option>
              <option value="appointment">Appointments</option>
              <option value="test">Tests</option>
              <option value="prescription">Prescriptions</option>
            </select>
          </div>
        </div>
      </div>

      <div className="history-content">
        <div className="history-list">
          {filteredHistory.map((item) => (
            <div key={item.id} className="history-item">
              <div className="item-header">
                <div className="item-type">
                  {getTypeIcon(item.type)}
                  <span className="type-label">{item.type}</span>
                </div>
                <div
                  className="item-status"
                  style={{ color: getStatusColor(item.status) }}
                >
                  {item.status}
                </div>
              </div>

              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <div className="item-details">
                  <div className="detail-row">
                    <User size={16} />
                    <span>Patient: {item.patient}</span>
                  </div>
                  <div className="detail-row">
                    <User size={16} />
                    <span>Doctor: {item.doctor}</span>
                  </div>
                  <div className="detail-row">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                    <Clock size={16} />
                    <span>{item.time}</span>
                  </div>
                </div>
                <p className="item-notes">{item.notes}</p>
              </div>

              <div className="item-actions">
                <button className="action-btn view-btn">
                  <FileText size={16} />
                  View Details
                </button>
                <button className="action-btn download-btn">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryView;
