/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import cl from './styled.module.css';
import GameCardList from '../../components/gameCardList';

const GameCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 70px;
`;

const GameWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.games.bg};
  color: ${({ theme }) => theme.colors.games.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 70px;
  gap: 75px;
`;

const TextWrapper = styled.div`
  width: 50%;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-size: 24px;
  line-height: 36px;
`;

const GamePage = () => {
  return (
    <>
      <GameCardsWrapper>
        <GameCardList />
        <button className={cl.cardsButton}>Баштоо үчүн катталыңыз</button>
      </GameCardsWrapper>
      <GameWrapper>
        <div className={cl.gameImagePart}>
          <img src={require('../../images/toguz-korgool.png')} />
        </div>
        <TextWrapper>
          <h1>Тогуз коргоол</h1>
          <p>
            Тогуз коргоол, тогуз кумалак – 18 оюн тешиги жана эки аккумулятордук тешиги бар тактадагы кыргыз жана казак
            элдеринин логикалык оюну. Бул оюндун жөнөкөйлөштүрүлгөн түрү “Уйум тууду” деп аталат. Оюнчуларда беш тешик
            бар, ар бир тешикте беш таш бар.
          </p>
          <button className={cl.gameButton}>Уландысы</button>
        </TextWrapper>
      </GameWrapper>
      <GameWrapper>
        <TextWrapper>
          <h1>Ордо</h1>
          <p>
            Ордо – кыргыздын эң кеңири тараган оюндарынын бири – байыркы доордон бүгүнкү күнгө чейин сакталып келген.
            “Ордо” деген сөздүн өзү “хандын ордосу, хан сарайы” дегенди билдирет.
          </p>
          <button className={cl.gameButton}>Уландысы</button>
        </TextWrapper>
        <div className={cl.gameImagePart}>
          <img src={require('../../images/ordo.png')} />
        </div>
      </GameWrapper>
    </>
  );
};

export default GamePage;
