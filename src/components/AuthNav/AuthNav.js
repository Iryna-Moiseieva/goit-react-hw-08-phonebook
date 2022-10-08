import {
  NavList,
  NavItem,
  LinkStyled,
} from '../Navigation/Navigation.styles';

export default function AuthNav() {
  return (
    <NavList>
      <NavItem>
        <LinkStyled to="/login">Login</LinkStyled>
      </NavItem>
      <NavItem>
        <LinkStyled to="/register">Register</LinkStyled>
      </NavItem>
    </NavList>
  );
}
