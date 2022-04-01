import React from 'react';
import Table from 'react-bootstrap/Table';
import './student-table.styles.css';

function StudentTable() {
    return (
      <figure className="filter">
       <Table striped bordered hover>
         <thead className="table">
           <tr>
              <th>S/N</th>
              <th>Surname</th>
              <th>First Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Level</th>
              <th>State</th>
              <th>Action</th>
           </tr>
         </thead>
         <tbody className="first-line">
             <tr>
                <td>01</td>
                <td>Chukwuma</td>
                <td>James</td>
                <td>24</td>
                <td>Male</td>
                <td>100 level</td>
                <td>Ebonyi state</td>
                <td><button className="ghost">Download Result</button></td>
             </tr>
             <tr>
                <td>01</td>
                <td>Animashun</td>
                <td>Deborah</td>
                <td>24</td>
                <td>Female</td>
                <td>100 level</td>
                <td>Ondo state</td>
                <td><button className="ghost">Download Result</button></td>
             </tr>
             <tr>
                <td>01</td>
                <td>Mohammed</td>
                <td>Abubarka</td>
                <td>24</td>
                <td>Male</td>
                <td>100 level</td>
                <td>Katsina state</td>
                <td><button className="ghost">Download Result</button></td>
             </tr>
             <tr>
                <td>01</td>
                <td>Shola</td>
                <td>Bamidela</td>
                <td>24</td>
                <td>Male</td>
                <td>100 level</td>
                <td>Lagos state</td>
                <td><button className="ghost">Download Result</button></td>
             </tr>
             <tr>
                <td>01</td>
                <td>Effiong</td>
                <td>Grace</td>
                <td>24</td>
                <td>Female</td>
                <td>100 level</td>
                <td>Akwa Ibom state</td>
                <td><button className="ghost">Download Result</button></td>
             </tr>
             <tr>
                <td>01</td>
                <td>Shedrach</td>
                <td>Philemon</td>
                <td>24</td>
                <td>Male</td>
                <td>100 level</td>
                <td>Nasarawa state</td>
                <td><button className="ghost">Download Result</button></td>
             </tr>
              <tr>
                <td>01</td>
                <td>Babatunde</td>
                <td>Kikelomo</td>
                <td>24</td>
                <td>Female</td>
                <td>100 level</td>
                <td>Ogun state</td>
                <td><button className="ghost">Download Result</button></td>
             </tr>
         </tbody>
       </Table>
      </figure>
    );
}

export default StudentTable;