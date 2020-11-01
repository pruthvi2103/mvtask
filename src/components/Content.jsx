import React, {useState} from 'react';
import styled from 'styled-components';
import {CTAButton} from './common/CTAButton';

import LinkVector from "../assets/link.svg";
import CopyIcon from "../assets/copy.svg"
import { Toast } from './common/Toast';
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
width:680px;

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
color:#545454;
margin-bottom:4px;
`;
const Subtitle = styled.span`
font-weight:400;
padding: 5px 0;
color:#545454;
`;
const CTAWrapper = styled.div`
margin:auto;
`;

const LinkImage = styled.img`

`;
const InstallScriptWrapper = styled.div`
display:flex;
gap:15px;
`;
export const Content = () => {
    const [ShowToast,toggleToast] = useState(false); 

    const link = `https://www.google.com/`
    const copyLink = () =>{
        navigator.clipboard.writeText(link)
        toggleToast(true);
        setTimeout(() => {toggleToast(false)},1500);
    }
    return (
        <ContentWrapper>
            <LinkContainer>
            <LinkInfoHolder>
            
            <InstallScriptWrapper>
<LinkImage src={LinkVector}/>
<div>
<Heading>Installation Script</Heading>
<Subtitle>Run this installation script on your device you
wish to monitor</Subtitle>
</div>
            </InstallScriptWrapper>
            <CTAWrapper>
            <CTAButton clickAction={copyLink} message={"Copy Link"} icon={CopyIcon}/>
            </CTAWrapper>
            </LinkInfoHolder>
            
            </LinkContainer>
            {ShowToast &&(<Toast />)}
        </ContentWrapper>
    )
}
