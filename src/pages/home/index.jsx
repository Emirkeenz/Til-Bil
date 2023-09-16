import React from 'react'
import styled from "styled-components"
import cl from './styled.module.css'
import { LineLink } from '../../components/line-link'
import { Card } from '../../components/card';
import { KyrgyzForAdults, ProjectCardItems } from '../../components/card-list-kyrgyzForAdults';
import { KyrgyzForKids } from '../../components/card-list-kyrgyzForKids';
import { Header } from '../../components/header';

const CenterLink = styled(LineLink)`
  margin-left: 40px;
`

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className={cl.heroSection}></div>
      <div className={cl.kyrgyzLevels}>
        <KyrgyzForAdults />
        <KyrgyzForKids title={'Чоңдор үчүн кыргыз тили'}/>
      </div>
      <div className="footer">i3hrfo3hf3op</div>
    </>
  );
};

export default HomePage;