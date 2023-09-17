import React from 'react';
import { styled } from 'styled-components';
import moduleBackground from '../../images/collection-module-background.svg';
import moduleImage from '../../images/home-footer-image.svg';

const StyledHomeFooter = styled.div`
  padding: 1rem 0;
  width: 100%;
  position: relative;
  height: 750px;

  & .container {
    width: 80%;
    margin: 0 auto;
  }

  & .headline {
    font-size: 40px;
    font-weight: 500;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;

    color: #0e5ea3;
  }

  & .wrapper {
    display: flex;
    align-items: center;
  }

  & .image-content {
    position: relative;

    & .image {
      position: absolute;
      top: 15%;
      left: 10vw;
      bottom: 0;
      right: 0;
    }
  }

  & .descriptions {
    display: grid;
    gap: 3rem;
  }

  & .typography {
    font-size: 36px;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;

    color: #0e5ea3;
  }
`;

const HomeFooter = () => {
  return (
    <StyledHomeFooter>
      <div className="container">
        <div className="content">
          <div className="headline">Адабий клуб</div>

          <div className="wrapper">
            <div className="image-content">
              <img src={moduleBackground} alt={moduleBackground} />
              <img src={moduleImage} alt={moduleImage} className="image" />
            </div>

            <div className="descriptions">
              <div className="typography">
                Биздин курстун катышуучусузбу? Анда сиздер дароо биздин адабий клубтун мүчөсү боло аласыз
              </div>

              <div className="typography">
                Клубта жума сайын жомоктор дүйнөсүнө саякат жасайбыз, талкуулайбыз, кыргызча баарлашабыз
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHomeFooter>
  );
};

export default HomeFooter;
