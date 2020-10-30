import React from 'react'
import styled from 'styled-components';

const SidebarWrapper = styled.div`
padding:24px;
`;
const SidebarTitle = styled.h1`
font-weight:600;
`;
const SidebarSubtitle = styled.span`
`;
const SidebarSubHeading = styled.span`
font-weight:550;
display:block;
padding: 8px 0;
`;
const ListItem = styled.span`
display:block;
padding:12px 4px;
`;
const DropDown = styled.span`
display:block;
font-weight:550;
padding: 45px 5px;
`;
export const Sidebar = () => {
    const listItems = [{name:"Add Users"},{name:"Install Software"},{name:"Product Walkthrough"}];

    const renderListItems = () => {
        return(
            listItems.map(
                (item,index) => {
                   return (
                       <ListItem key={index}>
                           {item.name}
                       </ListItem>
                   )
                }
            )
        )
    }
    return (
        <SidebarWrapper>
        <SidebarTitle>Hello, Bruce</SidebarTitle>
        <SidebarSubHeading>Getting Started!</SidebarSubHeading> 
        <SidebarSubtitle>Great to have you onboard!
Lorem ipsum dolor sit amet</SidebarSubtitle>
<DropDown> ONBOARDING SETUP </DropDown>
        {renderListItems()}
        </SidebarWrapper>
    )
}
