// src/contexts/ConfigContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import mainApiService from '../services/mainApi';

const ConfigContext = createContext();

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    site: {
      title: 'SITE 2025',
      description: 'Default description',
      logo: '/site 2025 (5).png',
      primaryColor: '#3b82f6',
      secondaryColor: '#1e40af',
      accentColor: '#f59e0b'
    },
    contact: {
      email: 'contact@site2025.com',
      phone: '+216 XX XXX XXX',
      address: 'Default Address'
    },
    social: {
      facebook: 'https://www.facebook.com/profile.php?id=100090234982911',
      linkedin: 'https://www.linkedin.com/company/107036663/admin/dashboard/'
    },
    dates: {
      conferenceStart: '2025-04-15',
      conferenceEnd: '2025-04-17',
      submissionDeadline: '2025-02-15',
      registrationDeadline: '2025-03-15'
    },
    lastUpdated: new Date().toISOString()
  });
  
  const [speakers, setSpeakers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load configuration from backend
  const loadConfig = useCallback(async () => {
    try {
      setLoading(true);
      const siteData = await mainApiService.getSiteData();
      
      if (siteData) {
        setConfig(prev => ({
          ...prev,
          ...siteData.config,
          lastUpdated: siteData.config?.lastUpdated || new Date().toISOString()
        }));
        
        setSpeakers(siteData.speakers || []);
        setSessions(siteData.sessions || []);
      }
    } catch (err) {
      console.error('Failed to load site configuration:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Apply dynamic styles based on config
  const applyDynamicStyles = useCallback(() => {
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', config.site.primaryColor);
    root.style.setProperty('--secondary-color', config.site.secondaryColor);
    root.style.setProperty('--accent-color', config.site.accentColor);
    
    document.title = config.site.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.site.description);
    }
  }, [config]);

  // Refresh configuration (for real-time updates)
  const refreshConfig = useCallback(async () => {
    await loadConfig();
  }, [loadConfig]);

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  useEffect(() => {
    applyDynamicStyles();
  }, [config, applyDynamicStyles]);

  const value = {
    config,
    speakers,
    sessions,
    loading,
    error,
    refreshConfig,
    setConfig
  };

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
};