import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

export const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;


export const NavList = styled.ul`
  display: flex;
  margin: 0;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 400;
  font-size: var(--font-size-700);
  color: var(--color-gray-300);

  &:hover,
  &:focus {
    color: var(--color-blue-100);
    cursor: pointer;
  }

  &.active {
    color: var(--color-blue-300);
  }
`;