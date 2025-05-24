import React from 'react';
import { FileText, Download, Eye, Calendar } from 'lucide-react';
import './TestsView.css';

const TestsView = () => {
  const testsData = [
    {
      id: 1,
      type: 'Blood Test',
      patient: 'Rohith',
      date: '2024-01-15',
      status: 'completed',
      results: 'Normal',
      doctor: 'Rahul Varma'
    },
    {
      id: 2,
      type: 'X-Ray',
      patient: 'Vamshi',
      date: '2024-01-14',
      status: 'pending',
      results: 'Pending',
      doctor: 'Suresh Reddy'
    },
    {
      id: 3,
      type: 'MRI Scan',
      patient: 'Rahul',
      date: '2024-01-13',
      status: 'completed',
      results: 'Abnormal',
      doctor: 'Ramesh Reddy'
    },
    {
      id: 4,
      type: 'CT Scan',
      patient: 'Varun',
      date: '2024-01-12',
      status: 'completed',
      results: 'Normal',
      doctor: 'Rahul Varma'
    },
    {
      id: 5,
      type: 'ECG',
      patient: 'Kiran',
      date: '2024-01-11',
      status: 'pending',
      results: 'Pending',
      doctor: 'Suresh Reddy'
    }
  ];

  return (
    <div className="tests-view">
      <div className="tests-header">
        <h1 className="tests-title">Medical Tests</h1>
        <p className="tests-subtitle">View and manage patient test results</p>
      </div>

      <div className="tests-content">
        <div className="tests-list">
          {testsData.map((test) => (
            <div key={test.id} className="test-card">
              <div className="test-header">
                <FileText size={24} />
                <div className="test-info">
                  <h3>{test.type}</h3>
                  <p>Patient: {test.patient}</p>
                </div>
                <div className={`test-status ${test.status}`}>
                  {test.status}
                </div>
              </div>

              <div className="test-details">
                <div className="detail-item">
                  <Calendar size={16} />
                  <span>{test.date}</span>
                </div>
                <div className="detail-item">
                  <span>Doctor: {test.doctor}</span>
                </div>
                <div className="detail-item">
                  <span>Results: {test.results}</span>
                </div>
              </div>

              <div className="test-actions">
                <button className="action-btn">
                  <Eye size={16} />
                  View
                </button>
                <button className="action-btn">
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

export default TestsView;
