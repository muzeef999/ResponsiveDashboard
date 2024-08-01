import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './compoents/Sidebar';
import MainContent from './compoents/MainContent';
import 'react-calendar/dist/Calendar.css';
import Appbar from './compoents/Appbar';

function App() {
  const [theme, setTheme] = useState('light');
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Appbar  theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar}/>
    <div className={`App d-flex`}>
      <Sidebar isOpen={showSidebar} toggleSidebar={toggleSidebar} />
      <div className={`main-content-container ${showSidebar ? 'expanded' : 'collapsed'}`}>
        <MainContent theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
      </div>
    </div>
    </div>
  );
}

export default App;
