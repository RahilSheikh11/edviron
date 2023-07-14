import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
    <DashboardRoot>
      <Sidebar></Sidebar>
    <Navbar>DAV Public School, Bhilai</Navbar>
      <Page>
        {children}</Page>
    </DashboardRoot>
    </>
  );
};
const DashboardRoot = styled.div`
  position: relative;
  background-color: #fafbff;
  width: 100%;
  height: 1198px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: #000;
  font-family: Poppins;
`;
const Page = styled.div`
  position: absolute;
  top: 107px;
  left: 377px;
  font-size: 12px;
  @media (max-width: 768px) {
    left: 8px;
  }
`;

const Navbar = styled.div`
  position: absolute;
  top: 41px;
  left: 377px;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 768px) {
    left: 120px;
  }
`;

export default Layout;
