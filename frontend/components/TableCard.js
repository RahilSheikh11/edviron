import React from "react";
import styled from "styled-components";

const breakpointAlpha = "480px";

const RwdTable = styled.table`
  margin: 1em 0;
  min-width: 300px;
  width: ${props => props.width}; 

  tr {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  th {
    display: none;
  }

  td {
    display: block;
font-weight:700px;
font-size:16px;
    &:first-child {
      padding-top: 0.5em;
    }
    &:last-child {
      padding-bottom: 0.5em;
    }

    &:before {
      content: attr(data-th) ": ";
      font-weight: bold;
      width: 6.5em;

      @media (min-width: ${breakpointAlpha}) {
        display: none;
      }
    }
  }

  th,
  td {
    text-align: left;

    @media (min-width: ${breakpointAlpha}) {
      display: table-cell;
      padding: 0.25em 0.5em;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }

  th {
    border-bottom: 2px solid #E9EDF7; 
  }
`;

const TableContainer = styled.div`
  position: absolute;
  background: #34495e;
  border-radius: 0.4em;
  overflow: hidden;
  top: 760px;
  left: ${props => props.left}; 
  border-radius: 0.4em;
  background-color: white;
  border-radius: 20px;
  padding-left:40px;
  padding-top:80px;
  tr {
    border-color: lighten(#34495e, 10%);
  }
  th,
  td {
    margin: 0.5em 1em;
    color: #2b3674;
    font-weight: 700;
    font-size:16px;
  }
  th,
  td:before {
    color: #a3aed0;
  }

  @media (max-width: 768px) {
    margin-left: 120px;
  }
`;
const Title = styled.div`
  position: absolute;
  top: 50px;
  left: 40px;
  font-size: 22px;
  letter-spacing: -0.01em;
  font-weight: 600;
`;



const TableCard = ({ title,rows, data, width, height ,left}) => {
  return (
    <TableContainer style={{ width, height ,left}}>
         <Title>{title}</Title>
      
      <RwdTable width={width}>
        <thead>
          <tr>
            {data.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-th={data[cellIndex]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </RwdTable>
    </TableContainer>
  );
};

export default TableCard;
