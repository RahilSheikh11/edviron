import React from "react";
import styled from "styled-components";

const DashboardBarGraph = () => {
  const monthlyData = [
    { month: "Jan", collectionPercentage: 100 },
    { month: "Feb", collectionPercentage: 100 },
    { month: "Mar", collectionPercentage: 100 },
    { month: "Apr", collectionPercentage: 80 },
    { month: "May", collectionPercentage: 75 },
    { month: "Jun", collectionPercentage: 55 },
    { month: "Jul", collectionPercentage: 40 },
    { month: "Aug", collectionPercentage: 35 },
    { month: "Sep", collectionPercentage: 25 },
    { month: "Oct", collectionPercentage: 20 },
    { month: "Nov", collectionPercentage: 15 },
    { month: "Dec", collectionPercentage: 10 },
  ];

  return (
    

    <Overview>
      <Title>Overview</Title>
      <Description>Monthly Collection</Description>
      <BarGraph>
        {monthlyData.map((month) => (
            <Bar key={month.month} height={month.collectionPercentage}>
            <XAxisColumnTitle>{month.month}</XAxisColumnTitle>
            <PercentageDisplay>{month.collectionPercentage}%</PercentageDisplay>
          </Bar>
        ))}
      </BarGraph>
    </Overview>
       
  );
};

const Overview = styled.div`
  position: absolute;
  top: 306px;
  width: 600px;
  height: 415px;
  font-size: 22px;
  border-radius: 30px;
  background-color:white;
  @media (max-width: 768px) {
    left: 120px;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  letter-spacing: -0.01em;
  font-weight: 600;
`;

const Description = styled.div`
  position: absolute;
  top: 85px;
  left: 50px;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #acacac;
`;

const BarGraph = styled.div`
  position: absolute;
  top: 130px;
  left: 50px;
  width: 90%;
  height: 250px;
  font-size: 22px;
  display: flex; 
  align-items: flex-end; 
`;

const PercentageDisplay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 8px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 24px;
  opacity: 0;
  background-image: url("/rectangle-cloud.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom:3px;
`;

const Bar = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: ${(props) => props.height}%;
  width: 5.85%;
  margin-right: 1.5%;
  border-radius: 8px;
  background-color: #f2efff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5932EA;

    ${PercentageDisplay} {
      opacity: 1;
    }
  }
`;


const XAxisColumnTitle = styled.div`
  position: absolute;
  bottom: -20px;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 10px;
  text-align: center;
`;


export default DashboardBarGraph;
