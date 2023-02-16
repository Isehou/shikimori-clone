import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  box-shadow: var(--shadow);
  width: 100%;
  height: 55px;
  display: flex;
  background-color: #173a5e;
  align-items: center;
  color: white;
  font-family: "Trebuchet MS", tahoma, arial, verdana;
  font-size: 12pt;
  justify-content: flex-end;
`;

const StyledCopyright = styled.div`
  padding-right: 100px;
  display: flex;
  justify-content: flex-end;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyright>
        SHIKIMORI CLONE. Project start: March 2022
      </StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;
