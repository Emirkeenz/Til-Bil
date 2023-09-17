import React from 'react';
import { styled } from 'styled-components';
import Header from '../../components/lessons/header';

const StyledLessons = styled.div`
  height: 100%;
  width: 100%;
  display: block;
`;

const Lessons = () => {
  return (
    <StyledLessons>
      <Header />
    </StyledLessons>
  );
};

export default Lessons;
