import React from 'react'
import styled from 'styled-components';

const DashboardPieChart = () => {
  return (
    <>
         <Customers>
          <CustomersChild alt="" src="/rectangle-291.svg" />
          <PaymentMode>Payment Mode</PaymentMode>
          <SplitBetweenOnlineContainer>
            <SplitBetweenOnline>Split between Online, Cash</SplitBetweenOnline>
            <SplitBetweenOnline>
              and Cheque for collections till date
            </SplitBetweenOnline>
          </SplitBetweenOnlineContainer>
          <ChartIcon alt="" src="/chart.svg" />
        </Customers>
        <Content>
          <Content1>
            <Sent>
              <Online>Online</Online>
              <B>63%</B>
              <SentChild />
            </Sent>
            <Recieved>
              <Cash>Cash</Cash>
              <B1>25%</B1>
              <RecievedChild />
            </Recieved>
            <Recieved1>
              <Cash>Cheque</Cash>
              <B2>11%</B2>
              <RecievedItem />
            </Recieved1>
          </Content1>
        </Content>
    </>
  )
}

const CustomersChild = styled.img`
  position: absolute;
  top: -50px;
  left: -60px;
  border-radius: 30px;
  width: 424px;
  height: 498px;
`;
const PaymentMode = styled.div`
  position: absolute;
  top: 24px;
  left: 38px;
  letter-spacing: -0.01em;
  font-weight: 600;
`;
const SplitBetweenOnline = styled.p`
  margin: 0;
`;
const SplitBetweenOnlineContainer = styled.div`
  position: absolute;
  top: 61px;
  left: 38px;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #acacac;
`;
const ChartIcon = styled.img`
  position: absolute;
  top: calc(50% - 71px);
  left: calc(50% - 71px);
  width: 143px;
  height: 143px;
`;
const Customers = styled.div`
  position: absolute;
  top: 306px;
  left: 665px;
  width: 304px;
  height: 378px;
  font-size: 22px;
`;
const Online = styled.div`
  position: absolute;
  bottom: 21px;
  left: 13px;
  letter-spacing: -0.02em;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 51px;
  height: 10px;
`;
const B = styled.b`
  position: absolute;
  bottom: 0px;
  left: 13px;
  font-size: 18px;
  letter-spacing: -0.02em;
  line-height: 30px;
  display: flex;
  color: #2b3674;
  align-items: center;
  width: 41px;
  height: 16px;
`;
const SentChild = styled.div`
  position: absolute;
  bottom: 22px;
  left: 0px;
  border-radius: 50%;
  background-color: #4318ff;
  width: 8px;
  height: 8px;
`;
const Sent = styled.div`
  position: absolute;
  bottom: 12.51px;
  left: 19px;
  width: 64px;
  height: 31px;
`;
const Cash = styled.div`
  position: absolute;
  right: 0px;
  bottom: 21px;
  letter-spacing: -0.02em;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 51px;
  height: 10px;
`;
const B1 = styled.b`
  position: absolute;
  right: 17px;
  bottom: 0px;
  font-size: 18px;
  letter-spacing: -0.02em;
  line-height: 30px;
  display: flex;
  color: #2b3674;
  align-items: center;
  width: 41px;
  height: 16px;
`;
const RecievedChild = styled.div`
  position: absolute;
  right: 56px;
  bottom: 22px;
  border-radius: 50%;
  background-color: #6ad2ff;
  width: 8px;
  height: 8px;
`;
const Recieved = styled.div`
  position: absolute;
  right: 83px;
  bottom: 12.51px;
  width: 64px;
  height: 31px;
`;
const B2 = styled.b`
  position: absolute;
  right: 5px;
  bottom: 0px;
  font-size: 18px;
  letter-spacing: -0.02em;
  line-height: 30px;
  display: flex;
  color: #2b3674;
  align-items: center;
  width: 41px;
  height: 16px;
`;
const RecievedItem = styled.div`
  position: absolute;
  right: 56px;
  bottom: 22px;
  border-radius: 50%;
  background-color: rgba(239, 244, 251, 0.73);
  width: 8px;
  height: 8px;
`;
const Recieved1 = styled.div`
  position: absolute;
  right: 11px;
  bottom: 12.51px;
  width: 64px;
  height: 31px;
`;
const Content1 = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 15px;
  background-color: #fff;
  height: 58.51px;
  overflow: hidden;
`;
const Content = styled.div`
  position: absolute;
  width: calc(100% - 717px);
  right: 26px;
  bottom: 38.49px;
  left: 691px;
  height: 58.51px;
  color: #a3aed0;
  font-family: "DM Sans";
`;
export default DashboardPieChart