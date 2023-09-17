import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/adaptive';
import { LineLink } from '../line-link';
import { media } from '../../styles/adaptive';
import { forwardRef } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { PATHS } from '../../utils/constants/paths';
import LogoTilBil from '../../images/logo-TilBil.png';

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

const AuthButton = styled.button`
  margin-left: 40px;
  border: none;
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
`;

export const Header = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth/login');
  };

  const handleSignUp = () => {
    navigate('/auth/signup');
  };

  return (
    <HeaderWrapper ref={ref}>
      <Content>
        <Center>
          <img src={LogoTilBil} alt={LogoTilBil} />
        </Center>
        <Center>
          <CenterLink to={PATHS.home.lessons.root}>САБАКТАР</CenterLink>
          <CenterLink to="/">ОЮНДАР</CenterLink>
          <CenterLink to="/">ТАПШЫРМАЛАР</CenterLink>
          <CenterLink to="/">ТИРКЕМЕ</CenterLink>
          <CenterLink to="/">
            <FaYoutube size={40} color="red" />
          </CenterLink>
        </Center>
        <Center>
          <AuthButton onClick={handleSignUp}>Катталуу</AuthButton>
          <AuthButton onClick={handleLogin}>Кирүү</AuthButton>
        </Center>
      </Content>
    </HeaderWrapper>
  );
});
