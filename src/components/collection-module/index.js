import React from 'react';
import { styled } from 'styled-components';
import etnoDecloration from '../../images/Vector.jpg';
import moduleBackground from '../../images/collection-module-background.svg';
import moduleImage from '../../images/collection-module-image.svg';

const StyledCollectionModule = styled.div`
  padding: 1rem 0;
  width: 100%;
  position: relative;
  height: 750px;

  & .container {
    width: 80%;
    margin: 0 auto;
  }

  & .etno-decloration-image {
    position: absolute;
    top: 0;
    right: 0;
    height: 432px;
    aspect-ratio: 1/2;
    mix-blend-mode: darken;
    transform: rotate(180deg);
  }

  & .content {
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

      & .sub-content {
        display: grid;
        gap: 2.5rem;

        & .item {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;

          padding: 1rem;

          & .number-value {
            width: 70px;
            height: 70px;
            padding: 11px, 24px, 12px, 23px;
            border-radius: 16px;

            background: #e1f6fd;

            font-size: 40px;
            font-weight: 500;
            line-height: 47px;
            letter-spacing: 0em;
            text-align: left;

            display: grid;
            place-items: center;

            color: #1788c2;
          }

          & .desription-value {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            letter-spacing: 0em;
            text-align: left;

            padding: 0 0 0.5rem;

            color: #0e5ea3;
          }
        }

        & .second {
          padding-left: 4.5rem;
        }
        & .three {
          padding-left: 9rem;
        }
        & .four {
          padding-left: 13.5rem;
        }
      }

      & .image-content {
        position: relative;

        & .image {
          position: absolute;
          top: 20%;
          left: 10vw;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
`;

const CollectionModule = () => {
  return (
    <StyledCollectionModule>
      <div className="container">
        <div className="content">
          <div className="headline">Курстан эмнелерди үйрөнө аласыз</div>
          <div className="wrapper">
            <div className="sub-content">
              <div className="first item">
                <div className="number-value">1</div>
                <div className="desription-value">Кыргыз тилинин базалык грамматикасын</div>
              </div>
              <div className="second item">
                <div className="number-value">2</div>
                <div className="desription-value">Жашоо турмушта колдонулуучу тил көндүмдөрдү</div>
              </div>
              <div className="three item">
                <div className="number-value">3</div>
                <div className="desription-value">Өз оюңузду жазуу жана оозеки түрүндө жеткире билүү</div>
              </div>
              <div className="four item">
                <div className="number-value">4</div>
                <div className="desription-value">Кыргызча түш жоруу үчүн баардык шарттар бар</div>
              </div>
            </div>

            <div className="image-content">
              <img src={moduleBackground} alt={moduleBackground} />
              <img src={moduleImage} alt={moduleImage} className="image" />
            </div>
          </div>
        </div>
      </div>
      <img src={etnoDecloration} alt="etno decloration" className="etno-decloration-image" />
    </StyledCollectionModule>
  );
};

export default CollectionModule;
