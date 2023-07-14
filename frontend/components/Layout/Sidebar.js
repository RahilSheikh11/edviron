import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const sidebarData = [
    {
      icon: "/icon--24--outline--keysquare.svg",
      label: "Dashboard",
    },
    {
      icon: "/3dsquare-1.svg",
      label: "Fee Management",
    },
    {
      icon: "/usersquare-1.svg",
      label: "Students",
    },
    {
      icon: "/walletmoney-2.svg",
      label: "Disbursal",
    },
    {
      icon: "/discountshape-1.svg",
      label: "Promote",
    },
    {
      icon: "/messagequestion-1.svg",
      label: "Help",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <SideMenu>
      <SideMenuChild />
      <Logo>
        <Edviron>Edviron</Edviron>
        <Setting1Icon src="/setting-1.svg" alt="" />
        <V01>v.01</V01>
      </Logo>
      <ListMenuContainer>
        {sidebarData.map((item, index) => (
          <ListMenuItem
            key={index}
            onClick={() => handleItemClick(index)}
            selected={index === selectedItem}
          >
            <Icon24OutlineKeySqua src={item.icon} alt="" />
            <SideMenuItemLabel>{item.label}</SideMenuItemLabel>
            <ChevronRight2Icon src="/chevronright-2.svg" alt="" />
          </ListMenuItem>
        ))}
      </ListMenuContainer>
      <SideMenuInner src="/ellipse-8@2x.png" alt="" />
      <PrashantKumarParent>
        <PrashantKumar>Prashant Kumar</PrashantKumar>
        <SuperAdmin>Super Admin</SuperAdmin>
      </PrashantKumarParent>
      <ChevronDown2Icon src="/chevrondown-2.svg" alt="" />
      
    </SideMenu>
  );
};

const SideMenu = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 306px;
  height: 1198px;
  color: #9197b3;

  @media (max-width: 768px) {
    width: 64px;
  }
`;

const SideMenuChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #fff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  width: 306px;
  height: 1198px;

  @media (max-width: 768px) {
    width: 90px;
  }
`;

const Icon24OutlineKeySqua = styled.img`
  width: 24px;
  height: 24px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 64px;
  }
`;

const ListMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 139px;
  left: 39px;
  width: 231px;
  color: #fff;

  > div:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (max-width: 768px) {
    width: 64px;
    left: 10px;
  }
`;

const ListMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => (props.selected ? "#5932ea" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#a3aed0")};
  border-radius: 8px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 8px 0;
  }
`;

const SideMenuItemLabel = styled.div`
  margin-left: 10px;
  letter-spacing: -0.01em;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ChevronRight2Icon = styled.img`
  position: absolute;
  left: 215px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  @media (max-width: 768px) {
    left: 60px;
  }
`;

const SideMenuInner = styled.img`
  position: absolute;
  top: 1080px;
  left: 28px;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  object-fit: cover;
`;

const PrashantKumar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.01em;
  font-weight: 500;
`;

const SuperAdmin = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  font-size: 12px;
  letter-spacing: 0.01em;
  color: #757575;
`;

const PrashantKumarParent = styled.div`
  position: absolute;
  top: 1082px;
  left: 82px;
  width: 117px;
  height: 38px;
  color: #000;
`;

const ChevronDown2Icon = styled.img`
  position: absolute;
  top: 1089px;
  left: 254px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;

const Edviron = styled.div`
  position: absolute;
  top: 0px;
  left: 45px;
  letter-spacing: 0.01em;
  font-weight: 600;
  @media (max-width: 768px) {
    display:none;
  }
`;

const Setting1Icon = styled.img`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 37px;
  height: 37px;
  overflow: hidden;
`;

const Logo = styled.div`
  position: absolute;
  top: 36px;
  left: 28px;
  width: 146px;
  height: 39px;
  font-size: 26px;
  color: #000;
`;

const V01 = styled.div`
  position: absolute;
  top: 56px;
  left: 174px;
  font-size: 10px;
  letter-spacing: -0.01em;
  font-weight: 500;
  color: #838383;
`;

export default Sidebar;
