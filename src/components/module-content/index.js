import React from 'react';
import { styled } from 'styled-components';
import etnoDecloration from '../../images/Vector.jpg';
import moduleImage from '../../images/module-image.svg';
import partyFunnyEmosion from '../../images/party-funny-emosion.svg';

const StyledModuleContent = styled('div')`
  width: 100%;
  height: 750px;
  padding: 1rem 0;
  position: relative;
  & .container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
  & .content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    position: relative;
  }
  & .etno-decloration-image {
    position: absolute;
    top: 45%;
    left: 0;
    height: 432px;
    aspect-ratio: 1/2;
    mix-blend-mode: darken;
  }
  & .party-funny-emosion {
    position: absolute;
    top: 75%;
    left: 35vw;
  }
  & picture {
    width: 522.06px;
    height: 516.93px;
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    & figure {
      width: 437.72px;
      height: 420.06px;
      border-radius: 70px;
      border: 0.5px solid #0d87ff;
      transform: rotate(15deg);
      position: absolute;
      display: grid;
      place-items: center;
      & img {
        transform: rotate(-15deg);
      }
    }
  }

  & .content-actions button {
    border: none;
  }
  & .content-actions button:first-child {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;

    padding: 20px 60px;
    border-radius: 30px;

    background: #fd6f00;

    color: #ffffff;
  }

  & .content-actions button:last-child {
    width: 545px;
    height: 103px;
    padding: 20px, 60px, 20px, 60px;
    border-radius: 30px;
    gap: 10px;

    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;

    background: #0d87ff;

    color: #ffffff;
  }

  & .headlines,
  .content-actions {
    display: grid;
    place-items: center;
    gap: 12px;
    & .headline {
      font-size: 40px;
      font-weight: 500;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;

      color: #0e5ea3;
    }

    & .sub-headline {
      font-size: 24px;
      font-weight: 400;
      line-height: 48px;
      letter-spacing: -0.02em;
      text-align: center;
    }
  }
`;

const ModuleContent = () => {
  return (
    <StyledModuleContent>
      <div className="container">
        <div className="content">
          <picture>
            <figure>
              <img src={moduleImage} alt="" />
            </figure>
          </picture>

          <div>
            <div className="headlines">
              <div className="headline">Тил бил мен кыргызча сүйлөйм</div>
              <div className="sub-headline">Балдарга жана чоңдорго кыргыз тилин заманбап методика менен үйрөтүү</div>
            </div>

            <div className="content-actions">
              <button>Курс онлайн</button>
              <button>Алгачкы сабака акысыз катышып көрүңүз</button>
            </div>
            <img src={partyFunnyEmosion} className="party-funny-emosion" alt={partyFunnyEmosion} />
          </div>
        </div>
        <img src={etnoDecloration} alt="etno decloration" className="etno-decloration-image" />
      </div>
    </StyledModuleContent>
  );
};

export default ModuleContent;
