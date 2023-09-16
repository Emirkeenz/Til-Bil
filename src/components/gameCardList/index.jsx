import React from 'react';
import styled from 'styled-components';
import { GameCard } from '../gameCard';

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;  
`

const GameCardList = () => {
  return (
    <List>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </List>
  );
};

export default GameCardList;