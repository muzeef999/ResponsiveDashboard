import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { GrUpgrade } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';



const Sidebar = ({ isOpen, }) => {
  return (
    <div className={`sidebar ${isOpen ? 'show' : 'collapsed'}`}>
      

      <Nav className="navbar-nav">
        <Nav.Item>
          <Nav.Link href="#home">
            <FaHome className="icon" />
            <span >&nbsp; Dashboard</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#features">
            <FaShoppingCart className="icon" />
            <span>&nbsp; NFT Marketplace</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#pricing">
            <BiSolidBarChartAlt2 className="icon" />
            <span>&nbsp; Tables</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#kanban">
            <MdDashboard className="icon" />
            <span>&nbsp; Kanban</span>
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
      <div>

      </div>
      <Nav className="navbar-nav">
         <Nav.Item>
          <Nav.Link href="#signin">
            <IoMdLock className="icon" />
            <span className="d-none d-lg-inline">&nbsp; Sign In</span>
          </Nav.Link>
        </Nav.Item>
        </Nav>
      
    </div>
  );
};

export default Sidebar;
