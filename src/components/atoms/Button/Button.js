import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  margin: 15px 0;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;
