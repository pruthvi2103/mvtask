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
export const CTAButton = ({message,icon}) => {
    return (
        <CTAWrapper>
            {message}
        </CTAWrapper>
    )
}
