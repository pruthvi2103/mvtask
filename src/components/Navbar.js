import React from 'react'
import styled from 'styled-components'
//Component imports
import { NotificationWithBadge } from './common/NotificationWithBadge';
// Asset Imports png,svg,etc..
import LogoS from '../assets/S.svg'
import SearchIcon from '../assets/search.svg'
import UserIcon from '../assets/user.svg'



const Logo = styled.img`
display:inline-block;
height:71px;
width:73px;
`;
const LogoImg = styled.span`
font-weight:650;
font-size:28px;
margin-left:-20px;
`;
const NavWrapper = styled.div`
padding:4px 0 8px 0;
`;
const NavActionsWrapper = styled.div`
display:flex;
float:right;
height:75px;
`;
const SearchInput = styled.input`
border:none;
height:24px;
width:236px;
margin: 0px 0px 0px 11px;
&::-webkit-input-placeholder {
    font-size: 14px;
    color:#858585;
}
`;
const NavActionHolder = styled.div`
margin:39px 12px 37px 12px;
padding:0 16px;
display:inline-flex;
`;
const Icon = styled.img`
width:19px;
height:24px;

`;
const Divider = styled.div`
width: 3px;
height: 69px;
opacity: 0.15;
margin-top:12px;
border-left: solid 1px #3d57aa;
`;
export const Navbar = () => {
    return (
        <NavWrapper>
           <Logo src={LogoS}/><LogoImg>ecurizzA</LogoImg>
           <NavActionsWrapper>
               <NavActionHolder>
           <Icon src={SearchIcon}/>
            <SearchInput placeholder={'Search e.g. hosts, configurations'}/>
            </NavActionHolder>
            <Divider/>
            <NavActionHolder>
            <NotificationWithBadge notificationCount={12}/>
            </NavActionHolder>
            <Divider/>
            <NavActionHolder>
            <Icon src={UserIcon}/>
            </NavActionHolder>
           </NavActionsWrapper>

        </NavWrapper>
    )
}
