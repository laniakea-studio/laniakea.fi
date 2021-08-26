import React, { useEffect } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

interface SideMenuProps {
  data: any;
  isOpen: boolean;
  closeMenu: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  data,
  isOpen,
  closeMenu,
}) => {
  useEffect(() => {}, [isOpen]);

  return (
    <SideMenuStyled isOpen={isOpen}>
      <button className="closeBtn" onClick={closeMenu}>
        <svg
          width="32"
          height="31"
          viewBox="0 0 42 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.35072"
            y1="0.64364"
            x2="41.3507"
            y2="40.011"
            stroke="#D8D8D8"
          />
          <line
            x1="0.65095"
            y1="40.0094"
            x2="40.651"
            y2="1.0094"
            stroke="#D8D8D8"
          />
        </svg>
      </button>
      <div className="content">
        <h3>contact</h3>
      </div>
    </SideMenuStyled>
  );
};

const SideMenuStyled = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 0;
  ${props =>
    props.isOpen &&
    css`
      width: 400px;
    `}
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #222222;
  overflow-x: hidden;

  transition: 0.3s;
  color: ${theme.colorOnBlack};
  .content {
    padding: 40px;
    opacity: 0;
    transition: 0.8s;
    ${props =>
      props.isOpen &&
      css`
        opacity: 1;
      `}
  }
  .closeBtn {
    position: absolute;
    padding: 10px;
    top: 20px;
    right: 30px;
    &:hover {
      svg line {
        stroke: #fff;
      }
    }
  }
  h3 {
    font-size: 52px;
  }
`;
