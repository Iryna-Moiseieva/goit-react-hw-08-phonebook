///Компоненти
import Container from '../Container';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from "components/AuthNav";

// по разному рендериться разметка в зависимсти от ого залогинен пользователь или нет
import { useAuth } from '../../hooks/useAuth';

// Сттили
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

