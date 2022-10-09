import { FcMultipleSmartphones } from 'react-icons/fc';
import { useAuth } from '../../hooks/useAuth';

import {
  StyledHeaderNav,
  Logo,
  NavList,
  NavItem,
  LinkStyled,
} from './Navigation.styles';


export default function Navigation() {
  const { isLoggedIn } = useAuth();

return (
  <StyledHeaderNav>
    <Logo to="/">
      <FcMultipleSmartphones size={80}/>
    </Logo>

      <NavList>
        <NavItem>
          <LinkStyled to="/">Home</LinkStyled>
      </NavItem>

      {isLoggedIn && (
        <NavItem>
          <LinkStyled to="/contacts">Contacts</LinkStyled>
        </NavItem>
      )}
        </NavList>
    </StyledHeaderNav>
  );
};
