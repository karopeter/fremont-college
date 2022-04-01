import React from 'react';
import Table from 'react-bootstrap/Table';
import './result-table.styles.css';

function ResultTable() {
    return (
      <div className="list">
        <Table responsive>
          <thead className="table">
             <tr>
               <th className="inset-cat">S/N</th>
               <th className="inset-cat">Course Code</th>
               <th className="inset-cat">Course Title</th>
               <th className="inset-cat">Unit</th>
               <th className="inset-cat">Grade</th>
               <th className="inset-cat">Total Point</th>
             </tr>
          </thead>
          <tbody>
             <tr className="top-boy">
                 <th className="test-flash">1</th>
                <th className="test-flash">PDE 701</th>
                <th className="test-flash">History of Education</th>
                <th className="test-flash">2</th>
                <th className="test-flash">A</th>
                <th className="test-flash">8</th>
             </tr>
             <tr className="lakes-film">
               <th className="test-flash">2</th>
               <th className="test-flash">PDE702</th>
               <th className="test-flash">Developmental Psychology</th>
               <th className="test-flash">2</th>
               <th className="test-flash">B</th>
               <th className="test-flash">9</th>
             </tr>
             <tr className="top-boy">
                 <th className="test-flash">3</th>
                <th className="test-flash">PDE 705</th>
                <th className="test-flash">Measurement and Evaluation</th>
                <th className="test-flash">2</th>
                <th className="test-flash">A</th>
                <th className="test-flash">8</th>
             </tr>
             <tr className="lakes-film">
               <th className="test-flash">4</th>
               <th className="test-flash">PDE706</th>
               <th className="test-flash">Educational Psychology</th>
               <th className="test-flash">2</th>
               <th className="test-flash">B</th>
               <th className="test-flash">9</th>
             </tr>
             <tr className="top-boy">
                 <th className="test-flash">5</th>
                <th className="test-flash">PDE 707</th>
                <th className="test-flash">Philosophy of Education</th>
                <th className="test-flash">2</th>
                <th className="test-flash">A</th>
                <th className="test-flash">8</th>
             </tr>
          </tbody>
        </Table>
        <Table>
          <thead className="after">
             <tr>
                <th className="inset-cat">UNTS</th>
                <th className="inset-cat">UNTD</th>
                <th className="inset-cat">GPTS</th>
                <th className="inset-cat">GPTD</th>
                <th className="inset-cat">GPATS</th>
                <th className="inset-cat">GPATD</th>
             </tr>
          </thead>
         <tbody>
             <tr className="space">
                <th className="ship">028</th>
                <th className="ship">028</th>
                <th className="ship">067</th>
                <th className="ship">2.71</th>
                <th className="ship">2.71</th>
             </tr>
         </tbody>
        </Table>
        <div>
          <p className="pass">Reward: <span className="link">Pass</span></p>
        </div>
        <div className="end">
          
        </div>
      </div>
    );
}

export default ResultTable;