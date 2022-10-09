import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-500);
`;
export const IndexNumber = styled.span`
  margin-right: 5px;
  color: var(--color-blue-200);
`;

export const Name = styled.span`
  margin-right: 5px;
  color: var(--color-blue-200);
`;

export const Number = styled.span`
  margin-right: 5px;
  color: var(--color-gray-300);
`;

export const ButtonDelete = styled(Button).attrs(() => ({
  type: 'button',
}))`
  min-width: 100px;
  font-size: var(--font-size-300);
`;
