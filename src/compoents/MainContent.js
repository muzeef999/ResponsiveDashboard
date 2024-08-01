import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsThreeDots } from "react-icons/bs";
import charts from './Charts';
import "../main.css";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoMdArrowDropup,IoMdArrowDropdown } from "react-icons/io";




const { Chart1, Chart2, PieChart3, TableData, TableDatadesign, Gradientgraph, ListData, Calendar, Percentage } = charts;

function MainContent() {
  return (
    <Container fluid>
      <Row style={{marginTop:'80px'}}>
       
        <Col>
          <h1>Dashboard</h1>
          <br/>
          <div className='grid_card'>  

          <div className='grid_item'>
            <div>
            <IoBagHandleSharp className='main_bag'/>
            <h6 style={{marginTop:'20px'}}>Total Orders</h6>
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>75</b></div>
                <div style={{ cursor: 'pointer', color: 'green' }}><b><IoMdArrowDropup size={30}/>3%</b></div>
              </div>
            </div>
            </div>
          <div className='grid_item'>

          <div>
            <IoBagHandleSharp className='main_bag1'/>
            <h6 style={{marginTop:'20px'}}>Total Delivered</h6>
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>70</b></div>
                <div style={{ cursor: 'pointer', color: 'red' }}><b><IoMdArrowDropdown size={30}/>3%</b></div>
              </div>
            </div>

          </div>
          <div className='grid_item'>

          <div>
            <IoBagHandleSharp className='main_bag2'/>
            <h6 style={{marginTop:'20px'}}>Total Cancelled</h6>
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>05</b></div>
                <div style={{ cursor: 'pointer', color: 'green' }}><b><IoMdArrowDropup size={30}/>3%</b></div>
              </div>
            </div>

          </div>
          <div className='grid_item'>

          <div>
            <IoBagHandleSharp className='main_bag3'/>
            
            <h6 style={{marginTop:'20px'}}>Total Revenue</h6>
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>$12k</b></div>
                <div style={{ cursor: 'pointer', color: 'red' }}><b><IoMdArrowDropup size={30}/>3%</b></div>
              </div>
            </div>
            
          </div>



          <div className='grid_item'> 
          <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <p><h6>Net Profit</h6></p>
                  <h3><b>$ 6759.25</b></h3>
                  <b style={{ cursor: 'pointer', color: 'green' }}><IoMdArrowDropup size={30}/>3%</b>
                  </div>
                <div > <PieChart3 /></div>
              </div>
            
            
             </div>
          
          
          
            <div className='grid_item'>
              <div className='d-flex justify-content-between align-items-center p-2'>
                <div><b>This month</b></div>
                <div style={{ cursor: 'pointer' }}><BsThreeDots /></div>
              </div>
              <br />
              <center>
                <Chart1 />
              </center>
            </div>
            <div className='grid_item'>
              <div className='d-flex justify-content-between align-items-center p-2'>
                <div><b>Weekly Revenue</b></div>
                <div style={{ cursor: 'pointer' }}><BsThreeDots /></div>
              </div>
              <br />
              <center>
                <Chart2 />
              </center>
            </div>
            <div className='grid_item'>
              <div className='d-flex justify-content-between align-items-center p-2'>
                <div><b>Check Table</b></div>
                <div style={{ cursor: 'pointer' }}><BsThreeDots /></div>
              </div>
              <br />
              <center>
                <TableData />
              </center>
            </div>
            <div className='grid_item'>
              <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>Daily Traffic</b></div>
                <div style={{ cursor: 'pointer', color: 'green' }}><b>+2.45%</b></div>
              </div>
              <center>
                <Gradientgraph />
              </center>
            </div>
            <div className='grid_item'>
              <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>Complex Table</b></div>
                <div style={{ cursor: 'pointer' }}><BsThreeDots /></div>
              </div>
              <br />
              <center> <TableDatadesign /></center>
            </div>
            
                      
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
