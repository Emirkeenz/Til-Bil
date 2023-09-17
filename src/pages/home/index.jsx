import React from 'react';
import cl from './styled.module.css';
import { KyrgyzForAdults } from '../../components/card-list-kyrgyzForAdults';
import { KyrgyzForKids } from '../../components/card-list-kyrgyzForKids';
import { Header } from '../../components/header';
import ModuleContent from '../../components/module-content';
import CollectionModule from '../../components/collection-module';
import HomeFooter from '../../components/home-footer';

const HomePage = () => {
  return (
    <>
      <Header />

      <div className={cl.heroSection}></div>

      <ModuleContent />

      <div className={cl.kyrgyzLevels}>
        <KyrgyzForAdults title={'Балдар үчүн кыргыз тили'} />

        <KyrgyzForKids title={'Чоңдор үчүн кыргыз тили'} />
      </div>

      <CollectionModule />

      <HomeFooter />
    </>
  );
};

export default HomePage;
