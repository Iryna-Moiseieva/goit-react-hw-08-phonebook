import styled from 'styled-components';
import Button from '../Button';

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  margin: auto;
  padding: 15px;
  border-radius: 8px;
  border-color: var(--color-blue-300);
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: var(--font-size-400);
  color: var(--color-blue-200);
`;

export const InputName = styled.input.attrs(() => ({
  type: 'text',
  name: 'name',
  autoComplete: 'off',
  required: true,
  pattern: `^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$`,
  title: `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`,
}))`
  display: block;
  margin-top: 5px;
  border: 2px solid var(--color-gray-200);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px var(--color-gray-100);
  background-color: inherit;

  &::placeholder {
    font-family: inherit;
    font-size: var(--font-size-300);
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

export const InputNumber = styled.input.attrs(() => ({
  type: 'tel',
  name: 'number',
  autoComplete: 'off',
  required: true,
  pattern: `\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}`,
  title: `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
}))`
  display: block;
  margin-top: 5px;
  border: 2px solid var(--color-gray-200);
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px var(--color-gray-100);
  background-color: inherit;
  &::placeholder {
    font-family: inherit;
    font-size: var(--font-size-300);
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

export const ButtonSubmit = styled(Button).attrs(() => ({
  type: 'submit',
}))`
font-size: var(--font-size-400);
`;
