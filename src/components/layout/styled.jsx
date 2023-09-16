import styled from "styled-components"
import { Container } from "../../styles/adaptive"

const calcMinHeight = ({ $footerH, $headerH }) => {
  const value = [$footerH, $headerH]
    .filter(el => el)
    .map(el => `${el}px`)
    .join(' - ')
  return `calc(100vh - ${value || '0'})`
}

export const MainContent = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: ${calcMinHeight};
`

export const AuthContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${calcMinHeight};
`