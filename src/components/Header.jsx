import React from 'react';
import { Search, Bell, Plus, Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ onMobileMenuToggle, isMobileMenuOpen, activeView }) => {
  const getPageTitle = (view) => {
    switch (view) {
      case 'dashboard':
        return 'Dashboard';
      case 'history':
        return 'Medical History';
      case 'calendar':
        return 'Calendar';
      case 'appointments':
        return 'Appointments';
      case 'statistics':
        return 'Statistics';
      case 'tests':
        return 'Medical Tests';
      case 'support':
        return 'Support';
      case 'settings':
        return 'Settings';
      default:
        return 'Healthcare';
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="mobile-menu-btn"
          onClick={onMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="logo">
          <span className="logo-text">Healthcare.</span>
        </div>

        <div className="page-title">
          <span>{getPageTitle(activeView)}</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search patients, appointments..."
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Rohith</span>
            <span className="user-role">Physician</span>
          </div>
        </div>

        <button className="add-btn" aria-label="Add new">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
