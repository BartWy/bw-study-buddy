import React from 'react';
import {
  Wrapper,
  NewsSectionHeader,
  ArticleWrapper,
  TittleWrapper,
  ContentWrapper,
} from './NewsSection.styles';
import { Button } from '../../atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum lorem ipsu lorem ipsum lirem ipsum Lorem ipsum lorem ipsu Lorem ipsum lorem ipsu lorem ipsum lirem ipsum Lorem ipsum lorem ipsulorem ipsum lirem ipsum Lorem ipsum lorem ipsu lorem ipsum lirem ipsum',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school-2',
    category: 'Tech news-2',
    content:
      '2--Lorem ipsum lorem ipsu lorem ipsum lirem ipsum Lorem ipsum lorem ipsu Lorem ipsum lorem ipsu lorem ipsum lirem ipsum Lorem ipsum lorem ipsulorem ipsum lirem ipsum Lorem ipsum lorem ipsu lorem ipsum lirem ipsum',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school-3',
    category: 'Tech news-3',
    content:
      '3--Lorem ipsum lorem ipsu lorem ipsum lirem ipsum Lorem ipsum lorem ipsu Lorem ipsum lorem ipsu lorem ipsum lirem ipsum Lorem ipsum lorem ipsulorem ipsum lirem ipsum Lorem ipsum lorem ipsu lorem ipsum lirem ipsum',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>New feed section</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TittleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TittleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt={'art img'} /> : null}
          </ContentWrapper>
          <Button isBig>Click mee</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};
export default NewsSection;
