import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Users, Calendar, Activity, Heart } from 'lucide-react';
import './StatisticsView.css';

const StatisticsView = () => {
  const [timeRange, setTimeRange] = useState('week');

  const statsData = {
    overview: [
      {
        id: 1,
        title: 'Total Patients',
        value: '1,247',
        change: '+12%',
        trend: 'up',
        icon: Users,
        color: 'var(--primary-blue)'
      },
      {
        id: 2,
        title: 'Appointments Today',
        value: '24',
        change: '+8%',
        trend: 'up',
        icon: Calendar,
        color: 'var(--success-green)'
      },
      {
        id: 3,
        title: 'Active Treatments',
        value: '156',
        change: '-3%',
        trend: 'down',
        icon: Activity,
        color: 'var(--warning-orange)'
      },
      {
        id: 4,
        title: 'Recovery Rate',
        value: '94.2%',
        change: '+2.1%',
        trend: 'up',
        icon: Heart,
        color: 'var(--error-red)'
      }
    ],
    chartData: [
      { day: 'Mon', patients: 45, appointments: 52 },
      { day: 'Tue', patients: 52, appointments: 48 },
      { day: 'Wed', patients: 38, appointments: 61 },
      { day: 'Thu', patients: 61, appointments: 55 },
      { day: 'Fri', patients: 55, appointments: 67 },
      { day: 'Sat', patients: 42, appointments: 43 },
      { day: 'Sun', patients: 28, appointments: 31 }
    ],
    departmentStats: [
      { name: 'Cardiology', patients: 234, percentage: 18.8 },
      { name: 'Orthopedics', patients: 198, percentage: 15.9 },
      { name: 'Neurology', patients: 167, percentage: 13.4 },
      { name: 'Pediatrics', patients: 145, percentage: 11.6 },
      { name: 'Dermatology', patients: 123, percentage: 9.9 },
      { name: 'Others', patients: 380, percentage: 30.4 }
    ]
  };

  const maxValue = Math.max(...statsData.chartData.map(item => Math.max(item.patients, item.appointments)));

  return (
    <div className="statistics-view">
      <div className="statistics-header">
        <div className="header-content">
          <h1 className="statistics-title">Statistics & Analytics</h1>
          <p className="statistics-subtitle">Healthcare performance insights and metrics</p>
        </div>
        
        <div className="time-range-selector">
          <button 
            className={`range-btn ${timeRange === 'week' ? 'active' : ''}`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button 
            className={`range-btn ${timeRange === 'month' ? 'active' : ''}`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button 
            className={`range-btn ${timeRange === 'year' ? 'active' : ''}`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>

      <div className="statistics-content">
        {/* Overview Cards */}
        <div className="overview-grid">
          {statsData.overview.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                    <IconComponent size={24} color="white" />
                  </div>
                  <div className={`stat-trend ${stat.trend}`}>
                    {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-title">{stat.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-container">
            <div className="chart-header">
              <h3>Patient & Appointment Trends</h3>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color patients"></div>
                  <span>Patients</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color appointments"></div>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div className="chart">
              <div className="chart-bars">
                {statsData.chartData.map((item, index) => (
                  <div key={item.day} className="bar-group">
                    <div className="bars">
                      <div 
                        className="bar patients-bar"
                        style={{ height: `${(item.patients / maxValue) * 100}%` }}
                        title={`${item.patients} patients`}
                      ></div>
                      <div 
                        className="bar appointments-bar"
                        style={{ height: `${(item.appointments / maxValue) * 100}%` }}
                        title={`${item.appointments} appointments`}
                      ></div>
                    </div>
                    <div className="bar-label">{item.day}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="department-stats">
            <div className="department-header">
              <h3>Department Distribution</h3>
            </div>
            <div className="department-list">
              {statsData.departmentStats.map((dept, index) => (
                <div key={dept.name} className="department-item">
                  <div className="department-info">
                    <span className="department-name">{dept.name}</span>
                    <span className="department-count">{dept.patients} patients</span>
                  </div>
                  <div className="department-progress">
                    <div 
                      className="progress-bar"
                      style={{ 
                        width: `${dept.percentage}%`,
                        backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                      }}
                    ></div>
                  </div>
                  <span className="department-percentage">{dept.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="metrics-grid">
          <div className="metric-card">
            <h4>Average Wait Time</h4>
            <div className="metric-value">12 min</div>
            <div className="metric-change positive">-2 min from last week</div>
          </div>
          
          <div className="metric-card">
            <h4>Patient Satisfaction</h4>
            <div className="metric-value">4.8/5</div>
            <div className="metric-change positive">+0.2 from last month</div>
          </div>
          
          <div className="metric-card">
            <h4>Bed Occupancy</h4>
            <div className="metric-value">78%</div>
            <div className="metric-change neutral">Same as last week</div>
          </div>
          
          <div className="metric-card">
            <h4>Staff Efficiency</h4>
            <div className="metric-value">92%</div>
            <div className="metric-change positive">+5% from last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsView;
