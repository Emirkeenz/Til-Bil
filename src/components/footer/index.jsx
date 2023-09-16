import { forwardRef } from "react"
import styled from "styled-components"
import { Container, media } from "../../styles/adaptive"
import { LineLink } from "../line-link"

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.bg};
  color: ${({ theme }) => theme.colors.footer.text};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40px 0;

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
`

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CenterLink = styled(LineLink)`
  margin-left: 40px;
`

export const Footer = forwardRef((props, ref) => {
  return (
    <FooterWrapper ref={ref}>
      <Content>
        <Center>
          <CenterLink to="/">БИЗ ЖӨНҮНДӨ</CenterLink>
          <CenterLink to="/">САБАКТАР</CenterLink>
          <CenterLink to="/">ОЮНДАР</CenterLink>
          <CenterLink to="/">ТАПШЫРМАЛАР</CenterLink>
          <CenterLink to="/">ТИРКЕМЕ</CenterLink>
        </Center>
      </Content>
    </FooterWrapper>
  )
})