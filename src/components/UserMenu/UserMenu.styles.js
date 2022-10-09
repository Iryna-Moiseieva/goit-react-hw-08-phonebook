import styled from 'styled-components';
import Button from '../Button';

export const StyledHeaderAuth = styled.div`
  display: flex;
`;

// export const UserProfileWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 10px;
//     font-weight: 400;
//     font-size: var(--font-size-200);
//     color: var(--color-gray-300);

// `;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-weight: 400;
    font-size: var(--font-size-700);
    color: var(--color-gray-300);


`;

export const AuthBtn = styled(Button).attrs({
  type: 'button'
})`
  max-width: 200px;
`;
