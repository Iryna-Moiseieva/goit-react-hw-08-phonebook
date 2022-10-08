import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 0;
  min-width: 200px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: var(--color-white);
  font-size: var(--font-size-500);
  background-color: var(--color-blue-200);
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-blue-100);
  }
`;


