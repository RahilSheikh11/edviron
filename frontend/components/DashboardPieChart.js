import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import styled from "styled-components";
ChartJS.register(ArcElement, Tooltip, Legend);
const Overview = styled.div`
  position: absolute;
  top: 306px;
  left: 662px;
  width: 285px;
  height: 415px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    left: 120px;
  }
`;

const ChartContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-top: 80px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Label = styled.span`
  margin: 0 10px;
`;
const Title = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  font-size: 22px;
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

const MyPieChart = () => {
  const data = {
    labels: ["Online", "Cash", "Cheque"],
    datasets: [
      {
        data: [63, 25, 11],
        backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Overview>
      <Title>Payment Mode</Title>
      <Description>Split between Online, Cash and Cheque for collections till date</Description>
      <ChartContainer>
        <Pie data={data} options={options} />
      </ChartContainer>
      <LabelContainer>
        {data.labels.map((label, index) => (
          <Label key={index}>{label}</Label>
        ))}
      </LabelContainer>
    </Overview>
  );
};

export default MyPieChart;
