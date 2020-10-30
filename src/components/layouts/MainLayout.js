import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
display:grid;
height:100vh;
grid-template-areas: 
"nav nav"
"side content"
;
grid-template-columns:240px 6fr;
grid-template-rows: 100px auto;
`;
const SidebarWrapper = styled.div`
    grid-area:side;
    background:#665EFF;
    box-shadow: 2px 0 5px 0 #888;
    color:#fff;

`;
const NavWrapper = styled.div`
grid-area:nav;
border-bottom: solid #f8f9fb;
`;
const ContentWrapper = styled.div`
grid-area:content;
`; 

export const MainLayout = ({children}) => {
    return (
        <Wrapper>
          <NavWrapper>{children[0]}</NavWrapper>
            <SidebarWrapper>{children[1]}</SidebarWrapper>
            <ContentWrapper>{children[2]}</ContentWrapper>
            
        </Wrapper>
    )
}
