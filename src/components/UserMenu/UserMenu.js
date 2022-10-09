import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';


import {
  StyledHeaderAuth,
  UserProfile,
  AuthBtn
} from './UserMenu.styles';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledHeaderAuth>
      <UserProfile>Welcome, {user.name}</UserProfile>
      <AuthBtn onClick={() => dispatch(logOut())} text='Log Out'/>
    </StyledHeaderAuth>
    )
}

