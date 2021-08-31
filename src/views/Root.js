import React from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { Warapper } from './Root.style';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Warapper>
      <UsersList />
    </Warapper>
  </ThemeProvider>
);

Root.propTypes = {};
export default Root;
