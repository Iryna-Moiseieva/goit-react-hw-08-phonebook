import styled from 'styled-components';

export const InputEmail = styled.input.attrs(() => ({
  type: 'email',
  name: 'email',
  autoComplete: 'off',
  required: true,
  title: `Example user@mail.com`,
}))`
  display: block;
  margin-top: 5px;
  border: 2px solid var(--color-gray-200);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px var(--color-gray-100);
  background-color: inherit;

  &::placeholder {
    font-family: inherit;
    font-size: var(--font-size-500);
    color: var(--color-white);
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-blue-200);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:not(:placeholder-shown) {
    color: var(--color-white);
  }
`;

export const InputPassword = styled.input.attrs(() => ({
  type: 'password',
  name: 'password',
  autoComplete: 'off',
  required: true,
}))`
  display: block;
  margin-top: 5px;
  border: 2px solid var(--color-gray-200);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px var(--color-gray-100);
  background-color: inherit;
  &::placeholder {
    font-family: inherit;
    font-size: var(--font-size-500);
    color: var(--color-white);
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-blue-200);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:not(:placeholder-shown) {
    color: var(--color-white);
  }
`;

