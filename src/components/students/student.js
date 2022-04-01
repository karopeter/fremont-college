import React from 'react';
import './student-data.styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentTable from '../student-table/student-table';

function StudentData() {
    return (
     <>
      <figure className="filter">
        <div className="f90432">
          <h1 className="ghb8906">Filter Student Table By:</h1>
        </div>
       <Container>
           <Row classname="row">
             <Col xs={6} md={4}>
               <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Select Age</span>
                  <i class="fa fa-caret-down icon"></i>
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">15</div>
                  <div className="dropdown-list__item">14</div>
                  <div className="dropdown-list__item">25</div>
                </div>
               </div>
             </Col>
             <Col xs={6} md={4}>
             <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">State</span>
                  <i class="fa fa-caret-down icon"></i>
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Ebonyi State</div>
                  <div className="dropdown-list__item">Ondo State</div>
                  <div className="dropdown-list__item">Katsina State</div>
                </div>
               </div>
             </Col>
             <Col xs={6} md={4}>
             <div className="dropdown">
                <div className="dropdown-select">
                  <span className="select">Level</span>
                  <i class="fa fa-caret-down icon"></i>
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">100 Level</div>
                  <div className="dropdown-list__item">100 Level</div>
                  <div className="dropdown-list__item">100 Level</div>
                </div>
               </div>
             </Col>
           </Row>
       </Container>
       <Container>
           <Row>
             <Col>
             <div className="dropitem">
                <div className="dropdown-select">
                  <span className="select">Gender</span>
                  <i class="fa fa-caret-down icon"></i>
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-list__item">Male</div>
                  <div className="dropdown-list__item">Female</div>
                </div>
               </div>
             </Col>
             <Col>
                <button type="submit" className="btn">Search</button>
             </Col>
           </Row>
       </Container>
      </figure>
       <StudentTable />
      </>
    );
}

export default StudentData;