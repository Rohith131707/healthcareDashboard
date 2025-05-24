import React from 'react';
import { HelpCircle, Phone, Mail, MessageCircle, Book } from 'lucide-react';
import './SupportView.css';

const SupportView = () => {
  const supportOptions = [
    {
      id: 1,
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: Phone,
      action: 'Call Now',
      color: 'var(--primary-blue)'
    },
    {
      id: 2,
      title: 'Email Support',
      description: 'Send us an email for detailed assistance',
      icon: Mail,
      action: 'Send Email',
      color: 'var(--success-green)'
    },
    {
      id: 3,
      title: 'Live Chat',
      description: 'Chat with our support representatives',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'var(--warning-orange)'
    },
    {
      id: 4,
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      icon: Book,
      action: 'View Docs',
      color: 'var(--secondary-blue)'
    }
  ];

  const faqs = [
    {
      question: 'How do I schedule a new appointment?',
      answer: 'Go to the Appointments section and click "New Appointment" to schedule.'
    },
    {
      question: 'How can I view patient history?',
      answer: 'Navigate to the History section to view all patient medical records.'
    },
    {
      question: 'How do I update patient information?',
      answer: 'Click on a patient card and select "Edit" to update their information.'
    }
  ];

  return (
    <div className="support-view">
      <div className="support-header">
        <h1 className="support-title">Help & Support</h1>
        <p className="support-subtitle">Get assistance and find answers to your questions</p>
      </div>
      
      <div className="support-content">
        <div className="support-options">
          <h2>Contact Options</h2>
          <div className="options-grid">
            {supportOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div key={option.id} className="support-option">
                  <div className="option-icon" style={{ backgroundColor: option.color }}>
                    <IconComponent size={24} color="white" />
                  </div>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <button className="option-btn" style={{ borderColor: option.color, color: option.color }}>
                    {option.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <HelpCircle size={20} />
                  <h4>{faq.question}</h4>
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportView;
