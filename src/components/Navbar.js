import React, { useState, useCallback } from "react";
import styled from "styled-components";
// Local Imports
import { debounce } from "../utils/debounce";
//Component imports
import { NotificationWithBadge } from "./common/NotificationWithBadge";
import { Divider } from "../components/common/styledComponents";
// Asset Imports png,svg,etc..
import LogoS from "../assets/S.svg";
import SearchIcon from "../assets/search.svg";
import UserIcon from "../assets/user.svg";

const Logo = styled.img`
  display: inline-block;
  height: 71px;
  width: 73px;
`;
const LogoImg = styled.span`
  font-weight: 650;
  font-size: 28px;
  margin-left: -20px;
`;
const NavWrapper = styled.div`
  padding: 4px 0 8px 0;
`;
const NavActionsWrapper = styled.div`
  display: flex;
  float: right;
  height: 75px;
`;
const SearchInput = styled.input`
  border: none;
  height: 24px;
  width: 236px;
  margin: 0px 0px 0px 11px;
  &::-webkit-input-placeholder {
    font-size: 14px;
    color: #858585;
  }
  &:focus {
    outline: none;
  }
`;
const NavActionHolder = styled.div`
  margin: 39px 12px 37px 12px;
  padding: 0 16px;
  display: inline-flex;
`;
const Icon = styled.img`
  width: 19px;
  height: 24px;
`;
export const Navbar = () => {
  const callAPI = () => {
    console.log("API CAlled!!!");
  };
  const debouncedAPI = useCallback(debounce(1000, callAPI), []);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTerm = function (e) {
    setSearchQuery(e.target.value);
    debouncedAPI();
  };

  return (
    <NavWrapper>
      <Logo src={LogoS} />
      <LogoImg>ecurizzA</LogoImg>
      <NavActionsWrapper>
        <NavActionHolder>
          <Icon src={SearchIcon} />
          <SearchInput
            value={searchQuery}
            onChange={searchTerm}
            placeholder={"Search e.g. hosts, configurations"}
          />
        </NavActionHolder>
        <Divider />
        <NavActionHolder>
          <NotificationWithBadge notificationCount={12} />
        </NavActionHolder>
        <Divider />
        <NavActionHolder>
          <Icon src={UserIcon} />
        </NavActionHolder>
      </NavActionsWrapper>
    </NavWrapper>
  );
};
