import Container from '../Container';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from "components/AuthNav";

import { useAuth } from '../../hooks/useAuth';

import {
  StyledHeader,
  Wrapper
} from './Header.styles';


export default function Header() {
  const { isLoggedIn } = useAuth();

return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Wrapper>
      </Container>
    </StyledHeader>
  );
};

