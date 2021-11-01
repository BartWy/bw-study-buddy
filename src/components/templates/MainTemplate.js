import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from '../organisms/SearchBar/SerchBar';
import NewsSection from './NewsSection/NewsSection';
import NotesWidget from '../organisms/NotesWidget/NotesWidget';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
