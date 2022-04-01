import React from 'react';
import Logo from '../../assets/1821-768x591 1.png';
import Passport from '../../assets/Passport.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResultTable from '../result-table/result-table';
import './result.styles.css';

function Result() {
    return (
      <div className="promises">
       <nav className="header">
         <img src={Logo} alt="logo" className="header__logo"/><span className="side-logo">FCE</span>

         <div className="header__education">
          <h1 className="header__secondary">
              FREMONT COLLEGE OF EDUCATION
              <br className="hidden-xs"/>
             No.5 Raymond Osuman Street. PMG 2191 Maitama Abuja Nigeria1
           </h1>
         </div>
         <div className="header__passport">
          <img src={Passport} alt="passport" className="passport__image"/>
         </div>
       </nav>
       <div className="diploma__option">
          <h4 className="heading__tertiary">Post Graduate Diploma in Education</h4>
          <p className="long__copy">Student First Semester Statement Of Result</p>
         </div>
         <Container>
             <Row>
                <Col md={4}>
                  <h1 className="jhopq90">Name: <span className="side-name">Chukwuma James Nnamdi</span></h1>
                </Col>
                <Col md={{ span: 4, offset: 4}}>
                  <h1 className="jhopq90">Reg No: <span className="side-name">FCE/PGDE/2021/002</span></h1>
                </Col>
                <Col md={4}>
                  <h1 className="jhopq90">Level: <span className="side-name">100 level</span></h1>
                </Col>
                <Col md={{ span: 4, offset: 4}}>
                  <h1 className="jhopq90">Session: <span className="side-name">2022/2023 Session</span></h1>
                </Col>
             </Row>
         </Container>
         <ResultTable />
      </div>
    );
}


export default Result;