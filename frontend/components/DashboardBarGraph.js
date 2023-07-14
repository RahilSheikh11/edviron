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
      <OverviewChild alt="" src="/rectangle-161.svg" />
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
  top: 260px;
  left: -61px;
  width: 700px;
  height: 415px;
  font-size: 22px;
  @media (max-width: 768px) {
    left: 60px;
  }
`;
const OverviewChild = styled.img`
  position: absolute;
  border-radius: 30px;
  overflow: hidden;
`;
const Title = styled.div`
  position: absolute;
  top: 80px;
  left: 100px;
  letter-spacing: -0.01em;
  font-weight: 600;
`;
const Description = styled.div`
  position: absolute;
  top: 120px;
  left: 100px;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #acacac;
`;
const BarGraph = styled.div`
  position: absolute;
  top: 180px;
  left: 100px;
  width: 90%;
  height: 200px;
  font-size: 22px;
  display: flex; 
  align-items: flex-end; 
`;

const PercentageDisplay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #a5d8ff;
  opacity: 0;
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
