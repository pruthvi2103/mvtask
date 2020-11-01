import styled from "styled-components";
export const Divider = styled.div`
  width: 3px;
  height: 69px;
  opacity: 0.15;
  margin-top: 12px;
  border-left: solid 1px #3d57aa;
`;
export const CustomInput = styled.input`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 0 12px;
  border: ${(props) => {
    return props.disabled ? "1px solid #e0e0e0" : "2px solid #665eff";
  }};
  border-radius: 4px;
  background-color: ${(props) => {
    return props.backgroundColor ? props.backgroundColor : null;
  }};
  &::-webkit-input-placeholder {
    font-size: 16px;
  }
`;
