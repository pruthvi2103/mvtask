import React from 'react';
import styled from 'styled-components';
import {CTAButton} from './common/CTAButton';
const ContentWrapper = styled.div`
display:flex;
height:100%;
justify-content:center;
align-items:center;
`;
const LinkContainer = styled.div`
border-radius:8px;
border:#E5E5E5 solid;
padding:25px;
margin:24px;

`;
const LinkInfoHolder = styled.div`
display:grid;
gap:50px;
grid-template-columns: 1fr auto;
`;


const Heading = styled.span`
font-weight:500;
font-size:18px;
padding: 5px 0;
display:block;
`;
const Subtitle = styled.span`
font-weight:400;
padding: 5px 0;
`;
const CTAWrapper = styled.div`
margin:15px;
`;
export const Content = () => {
    return (
        <ContentWrapper>
            <LinkContainer>
            <LinkInfoHolder>
            
            <div>
<Heading>Installation Script</Heading>
<Subtitle>Run this installation script on your device you
wish to monitor</Subtitle>
            </div>
            <CTAWrapper>
            <CTAButton message={"Copy Link"}/>
            </CTAWrapper>
            </LinkInfoHolder>
            
            </LinkContainer>
        </ContentWrapper>
    )
}
