import React from 'react'
import styled from 'styled-components';


const DashboardEarningRow = ({data}) => {
  return (
    <Overview>
      <CardContainer>
        {data.map((item) => (<>
          <Card key={item.title}>
            <Balance>{item.title}</Balance>
            <L2>{item.balance}</L2>
            {item.icon1 && <GroupIcon alt="" src={item.icon1} />}
            {item.from && <b>{item.b}</b>}
            {item.icon2 && <GroupIcon alt="" src={item.icon2} />}
            {item.defaultersPercentage && (
              <InLast30DaysGroup>
                <InLast30Container1>
                  <b>{item.defaultersPercentage}</b>
                  <InLast30>in last 30 days</InLast30>
                </InLast30Container1>
                <ArrowUp1Icon1 alt="" src={item.arrow} />
              </InLast30DaysGroup>
            )}
          <LineDiv />
          </Card>
          </>
        ))}
      </CardContainer>
    </Overview>
  );
};

const Overview = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 950px;
  height: 151px;
  background-color:white;
  border-radius: 30px;
  @media (max-width: 768px) {
    left: 120px;
  }
`;
const CardContainer = styled.div`
  position: absolute;
  top: 31px;
  left: 0px;
  width: 872px;
  height: 87px;
  font-size: 14px;
  color: #acacac;
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  top: 1px;
  left: 15px;
  width: 480px;
  height: 84px;
  font-size: 32px;
  color: #333;
  margin-left: 20px;
  margin-bottom: 16px;
  position: relative;
  
`;
const InLast30Container1 = styled.div`
  position: relative;
  top: 1px;
  left: 120px;
  letter-spacing: -0.01em;
`;
const ArrowUp1Icon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 100px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const InLast30DaysGroup = styled.div`
  position: relative;
  top: 65px;
  left: 0px;
  width: 132px;
  height: 20px;
  font-size:13px;
`;

const GroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 84px;
  height: 84px;
`;
const Balance = styled.div`
  position: absolute;
  top: 1px;
  left: 104px;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #acacac;
`;
const L2 = styled.div`
  position: absolute;
  top: 26px;
  left: 104px;
  letter-spacing: -0.01em;
  line-height: 100%;
  font-weight: 600;
`;

const InLast30 = styled.span`
  color: #292d32;
`;
const LineDiv = styled.div`
  position: absolute;
  top: -0.5px;
  left: 273.5px;
  border-right: 1px solid #f0f0f0;
  box-sizing: border-box;
  width: 1px;
  height: 88px;
`;

const Icon = styled.img`
  position: absolute;
  top: 50px;
  left: 721px;
  width: 44px;
  height: 44px;
  overflow: hidden;
`;
export default DashboardEarningRow