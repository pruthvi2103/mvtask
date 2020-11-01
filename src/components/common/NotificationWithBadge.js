import React from 'react'
import styled from 'styled-components'
import NotificationBell from '../../assets/alarm.svg'

const BellIcon = styled.img`
    height:20px;
    width:20px;
`;
const Badge= styled.div`
height:14px;
width:15px;
display:flex;
justify-content:center;
align-items:center;
font-size:8px;
border-radius:50%;
color:#fff;
background:#eb3232;
position:absolute;
top:0;
right:-4px;

`;
const NotificationWrapper = styled.div`
position:relative;
`
export const NotificationWithBadge = ({notificationCount}) => {
    return (
        <NotificationWrapper>
            <BellIcon src={NotificationBell}/>
    {notificationCount && (<Badge>{notificationCount}</Badge>)}
        </NotificationWrapper>
    )
}
