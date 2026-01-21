import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Accueil');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { id: 'demarrer', label: 'Démarrer', icon: '🚀' },
    { id: 'collaborer', label: 'COLLABORER', icon: '👥' },
    { id: 'organiser', label: 'Organiser', icon: '📅' },
    { id: 'suivi', label: 'SUIVI & FEEDBACK', icon: '📊' },
    { id: 'motivation', label: 'Motivation & RÉCOMPENSES', icon: '🏆' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-container">
            <img src={logo} alt="MentorMate Logo" className="logo-image" />
            <h1 className="logo-text">MentorMate</h1>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="nav-menu-container">
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li 
                key={item.id} 
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <a href={`#${item.id}`} className="nav-link">
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <div className="user-info">
            <div className="user-avatar">
              <span className="avatar-icon">👩‍🎓</span>
            </div>
            <div className="user-details">
              <span className="user-name">Maria</span>
              <span className="user-role">Étudiante</span>
            </div>
          </div>
          <button className="profile-dropdown">
            <span className="dropdown-icon">▼</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-user-info">
              <div className="mobile-user-avatar">
                <span className="avatar-icon">👩‍🎓</span>
              </div>
              <div className="mobile-user-details">
                <span className="user-name">Maria</span>
                <span className="user-role">Étudiante</span>
              </div>
            </div>
          </div>
          
          <ul className="mobile-nav-menu">
            {menuItems.map((item) => (
              <li 
                key={item.id} 
                className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                <a href={`#${item.id}`} className="mobile-nav-link">
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span className="mobile-nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;