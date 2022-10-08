import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* margin: 0 auto; */}
  min-height: calc(100vh - 50px);
`;

export const Title = styled.div`
font-weight: 700;
  color: var(--color-blue-100);
  font-size: var(--font-size-700);
`;