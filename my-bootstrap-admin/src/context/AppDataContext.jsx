import React, { createContext, useContext, useState, useEffect } from 'react';

// This data structure contains all the manageable content
const initialData = {
  // General Settings
  siteName: "Admin CMS",
  logoUrl: "/site-logo.png",

  // Registration dates
  registrationStartDate: "",
  registrationEndDate: "",
  speakers: [
    { id: 1, name: 'Dr. Ada Lovelace', title: 'Chief Scientist', topic: 'The Future of Smart Industry' },
    { id: 2, name: 'Prof. Charles Babbage', title: 'Professor', topic: 'Mechanical Engineering' },
    { id: 3, name: 'Grace Hopper', title: 'Admiral', topic: 'Big Data & Security' },
    { id: 4, name: 'Tim Berners-Lee', title: 'Director', topic: 'The Semantic Web' }
  ],
  schedule: {
    'October 24': [
      { id: 1, time: '08:30-09:00', event: 'Registration & Welcome Coffee' },
      { id: 2, time: '09:00-09:30', event: 'Opening Ceremony' },
      { id: 3, time: '09:30-10:30', event: 'Keynote: Future of Smart Industry' },
    ],
    'October 25': [
      { id: 1, time: '09:00-10:00', event: 'Keynote: Sustainable Technology Solutions' },
      { id: 2, time: '10:00-10:30', event: 'Coffee Break' },
    ],
    'October 26': [
      { id: 1, time: '09:00-10:00', event: 'Keynote: Digital Transformation in Industry' },
      { id: 2, time: '15:30-16:30', event: 'Closing Ceremony & Awards' },
    ],
    'Special Sessions': [
      { id: 1, time: 'TBA', event: 'To be announced' },
    ],
  },
  
  // Dates (removed "important" status)
  dates: [
    { id: 1, date: 'July 30th, 2025', event: 'Paper Submission Deadline', description: 'Final deadline for all paper submissions', status: 'critical' },
    { id: 2, date: 'September 15th, 2025', event: 'Acceptance Notification', description: 'Authors will be notified of paper acceptance', status: 'success' },
    { id: 3, date: 'September 20th, 2025', event: 'Registration Deadline', description: 'Early bird registration closes', status: 'deadline' },
    { id: 4, date: 'October 1st, 2025', event: 'Camera-Ready Submission', description: 'Final paper versions due', status: 'deadline' },
  ]
};

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [appData, setAppData] = useState(() => {
    try {
      const savedData = localStorage.getItem('appData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        // Migration: if old data has importantDates but no dates, migrate it
        if (parsedData.importantDates && !parsedData.dates) {
          parsedData.dates = parsedData.importantDates;
        }
        // Ensure new fields exist
        if (!parsedData.registrationStartDate) parsedData.registrationStartDate = '';
        if (!parsedData.registrationEndDate) parsedData.registrationEndDate = '';
        if (!parsedData.dates) parsedData.dates = [];
        return parsedData;
      }
      return initialData;
    } catch (error) {
      return initialData;
    }
  });

  useEffect(() => {
    localStorage.setItem('appData', JSON.stringify(appData));
  }, [appData]);

  const updateData = (key, value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          setAppData(prevData => {
            const newData = { ...prevData, [key]: value };
            // Validate the data structure
            if (typeof newData !== 'object' || newData === null) {
              throw new Error('Invalid data structure');
            }
            return newData;
          });
          resolve();
        } catch (error) {
          console.error('Error updating data:', error);
          reject(error);
        }
      }, 300);
    });
  };

  const value = { appData, updateData };

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};