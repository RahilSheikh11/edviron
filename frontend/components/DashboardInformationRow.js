import React from 'react';
import styled from 'styled-components';

const DashboardInformationRow = () => {
  const dashboardData = [
    {
      icon: '/rectangle-16.svg',
      label: 'Students',
      value: '1,049',
    },
    {
      icon: '/rectangle-16.svg',
      label: 'Sections',
      value: '18',
      description: 'in 12 classes',
    },
    {
      icon: '/rectangle-16.svg',
      label: 'Collection this month',
      value: '₹90.56L',
    },
    {
      icon: '/rectangle-16.svg',
      label: 'Fine Collected till date',
      value: '₹11.20L',
    },
  ];

  return (
    <DashboardInner>
      {dashboardData.map((item, index) => (
        <VectorParent key={index}>
          <GroupChild alt="" src={item.icon} />
          <CollectionThisMonth>{item.label}</CollectionThisMonth>
          <Value>{item.value}</Value>
          {item.description && <Description>{item.description}</Description>}
        </VectorParent>
      ))}
    </DashboardInner>
  );
};

const DashboardInner = styled.div`
  position: absolute;
  top: 180px;
  left: 0px;
  width: 966px;
  height: 95px;
  color: #acacac;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    left: 120px;
  }
`;

const GroupChild = styled.img`
  position: absolute;
  top: -50px;
  left: -60px;
  border-radius: 20px;
  width: 345px;
  height: 215px;
`;

const CollectionThisMonth = styled.div`
  position: absolute;
  top: 18px;
  left: 29px;
  letter-spacing: -0.01em;
`;

const Value = styled.div`
  position: absolute;
  top: 43px;
  left: 29px;
  font-size: 32px;
  letter-spacing: -0.01em;
  line-height: 100%;
  font-weight: 600;
  color: #333;
`;

const Description = styled.div`
  position: relative;
  top: 55px;
  left: 70px;
  font-size: 14px;
  color: #757575;
`;

const VectorParent = styled.div`
  position: relative;
  width: 225px;
  height: 95px;
  margin-right: 16px;
`;

export default DashboardInformationRow;
