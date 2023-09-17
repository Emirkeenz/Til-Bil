import styled from 'styled-components';
import { forwardRef } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Container, media } from '../../../styles/adaptive';
import { LineLink } from '../../line-link';
import { PATHS } from '../../../utils/constants/paths';
import LogoTilBil from '../../../images/logo-TilBil.png';

const HeaderWrapper = styled.header`
  background: #e1f6fd;

  width: 100%;
  align-items: center;
  height: 70px;
  box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
  padding-right: 70px;
  padding-left: 70px;
  margin-right: auto;
  margin-left: auto;

  position: sticky;
  top: 0;
  z-index: 100;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ${media.xs`
    display: none;
  `}
  ${media.md`
  display: flex;
  & div {
    display: flex;
    align-items: center;
  }
  `}
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CenterLink = styled(LineLink)`
  margin-left: 40px;
  color: #0e5ea3;
`;

const Header = forwardRef((props, ref) => {
  return (
    <HeaderWrapper ref={ref}>
      <Content>
        <Center>
          <img src={LogoTilBil} alt={LogoTilBil} />
        </Center>
        <Center>
          <CenterLink to={PATHS.home.lessons}>САБАКТАР</CenterLink>
          <CenterLink to="/">ОЮНДАР</CenterLink>
          <CenterLink to="/">ТАПШЫРМАЛАР</CenterLink>
          <CenterLink to="/">ТИРКЕМЕ</CenterLink>
          <CenterLink to="/">
            <FaYoutube size={40} color="red" />
          </CenterLink>
        </Center>
        <Center>
          <CenterLink to="/">Катталуу</CenterLink>
          <CenterLink to="/">Кирүү</CenterLink>
        </Center>
      </Content>
    </HeaderWrapper>
  );
});

export default Header;
