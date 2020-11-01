import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity:0%;
  }
  to{
      opacity:100%;
  }
`;

const fadeOut = keyframes`
  from {
    opacity:100%;
  }
  to{
      opacity:0%;
  }
`;

const ToastWrapper = styled.div`
background:#000;
border-radius: 8px;
position:absolute;
bottom:10%;
opacity:0;
animation: ${fadeIn} 1s linear,${fadeOut} 1s linear ;
padding:12px 48px;
color:white;
`;
export const Toast = () => {
    return (
        <ToastWrapper>
            Link Copied
        </ToastWrapper>
    )
}
