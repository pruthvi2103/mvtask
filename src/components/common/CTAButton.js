import React from 'react'
import styled from 'styled-components'

const CTAWrapper = styled.span`
background:#867EFF;
padding:12px 48px;
border-radius:8px;
color:#fff;
cursor:pointer;
font-weight:500;
`;
const Icon = styled.img`
width:18px;
height:18px;
display: inline-flex;
  align-self: center;
  top: .125em;
  position: relative;
`;
export const CTAButton = ({message,icon,clickAction}) => {
    return (
        <CTAWrapper onClick={() => clickAction()}>
          {icon && (<Icon src={icon}></Icon>)}  {message}
        </CTAWrapper>
    )
}
