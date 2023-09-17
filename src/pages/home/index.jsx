import React from 'react';
import cl from './styled.module.css';
import { KyrgyzForAdults, ProjectCardItems } from '../../components/card-list-kyrgyzForAdults';
import { KyrgyzForKids } from '../../components/card-list-kyrgyzForKids';
import { Header } from '../../components/header';
import ModuleContent from '../../components/module-content';
import CollectionModule from '../../components/collection-module';

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

      <div className="footer">i3hrfo3hf3op</div>
    </>
  );
};

export default HomePage;
