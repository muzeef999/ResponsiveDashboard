import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { CiCircleInfo } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';

const Appbar = ({ theme, toggleTheme, toggleSidebar }) => {
  return (
    <div className="d-flex flex-wrap w-100 justify-content-between align-items-center searchbackground" style={{ padding: '8px' }}>
      
        <div className="d-flex justify-content-start align-items-center">
          <div>
            <span style={{ backgroundColor: 'transparent', border: 'none' }} onClick={toggleSidebar}>
              <MdDashboard size={25} className="me-2" />
            </span>
          </div>
          <div className="flex-grow-1 d-flex justify-content-center justify-content-md-start">
            <div className="input-container d-flex align-items-center ms-2">
              <FaSearch className="input-icon" />
              <input
                type="text"
                placeholder="Search"
                className="input-with-icon form-control"
              />
            </div>
          </div>
        </div>

        
        <div className="d-flex justify-content-end align-items-center">
  <div className="d-flex flex-wrap align-items-center">
    <div className="d-flex align-items-center" style={{ padding: '10px' }}>
      <IoIosNotificationsOutline size={40} className="searchicon me-1" />
      <span onClick={toggleTheme}>
        {theme === 'light' ? <IoMoonSharp size={40} className="searchicon me-1" /> : <IoSunny size={40} className="searchicon me-1" />}
      </span>
      <CiCircleInfo size={40} className="searchicon me-1" />
      <CgProfile size={40} className="searchicon" />
    </div>
  </div>
        </div>
      
    </div>
  );
};

export default Appbar;