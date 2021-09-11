import styled from 'styled-components';

const Button = styled.button`
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 22px;
  height: 22px;
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

export default Button;
