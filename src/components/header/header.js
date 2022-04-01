import React from 'react';
import StudentData from '../students/student';
import './header.styles.css';

function Header() {
    return (
    <>
    <div className="top-left">
        <h1 className="top-head">Student Data Table</h1>
     </div>
     <StudentData />
     </>
    );
}

export default Header;