import React from 'react';
import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  FileText,
  HelpCircle,
  Settings
} from 'lucide-react';
import { navigationItems } from '../data/navigationData';
import './Sidebar.css';

const iconMap = {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  FileText,
  HelpCircle,
  Settings
};

const Sidebar = ({ isMobileMenuOpen, onMobileMenuClose, activeView, onNavigationChange }) => {
  const handleNavClick = (itemId) => {
    onNavigationChange(itemId);
    if (onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  return (
    <aside className={`sidebar ${isMobileMenuOpen ? 'sidebar-mobile-open' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3 className="sidebar-title">General</h3>
          <nav className="sidebar-nav">
            {navigationItems.map((item) => {
              const IconComponent = iconMap[item.icon];
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <IconComponent size={20} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                  {isActive && <div className="active-indicator" />}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="user-status">
            <div className="status-indicator online"></div>
            <span className="status-text">Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
