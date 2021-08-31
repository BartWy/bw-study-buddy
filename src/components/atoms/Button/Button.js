import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.style';

const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
