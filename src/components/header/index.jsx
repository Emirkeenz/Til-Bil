import { useNavigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/adaptive';
import { LineLink } from '../line-link';
import { media } from '../../styles/adaptive';
import { forwardRef } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { PATHS } from '../../utils/constants/paths';

const HeaderWrapper = styled.header`
  background-color: #1a88c2;
  width: 100%;
  align-items: center;
  height: 70px;
  box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
  padding-right: 70px;
  padding-left: 70px;
  margin-right: auto;
  margin-left: auto;
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
`;

const MobContent = styled(Container)`
  ${media.xs`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
  ${media.md`
    display: none;
  `}
`;

export const Header = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/auth/login');
  };

  return (
    <HeaderWrapper ref={ref}>
      <Content>
        <Center>
          <img src={require('../../images/logo-TilBil.png')} />
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
