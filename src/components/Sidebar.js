import React from "react";
import styled from "styled-components";
import TickIcon from "../assets/tickdone.svg";
import DownArrow from "../assets/down-arrow.svg";
const SidebarWrapper = styled.div`
  padding: 24px 12px;
`;
const SidebarTitle = styled.h1`
  font-weight: 600;
`;
const SidebarSubtitle = styled.span``;
const SidebarSubHeading = styled.span`
  font-weight: 550;
  display: block;
  padding: 8px 0;
`;
const ListItem = styled.span`
  display: block;
  margin: 12px 0;
  padding: 12px 10px;
  background: ${(props) => {
    return props.active ? "rgba(255, 255, 255, 0.28)" : null;
  }};
  border-radius: 6px;
`;
const DropDown = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  padding: 45px 5px;
`;
const TickBackground = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  height: 13px;
  width: 13px;
  margin: auto;
`;
const PostFixItem = styled.div`
  float: right;
`;
const Steps = styled.div`
  float: right;
  font-size: 14px;
`;
export const Sidebar = () => {
  const CompleteBadge = () => {
    return (
      <TickBackground>
        <Icon src={TickIcon} />
      </TickBackground>
    );
  };
  const StepIndicator = () => {
    return <Steps>1 of 2</Steps>;
  };
  const listItems = [
    { name: "Add Users", postfix: <CompleteBadge /> },
    { name: "Install Software", postfix: <StepIndicator />, active: true },
    { name: "Product Walkthrough" },
  ];

  const renderListItems = () => {
    return listItems.map((item, index) => {
      return (
        <ListItem active={item.active} key={index}>
          {item.name}
          {item.postfix && <PostFixItem>{item.postfix}</PostFixItem>}
        </ListItem>
      );
    });
  };
  return (
    <SidebarWrapper>
      <SidebarTitle>Hello, Bruce</SidebarTitle>
      <SidebarSubHeading>Getting Started!</SidebarSubHeading>
      <SidebarSubtitle>
        Great to have you onboard! Lorem ipsum dolor sit amet
      </SidebarSubtitle>
      <DropDown>
        ONBOARDING SETUP{" "}
        <Icon style={{ float: "right" }} src={DownArrow}></Icon>
      </DropDown>

      {renderListItems()}
    </SidebarWrapper>
  );
};
