import React, { useState } from 'react';
import { User, Bell, Shield, Palette, Globe, Save } from 'lucide-react';
import './SettingsView.css';

const SettingsView = () => {
  const [settings, setSettings] = useState({
    profile: {
      name: 'Rohith',
      email: 'rohith@healthcare.com',
      phone: '+1 (555) 123-4567',
      department: 'Cardiology'
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      appointmentReminders: true,
      systemUpdates: false
    },
    preferences: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC-5'
    }
  });

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="settings-view">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Manage your account and application preferences</p>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <div className="section-header">
            <User size={24} />
            <h2>Profile Information</h2>
          </div>
          <div className="section-content">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={settings.profile.name}
                onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={settings.profile.email}
                onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={settings.profile.phone}
                onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <select
                value={settings.profile.department}
                onChange={(e) => handleInputChange('profile', 'department', e.target.value)}
              >
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Bell size={24} />
            <h2>Notifications</h2>
          </div>
          <div className="section-content">
            <div className="toggle-group">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={settings.notifications.emailNotifications}
                  onChange={(e) => handleInputChange('notifications', 'emailNotifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
                Email Notifications
              </label>
            </div>
            <div className="toggle-group">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={settings.notifications.pushNotifications}
                  onChange={(e) => handleInputChange('notifications', 'pushNotifications', e.target.checked)}
                />
                <span className="toggle-slider"></span>
                Push Notifications
              </label>
            </div>
            <div className="toggle-group">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={settings.notifications.appointmentReminders}
                  onChange={(e) => handleInputChange('notifications', 'appointmentReminders', e.target.checked)}
                />
                <span className="toggle-slider"></span>
                Appointment Reminders
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Palette size={24} />
            <h2>Preferences</h2>
          </div>
          <div className="section-content">
            <div className="form-group">
              <label>Theme</label>
              <select
                value={settings.preferences.theme}
                onChange={(e) => handleInputChange('preferences', 'theme', e.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div className="form-group">
              <label>Language</label>
              <select
                value={settings.preferences.language}
                onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="save-btn">
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
